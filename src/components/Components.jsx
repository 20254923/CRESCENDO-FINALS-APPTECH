export function TierBadge({ tier }) {
  return <span className={`tier-badge tier-${tier}`}>{tier}</span>;
}

export function ProgressBar({ current, total }) {
  const percent = total ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-meter" aria-label={`${percent}% complete`}>
      <div className="progress-meter__label">
        <span>Completion</span>
        <strong>{percent}%</strong>
      </div>
      <div className="progress-meter__track">
        <div className="progress-meter__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
