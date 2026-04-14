import { useEffect, useRef } from 'react';
import { useTypewriter } from './useTypewriter';
import { profile } from '../data/resume';
import styles from './Hero.module.css';

function CountUp({ target, decimals, suffix }) {
  const ref = useRef(null);
  useEffect(() => {
    let start = 0;
    const numTarget = parseFloat(target);
    const step = numTarget / 50;
    const iv = setInterval(() => {
      start = Math.min(start + step, numTarget);
      if (ref.current) {
        ref.current.textContent =
          (decimals ? start.toFixed(2) : Math.round(start)) + (suffix || '');
      }
      if (start >= numTarget) clearInterval(iv);
    }, 30);
    return () => clearInterval(iv);
  }, [target]);
  return <span ref={ref}>0</span>;
}

export default function Hero() {
  const typed = useTypewriter(profile.typewriterLines);

  return (
    <section className={styles.hero}>
      <div className={styles.ring}>AG</div>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.title}>{profile.title}</p>
      <p className={styles.loc}>{profile.location}</p>

      <div className={styles.typerow}>
        <span className={styles.typed}>{typed}</span>
        <span className={styles.cursor} />
      </div>

      <div className={styles.stats}>
        {profile.stats.map((s) => {
          const isGpa = s.label === 'GPA';
          const raw = s.value.replace(/[^0-9.]/g, '');
          const suffix = s.value.replace(/[0-9.]/g, '');
          return (
            <div className={styles.stat} key={s.label}>
              <div className={styles.statVal}>
                <CountUp target={raw} decimals={isGpa} suffix={suffix} />
              </div>
              <div className={styles.statLbl}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
