import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { INSTRUMENT_DATA, TIER_LABELS, TIERS } from '../data/data.js';
import {
  getQuizHistory,
  isTierUnlocked,
  markLessonComplete,
  recordQuizAttempt,
} from '../utils/progress.js';

const PASSING_SCORE = 70;

function buildExplanation(question, selectedAnswer) {
  if (selectedAnswer === question.answer) {
    return `Correct. ${question.answer} is the key concept this question is checking.`;
  }

  if (!selectedAnswer) {
    return `No answer was selected. The correct answer is ${question.answer}.`;
  }

  return `${selectedAnswer} is not the best answer here. The correct answer is ${question.answer}.`;
}

function formatAttemptDate(value) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

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
  const [history, setHistory] = useState(() => getQuizHistory(instrument, lessonId));

  if (!lesson) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = () => {
    const review = lesson.quiz.map((question, index) => {
      const selectedAnswer = answers[index] || '';
      const correct = selectedAnswer === question.answer;

      return {
        question: question.question,
        selectedAnswer,
        correctAnswer: question.answer,
        correct,
        explanation: buildExplanation(question, selectedAnswer),
      };
    });
    const correct = review.filter((item) => item.correct).length;
    const score = Math.round((correct / lesson.quiz.length) * 100);
    const passed = score >= PASSING_SCORE;

    if (passed) {
      markLessonComplete(instrument, tier, lessonId);
    }

    const nextHistory = recordQuizAttempt(instrument, lessonId, {
      score,
      passed,
      correct,
      total: lesson.quiz.length,
    });

    setHistory(nextHistory);
    setResult({ score, passed, correct, review });
  };

  const resetQuiz = () => {
    setAnswers({});
    setResult(null);
  };

  const nextLessonUnlocked = nextLesson ? isTierUnlocked(instrument, nextLesson.tier) : false;

  return (
    <section className="quiz-shell">
      <header className={`quiz-header glass-card ${result?.passed ? 'quiz-header-passed' : ''}`}>
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

      {result && (
        <section className={`quiz-celebration glass-card ${result.passed ? 'passed' : 'failed'}`}>
          <p className="eyebrow">{result.passed ? 'Mastery Confirmed' : 'Review Recommended'}</p>
          <h2>{result.passed ? 'Beautiful work. Lesson progress saved.' : 'Close the gaps, then take another run.'}</h2>
          <p>
            {result.passed
              ? nextLesson && nextLessonUnlocked
                ? `You can continue directly into ${nextLesson.title}.`
                : 'Your score has been saved. Return to the studio to see what unlocked next.'
              : 'Use the review screen below to see the correct answers and explanations before retrying.'}
          </p>
          <div className="celebration-meter">
            <div style={{ width: `${result.score}%` }} />
          </div>
        </section>
      )}

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
            {result && (
              <div className={`answer-explanation ${result.review[index].correct ? 'correct' : 'wrong'}`}>
                <strong>{result.review[index].correct ? 'Correct' : 'Review'}</strong>
                <p>{result.review[index].explanation}</p>
              </div>
            )}
          </article>
        ))}
      </div>

      {history.length > 0 && (
        <section className="score-history glass-card">
          <div>
            <p className="eyebrow">Score History</p>
            <h2>Recent Attempts</h2>
          </div>
          <div className="score-history-list">
            {history.map((attempt) => (
              <div key={`${attempt.attemptedAt}-${attempt.score}`} className={attempt.passed ? 'passed' : 'failed'}>
                <strong>{attempt.score}%</strong>
                <span>{attempt.correct}/{attempt.total}</span>
                <small>{formatAttemptDate(attempt.attemptedAt)}</small>
              </div>
            ))}
          </div>
        </section>
      )}

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
              <button className="btn btn-ghost" type="button" onClick={resetQuiz}>
                Retake Exam
              </button>
              {result.passed && nextLesson && nextLessonUnlocked ? (
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
