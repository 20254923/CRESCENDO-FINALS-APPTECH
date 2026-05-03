import { useEffect, useMemo, useRef, useState } from 'react';

export default function Metronome() {
  const [bpm, setBpm] = useState(96);
  const [playing, setPlaying] = useState(false);
  const audioContextRef = useRef(null);

  const intervalMs = useMemo(() => (60 / bpm) * 1000, [bpm]);

  useEffect(() => {
    if (!playing) return undefined;

    const tick = () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const context = audioContextRef.current;
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.frequency.value = 1240;
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.32, context.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.08);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.09);
    };

    tick();
    const interval = window.setInterval(tick, intervalMs);
    return () => window.clearInterval(interval);
  }, [intervalMs, playing]);

  return (
    <section className="metronome" aria-label="Rehearsal Room metronome">
      <div>
        <p className="eyebrow">Rehearsal Room</p>
        <strong>{bpm} BPM</strong>
      </div>
      <input
        aria-label="Tempo"
        type="range"
        min="40"
        max="220"
        value={bpm}
        onChange={(event) => setBpm(Number(event.target.value))}
      />
      <button className="btn btn-primary" type="button" onClick={() => setPlaying((value) => !value)}>
        {playing ? 'Stop' : 'Start'}
      </button>
    </section>
  );
}
