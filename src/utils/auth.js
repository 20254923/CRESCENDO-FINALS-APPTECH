const CURRENT_USER_KEY = 'crescendo_user';
const ACCOUNTS_KEY = 'crescendo_accounts';
const DEMO_USER = {
  id: 'demo-student',
  username: 'Demo Virtuoso',
  email: 'demo@crescendo.test',
  role: 'student',
};

export const DEMO_USER_ID = DEMO_USER.id;

export class AuthError extends Error {
  constructor(message, field = 'form') {
    super(message);
    this.name = 'AuthError';
    this.field = field;
  }
}

function readAccounts() {
  const raw = localStorage.getItem(ACCOUNTS_KEY);
  if (!raw) return [];

  try {
    const accounts = JSON.parse(raw);
    return Array.isArray(accounts) ? accounts : [];
  } catch (error) {
    localStorage.removeItem(ACCOUNTS_KEY);
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export const register = ({ username, email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const displayName = username.trim();
  const accounts = readAccounts();
  const existing = accounts.find((account) => account.email === normalizedEmail);

  if (existing) {
    throw new AuthError('That email is already registered. Try signing in instead.', 'email');
  }

  const user = {
    id: crypto.randomUUID(),
    username: displayName,
    email: normalizedEmail,
    password,
    role: 'student',
    createdAt: new Date().toISOString(),
  };

  saveAccounts([...accounts, user]);
  const sessionUser = { id: user.id, username: user.username, email: user.email, role: 'student' };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
  return sessionUser;
};

export const login = ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const account = readAccounts().find((item) => item.email === normalizedEmail);

  if (!account || account.password !== password) {
    throw new AuthError('Email or password is incorrect.', 'form');
  }

  const user = {
    id: account.id,
    username: account.username,
    email: account.email,
    role: 'student',
  };

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
  window.location.href = '/login';
};

export const loginDemo = () => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(DEMO_USER));
  return DEMO_USER;
};

export const resetLocalDemoData = () => {
  Object.keys(localStorage)
    .filter((key) => key === CURRENT_USER_KEY || key === ACCOUNTS_KEY || key.startsWith('crescendo_progress_'))
    .forEach((key) => localStorage.removeItem(key));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  if (!user) return null;

  try {
    const parsed = JSON.parse(user);
    return parsed?.role === 'student' ? parsed : null;
  } catch (error) {
    localStorage.removeItem(CURRENT_USER_KEY);
    return null;
  }
};
