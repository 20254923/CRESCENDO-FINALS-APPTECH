import { TIERS, INSTRUMENTS, INSTRUMENT_DATA } from '../data/data';
import { getCurrentUser } from './auth.js';

const LEGACY_STORAGE_KEY = 'crescendo_progress';

function getStorageKey() {
  const user = getCurrentUser();
  return user?.id ? `crescendo_progress_${user.id}` : LEGACY_STORAGE_KEY;
}

export function loadProgress() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {};
  }

  const raw = window.localStorage.getItem(getStorageKey());
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) || {};
  } catch (error) {
    return {};
  }
}

export function saveProgress(progress) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(getStorageKey(), JSON.stringify(progress));
}

export function getInstrumentProgress(instrument) {
  const progress = loadProgress();
  if (!progress[instrument]) {
    progress[instrument] = {
      currentTier: 'beginner',
      beginner: {},
      intermediate: {},
      advanced: {},
      lessonNotes: {},
      reviewLessons: {},
    };
    saveProgress(progress);
  }

  TIERS.forEach((tier) => {
    if (!progress[instrument][tier]) {
      progress[instrument][tier] = {};
    }
  });

  if (!progress[instrument].lessonNotes) {
    progress[instrument].lessonNotes = {};
  }

  if (!progress[instrument].reviewLessons) {
    progress[instrument].reviewLessons = {};
  }

  return progress[instrument];
}

function getLessonIdsForTier(instrument, tier) {
  const tierLessons = INSTRUMENT_DATA[instrument]?.[tier] || [];
  return tierLessons.map((lesson) => lesson.id);
}

export function markLessonComplete(instrument, tier, lessonId) {
  const progress = loadProgress();
  const instrumentProgress = getInstrumentProgress(instrument);

  if (!instrumentProgress[tier]) {
    instrumentProgress[tier] = {};
  }

  instrumentProgress[tier][lessonId] = true;
  progress[instrument] = instrumentProgress;

  const tierIds = getLessonIdsForTier(instrument, tier);
  const tierDone = tierIds.every((id) => instrumentProgress[tier][id]);

  if (tierDone) {
    const currentTierIndex = TIERS.indexOf(instrumentProgress.currentTier);
    const completedTierIndex = TIERS.indexOf(tier);

    if (completedTierIndex >= currentTierIndex && completedTierIndex < TIERS.length - 1) {
      instrumentProgress.currentTier = TIERS[completedTierIndex + 1];
    }
  }

  saveProgress(progress);
}

export function isLessonComplete(instrument, tier, lessonId) {
  const instrumentProgress = getInstrumentProgress(instrument);
  return Boolean(instrumentProgress?.[tier]?.[lessonId]);
}

export function getLessonNotes(instrument, lessonId) {
  const instrumentProgress = getInstrumentProgress(instrument);
  return instrumentProgress.lessonNotes?.[lessonId] || '';
}

export function saveLessonNotes(instrument, lessonId, notes) {
  const progress = loadProgress();
  const instrumentProgress = getInstrumentProgress(instrument);

  instrumentProgress.lessonNotes[lessonId] = notes;
  progress[instrument] = instrumentProgress;
  saveProgress(progress);
}

export function isLessonMarkedForReview(instrument, lessonId) {
  const instrumentProgress = getInstrumentProgress(instrument);
  return Boolean(instrumentProgress.reviewLessons?.[lessonId]);
}

export function toggleLessonReview(instrument, lessonId) {
  const progress = loadProgress();
  const instrumentProgress = getInstrumentProgress(instrument);
  const nextValue = !instrumentProgress.reviewLessons[lessonId];

  instrumentProgress.reviewLessons[lessonId] = nextValue;
  progress[instrument] = instrumentProgress;
  saveProgress(progress);
  return nextValue;
}

export function isTierUnlocked(instrument, tier) {
  if (tier === 'beginner') {
    return true;
  }

  const instrumentProgress = getInstrumentProgress(instrument);
  const requiredTier = TIERS[TIERS.indexOf(tier) - 1];
  if (!requiredTier) {
    return false;
  }

  const requiredIds = getLessonIdsForTier(instrument, requiredTier);
  return requiredIds.every((id) => Boolean(instrumentProgress[requiredTier]?.[id]));
}

export function getTierProgress(instrument, tier) {
  const instrumentProgress = getInstrumentProgress(instrument);
  const lessonIds = getLessonIdsForTier(instrument, tier);
  const done = lessonIds.reduce(
    (count, id) => count + (instrumentProgress[tier]?.[id] ? 1 : 0),
    0
  );

  return { done, total: lessonIds.length };
}

export function getCompletedLessonCount(instrument) {
  return TIERS.reduce((sum, tier) => sum + getTierProgress(instrument, tier).done, 0);
}

export function getTotalLessonCount(instrument) {
  return TIERS.reduce((sum, tier) => sum + getLessonIdsForTier(instrument, tier).length, 0);
}

export function getInstrumentCompletion(instrument) {
  const done = getCompletedLessonCount(instrument);
  const total = getTotalLessonCount(instrument);
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

export function getStudentProgressSummary() {
  const done = INSTRUMENTS.reduce(
    (sum, instrument) => sum + getCompletedLessonCount(instrument.id),
    0
  );
  const total = INSTRUMENTS.reduce(
    (sum, instrument) => sum + getTotalLessonCount(instrument.id),
    0
  );

  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
  };
}

export function getStudentRank() {
  const { done, total } = getStudentProgressSummary();
  const percent = total ? done / total : 0;

  if (percent >= 1) {
    return { title: 'Maestro', done, total };
  }

  if (percent >= 0.75) {
    return { title: 'Virtuoso', done, total };
  }

  if (percent >= 0.45) {
    return { title: 'Performer', done, total };
  }

  if (percent >= 0.2) {
    return { title: 'Apprentice', done, total };
  }

  return { title: 'Novice', done, total };
}
