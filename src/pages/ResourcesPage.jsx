import { RESOURCES } from '../data/data.js';

export default function ResourcesPage() {
  const presentationPoints = [
    {
      title: 'Emerging technology area',
      body: 'Crescendo fits educational technology, adaptive learning, and digital skill platforms.',
    },
    {
      title: 'Problem addressed',
      body: 'Music students often lose track of practice, lesson readiness, and quiz results across instruments.',
    },
    {
      title: 'React concepts to demo',
      body: 'Routing, dynamic lesson pages, form state, quiz state, saved localStorage progress, and event handlers.',
    },
  ];

  return (
    <section className="page-stack">
      <header className="section-heading">
        <p className="eyebrow">Learning Archive</p>
        <h1>Curated outside resources.</h1>
        <p>Supplemental articles, videos, and charts for independent practice.</p>
      </header>

      <section className="presentation-brief glass-card">
        <div>
          <p className="eyebrow">Presentation Guide</p>
          <h2>How Crescendo meets the rubric.</h2>
          <p>
            Use this section during Q&A to explain why the app belongs in the
            emerging technology landscape and where the required React concepts appear.
          </p>
        </div>

        <div className="brief-grid">
          {presentationPoints.map((point) => (
            <article key={point.title} className="brief-card">
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="resource-grid">
        {RESOURCES.map((resource) => (
          <article className="resource-card glass-card" key={`${resource.instrument}-${resource.title}`}>
            <span className="resource-type">{resource.type}</span>
            <h2>{resource.title}</h2>
            <p>{resource.instrument} / {resource.tier}</p>
            <a className="text-link" href={resource.url} target="_blank" rel="noreferrer">
              Open Resource
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
