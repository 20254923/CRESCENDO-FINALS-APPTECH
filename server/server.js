import { createServer } from 'node:http';
import { randomUUID, pbkdf2Sync, randomBytes, timingSafeEqual } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const PORT = Number(process.env.PORT || 8787);
const DB_PATH = resolve('server/data/db.json');

async function readDb() {
  try {
    return JSON.parse(await readFile(DB_PATH, 'utf8'));
  } catch {
    return { users: [], progress: {} };
  }
}

async function writeDb(db) {
  await mkdir(dirname(DB_PATH), { recursive: true });
  await writeFile(DB_PATH, JSON.stringify(db, null, 2));
}

function hashPassword(password, salt = randomBytes(16).toString('hex')) {
  const hash = pbkdf2Sync(password, salt, 120000, 32, 'sha256').toString('hex');
  return { salt, hash };
}

function verifyPassword(password, user) {
  const candidate = hashPassword(password, user.passwordSalt).hash;
  return timingSafeEqual(Buffer.from(candidate, 'hex'), Buffer.from(user.passwordHash, 'hex'));
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  response.end(JSON.stringify(payload));
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

function publicUser(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: 'student',
    createdAt: user.createdAt,
  };
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === 'OPTIONS') {
      sendJson(response, 204, {});
      return;
    }

    if (request.method === 'GET' && url.pathname === '/api/health') {
      sendJson(response, 200, { ok: true, service: 'crescendo-api' });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/register') {
      const { username, email, password } = await readBody(request);
      const normalizedEmail = String(email || '').trim().toLowerCase();
      const displayName = String(username || '').trim();

      if (!displayName || !normalizedEmail || !password) {
        sendJson(response, 400, { error: 'Name, email, and password are required.' });
        return;
      }

      const db = await readDb();
      if (db.users.some((user) => user.email === normalizedEmail)) {
        sendJson(response, 409, { error: 'That email is already registered.' });
        return;
      }

      const passwordRecord = hashPassword(password);
      const user = {
        id: randomUUID(),
        username: displayName,
        email: normalizedEmail,
        passwordSalt: passwordRecord.salt,
        passwordHash: passwordRecord.hash,
        createdAt: new Date().toISOString(),
      };

      db.users.push(user);
      db.progress[user.id] = {};
      await writeDb(db);
      sendJson(response, 201, { user: publicUser(user) });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/login') {
      const { email, password } = await readBody(request);
      const normalizedEmail = String(email || '').trim().toLowerCase();
      const db = await readDb();
      const user = db.users.find((item) => item.email === normalizedEmail);

      if (!user || !verifyPassword(password || '', user)) {
        sendJson(response, 401, { error: 'Email or password is incorrect.' });
        return;
      }

      sendJson(response, 200, { user: publicUser(user), progress: db.progress[user.id] || {} });
      return;
    }

    if (request.method === 'GET' && url.pathname === '/api/progress') {
      const userId = url.searchParams.get('userId');
      const db = await readDb();

      if (!userId || !db.users.some((user) => user.id === userId)) {
        sendJson(response, 404, { error: 'User not found.' });
        return;
      }

      sendJson(response, 200, { progress: db.progress[userId] || {} });
      return;
    }

    if (request.method === 'PUT' && url.pathname === '/api/progress') {
      const { userId, progress } = await readBody(request);
      const db = await readDb();

      if (!userId || !db.users.some((user) => user.id === userId)) {
        sendJson(response, 404, { error: 'User not found.' });
        return;
      }

      db.progress[userId] = progress || {};
      await writeDb(db);
      sendJson(response, 200, { progress: db.progress[userId] });
      return;
    }

    sendJson(response, 404, { error: 'Not found.' });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`Crescendo API listening on http://127.0.0.1:${PORT}`);
});
