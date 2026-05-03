import { useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { INSTRUMENT_DATA, TIER_LABELS, TIERS } from '../data/data.js';
import {
  getLessonNotes,
  isLessonComplete,
  isLessonMarkedForReview,
  isTierUnlocked,
  saveLessonNotes,
  toggleLessonReview,
} from '../utils/progress.js';

const ESTIMATED_MINUTES = {
  beginner: 12,
  intermediate: 18,
  advanced: 24,
};

function getLessonSequence(instrument) {
  return TIERS.flatMap((tier) => (
    (INSTRUMENT_DATA[instrument]?.[tier] || []).map((lesson, index) => ({
      ...lesson,
      tier,
      session: index + 1,
      estimatedMinutes: lesson.estimatedMinutes || ESTIMATED_MINUTES[tier],
    }))
  ));
}

export default function LessonPage() {
  const { instrument, tier, lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = INSTRUMENT_DATA[instrument]?.[tier]?.find((item) => item.id === lessonId);
  const sequence = useMemo(() => getLessonSequence(instrument), [instrument]);
  const sequenceIndex = sequence.findIndex((item) => item.id === lessonId);
  const previousLesson = sequence[sequenceIndex - 1];
  const nextLesson = sequence[sequenceIndex + 1];
  const complete = lesson ? isLessonComplete(instrument, tier, lesson.id) : false;
  const [notes, setNotes] = useState(() => (lesson ? getLessonNotes(instrument, lesson.id) : ''));
  const [notesStatus, setNotesStatus] = useState('');
  const [markedForReview, setMarkedForReview] = useState(() => (
    lesson ? isLessonMarkedForReview(instrument, lesson.id) : false
  ));

  if (!lesson) {
    return <Navigate to="/" replace />;
  }

  const currentLesson = sequence[sequenceIndex];
  const nextLessonUnlocked = nextLesson ? isTierUnlocked(instrument, nextLesson.tier) : false;

  const navigateToLesson = (targetLesson) => {
    if (!targetLesson) return;
    navigate(`/lesson/${instrument}/${targetLesson.tier}/${targetLesson.id}`);
  };

  const handleSaveNotes = () => {
    saveLessonNotes(instrument, lesson.id, notes);
    setNotesStatus('Notes saved.');
  };

  const handleToggleReview = () => {
    setMarkedForReview(toggleLessonReview(instrument, lesson.id));
  };

  return (
    <section className="page-stack">
      <header className="studio-header">
        <button className="btn btn-ghost" type="button" onClick={() => navigate(`/dashboard/${instrument}`)}>
          Exit Studio
        </button>
        <div>
          <p className="eyebrow">{TIER_LABELS[tier]} Module</p>
          <h1>{lesson.title}</h1>
        </div>
      </header>

      <div className="lesson-control-strip glass-card">
        <button
          className="btn btn-ghost"
          type="button"
          disabled={!previousLesson}
          onClick={() => navigateToLesson(previousLesson)}
        >
          Previous Lesson
        </button>
        <div className="lesson-meta-row">
          <span>{currentLesson.estimatedMinutes} min</span>
          <span>Session {currentLesson.session}</span>
          <span>{complete ? 'Exam passed' : 'Exam pending'}</span>
          {markedForReview && <span>Marked for review</span>}
        </div>
        <button
          className="btn btn-ghost"
          type="button"
          disabled={!nextLesson || !nextLessonUnlocked}
          onClick={() => navigateToLesson(nextLesson)}
        >
          Next Lesson
        </button>
      </div>

      <div className="lesson-layout">
        <main className="lesson-main">
          <div className="video-frame glass-card">
            <iframe
              src={lesson.videoUrl}
              title={`${lesson.title} video lesson`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <article className="technical-brief glass-card">
            <p className="eyebrow">Technical Brief</p>
            <h2>Practice Notes</h2>
            {lesson.explanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="lesson-notes-card glass-card">
            <div>
              <p className="eyebrow">Your Lesson Notes</p>
              <h2>Capture what to practice next.</h2>
            </div>
            <textarea
              value={notes}
              onChange={(event) => {
                setNotes(event.target.value);
                setNotesStatus('');
              }}
              placeholder="Write reminders, tricky measures, chord shapes, tempo targets, or questions for later review."
            />
            <div className="lesson-notes-actions">
              <button className="btn btn-primary" type="button" onClick={handleSaveNotes}>
                Save Notes
              </button>
              {notesStatus && <span>{notesStatus}</span>}
            </div>
          </article>
        </main>

        <aside className="diagram-sidebar glass-card">
          <p className="eyebrow">Diagram</p>
          <img src={lesson.diagramUrl} alt={lesson.diagramCaption} />
          <p>{lesson.diagramCaption}</p>

          <div className="continue-card">
            <p className="eyebrow">Continue Learning</p>
            <h2>{complete ? 'Keep the momentum.' : 'Ready for the exam?'}</h2>
            <p>
              {complete
                ? 'Review your notes, move to the next lesson, or retake the examination for reinforcement.'
                : 'Pass with 70% or higher to save completion and unlock the next tier when all sessions are passed.'}
            </p>
          </div>

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => navigate(`/quiz/${instrument}/${tier}/${lessonId}`)}
          >
            {complete ? 'Review Examination' : 'Start Examination'}
          </button>
          <button className="btn btn-ghost" type="button" onClick={handleToggleReview}>
            {markedForReview ? 'Remove Review Mark' : 'Mark for Review'}
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            disabled={!nextLesson || !nextLessonUnlocked}
            onClick={() => navigateToLesson(nextLesson)}
          >
            {nextLesson ? `Continue: ${nextLesson.title}` : 'Instrument Complete'}
          </button>
        </aside>
      </div>
    </section>
  );
}
