import { useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { INSTRUMENT_DATA, INSTRUMENTS, TIER_LABELS, TIERS } from '../data/data.js';
import {
  getLessonNotes,
  getTierProgress,
  isLessonComplete,
  isLessonMarkedForReview,
  isTierUnlocked,
} from '../utils/progress.js';
import { ProgressBar, TierBadge } from '../components/Components.jsx';

const ESTIMATED_MINUTES = {
  beginner: 12,
  intermediate: 18,
  advanced: 24,
};

export default function DashboardPage() {
  const { instrument } = useParams();
  const navigate = useNavigate();
  const [activeTier, setActiveTier] = useState('beginner');

  const instrumentInfo = INSTRUMENTS.find((item) => item.id === instrument);
  const lessons = INSTRUMENT_DATA[instrument]?.[activeTier] || [];

  const tierSummary = useMemo(
    () => TIERS.map((tier) => ({ tier, unlocked: isTierUnlocked(instrument, tier), ...getTierProgress(instrument, tier) })),
    [instrument]
  );

  if (!instrumentInfo || !INSTRUMENT_DATA[instrument]) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="classsync-layout">
      <aside className="sidebar-panel glass-card">
        <p className="eyebrow">Curriculum</p>
        <h2>{instrumentInfo.name} Studio</h2>
        <div className="tier-list">
          {tierSummary.map(({ tier, unlocked, done, total }) => (
            <button
              key={tier}
              type="button"
              className={`tier-button ${activeTier === tier ? 'active' : ''}`}
              disabled={!unlocked}
              onClick={() => setActiveTier(tier)}
            >
              <span>{TIER_LABELS[tier]}</span>
              <small>{unlocked ? `${done}/${total}` : 'Locked'}</small>
            </button>
          ))}
        </div>
      </aside>

      <main className="content-panel">
        <header className="page-header glass-card">
          <div>
            <p className="eyebrow">{activeTier} tier</p>
            <h1>{instrumentInfo.icon} Lesson Nodes</h1>
            <p>Pass every examination in this tier to unlock the next tier.</p>
          </div>
          <TierBadge tier={activeTier} />
        </header>

        <div className="lesson-node-list">
          {lessons.map((lesson, index) => {
            const complete = isLessonComplete(instrument, activeTier, lesson.id);
            const markedForReview = isLessonMarkedForReview(instrument, lesson.id);
            const hasNotes = Boolean(getLessonNotes(instrument, lesson.id));
            const estimatedMinutes = lesson.estimatedMinutes || ESTIMATED_MINUTES[activeTier];

            return (
              <article className="lesson-node glass-card" key={lesson.id}>
                <div className="node-index">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <p className="eyebrow">Session {index + 1}</p>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.desc}</p>
                  <div className="lesson-card-meta">
                    <span>{estimatedMinutes} min</span>
                    {markedForReview && <span>Review</span>}
                    {hasNotes && <span>Notes saved</span>}
                  </div>
                </div>
                <div className="node-actions">
                  <span className={complete ? 'status-complete' : 'status-open'}>
                    {complete ? 'Passed' : 'Open'}
                  </span>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => navigate(`/lesson/${instrument}/${activeTier}/${lesson.id}`)}
                  >
                    {complete ? 'Review' : 'Start'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="glass-card tier-progress-card">
          {tierSummary.map(({ tier, done, total }) => (
            <div key={tier}>
              <div className="progress-row-title">
                <span>{TIER_LABELS[tier]}</span>
                <span>{done}/{total}</span>
              </div>
              <ProgressBar current={done} total={total} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
