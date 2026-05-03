import { Link } from 'react-router-dom';
import { INSTRUMENTS, TIERS, TIER_LABELS } from '../data/data.js';
import { getInstrumentCompletion, getTierProgress } from '../utils/progress.js';
import { ProgressBar } from '../components/Components.jsx';

export default function ProgressPage() {
  return (
    <section className="page-stack">
      <header className="section-heading">
        <p className="eyebrow">Performance Overview</p>
        <h1>Progress across every studio.</h1>
        <p>Gold bars show passed lesson examinations saved locally in this browser.</p>
      </header>

      <div className="progress-grid">
        {INSTRUMENTS.map((instrument) => {
          const completion = getInstrumentCompletion(instrument.id);

          return (
            <article className="progress-card glass-card" key={instrument.id}>
              <div className="progress-card__header">
                <div>
                  <span className="instrument-card__icon">{instrument.icon}</span>
                  <h2>{instrument.name}</h2>
                </div>
                <strong>{completion.done}/{completion.total}</strong>
              </div>

              <ProgressBar current={completion.done} total={completion.total} />

              <div className="tier-mini-list">
                {TIERS.map((tier) => {
                  const tierProgress = getTierProgress(instrument.id, tier);
                  return (
                    <div key={tier}>
                      <span>{TIER_LABELS[tier]}</span>
                      <div className="mini-track">
                        <div style={{ width: `${tierProgress.total ? (tierProgress.done / tierProgress.total) * 100 : 0}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link className="text-link" to={`/dashboard/${instrument.id}`}>
                Enter Studio
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
