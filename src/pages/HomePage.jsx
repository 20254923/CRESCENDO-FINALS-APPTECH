import { useNavigate } from 'react-router-dom';
import { INSTRUMENTS } from '../data/data.js';
import { getStudentProgressSummary, getStudentRank } from '../utils/progress.js';

const instrumentImages = {
  guitar: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80',
  piano: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',
  drums: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=80',
  ukulele: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=900&q=80',
  violin: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=900&q=80',
  bass: 'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?auto=format&fit=crop&w=900&q=80',
};

export default function HomePage() {
  const navigate = useNavigate();
  const progress = getStudentProgressSummary();
  const rank = getStudentRank();

  return (
    <section className="home-page page-stack">
      <header className="home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">Instrument Studios</p>
          <h1>Choose your discipline.</h1>
          <p>
            A private black-and-gold academy for self-paced lessons, cinematic briefs,
            examination review, and saved practice progress.
          </p>
          <div className="home-hero__actions">
            <button className="btn btn-primary" type="button" onClick={() => navigate('/progress')}>
              View Progress
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => navigate('/resources')}>
              Explore Resources
            </button>
          </div>
        </div>

        <div className="home-hero__panel glass-card">
          <p className="eyebrow">Current Standing</p>
          <strong>{rank.title}</strong>
          <span>{progress.done}/{progress.total} lessons passed</span>
          <div className="hero-progress-track">
            <div style={{ width: `${progress.percent}%` }} />
          </div>
        </div>
      </header>

      <div className="instrument-grid">
        {INSTRUMENTS.map((instrument) => (
          <button
            key={instrument.id}
            className="instrument-card glass-card"
            type="button"
            onClick={() => navigate(`/dashboard/${instrument.id}`)}
          >
            <img src={instrumentImages[instrument.id]} alt={`${instrument.name} studio`} />
            <span className="instrument-card__icon">{instrument.icon}</span>
            <span className="instrument-card__name">{instrument.name}</span>
            <span className="instrument-card__sub">{instrument.sub}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
