import { useNavigate } from 'react-router-dom';
import { INSTRUMENTS } from '../data/data.js';

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

  return (
    <section className="page-stack">
      <header className="section-heading">
        <p className="eyebrow">Instrument Studios</p>
        <h1>Choose your discipline.</h1>
        <p>Each studio contains tiered lessons, technical briefs, visual references, and examinations.</p>
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
