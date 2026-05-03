import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { INSTRUMENT_DATA, TIER_LABELS, TIERS } from '../data/data.js';
import { isTierUnlocked, markLessonComplete } from '../utils/progress.js';

const PASSING_SCORE = 70;

export default function QuizPage() {
  const { instrument, tier, lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = INSTRUMENT_DATA[instrument]?.[tier]?.find((item) => item.id === lessonId);
  const sequence = TIERS.flatMap((tierKey) => (
    (INSTRUMENT_DATA[instrument]?.[tierKey] || []).map((item) => ({ ...item, tier: tierKey }))
  ));
  const currentIndex = sequence.findIndex((item) => item.id === lessonId);
  const nextLesson = sequence[currentIndex + 1];
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  if (!lesson) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = () => {
    const correct = lesson.quiz.reduce((count, question, index) => (
      answers[index] === question.answer ? count + 1 : count
    ), 0);
    const score = Math.round((correct / lesson.quiz.length) * 100);
    const passed = score >= PASSING_SCORE;

    if (passed) {
      markLessonComplete(instrument, tier, lessonId);
    }

    setResult({ score, passed, correct });
  };

  return (
    <section className="quiz-shell">
      <header className="quiz-header glass-card">
        <div>
          <p className="eyebrow">{TIER_LABELS[tier]} Examination</p>
          <h1>{lesson.title}</h1>
          <p>Passing score is {PASSING_SCORE}%. Results unlock curriculum progress instantly.</p>
        </div>
        {result && (
          <div className={`score-badge ${result.passed ? 'passed' : 'failed'}`}>
            <strong>{result.score}%</strong>
            <span>{result.passed ? 'Passed' : 'Retake'}</span>
          </div>
        )}
      </header>

      <div className="question-list">
        {lesson.quiz.map((question, index) => (
          <article className="question-card glass-card" key={question.question}>
            <p className="eyebrow">Question {index + 1}</p>
            <h2>{question.question}</h2>
            <div className="option-grid">
              {question.options.map((option) => {
                const selected = answers[index] === option;
                const correct = result && option === question.answer;
                const wrong = result && selected && !correct;

                return (
                  <button
                    key={option}
                    type="button"
                    className={`option-button ${selected ? 'selected' : ''} ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}`}
                    disabled={Boolean(result)}
                    onClick={() => setAnswers((current) => ({ ...current, [index]: option }))}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      <div className="quiz-actions glass-card">
        {!result ? (
          <button
            className="btn btn-primary"
            type="button"
            disabled={Object.keys(answers).length < lesson.quiz.length}
            onClick={handleSubmit}
          >
            Submit Examination
          </button>
        ) : (
          <>
            <p>{result.correct} of {lesson.quiz.length} answers correct.</p>
            <div className="quiz-result-actions">
              <button className="btn btn-ghost" type="button" onClick={() => navigate(`/lesson/${instrument}/${tier}/${lessonId}`)}>
                Back to Lesson
              </button>
              {result.passed && nextLesson && isTierUnlocked(instrument, nextLesson.tier) ? (
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => navigate(`/lesson/${instrument}/${nextLesson.tier}/${nextLesson.id}`)}
                >
                  Continue: {nextLesson.title}
                </button>
              ) : (
                <button className="btn btn-primary" type="button" onClick={() => navigate(`/dashboard/${instrument}`)}>
                  Return to Studio
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
