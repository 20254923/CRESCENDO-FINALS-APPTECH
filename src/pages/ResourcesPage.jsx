import { RESOURCES } from '../data/data.js';

export default function ResourcesPage() {
  return (
    <section className="page-stack">
      <header className="section-heading">
        <p className="eyebrow">Learning Archive</p>
        <h1>Curated outside resources.</h1>
        <p>Supplemental articles, videos, and charts for independent practice.</p>
      </header>

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
