import { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { skillGroups, skillBars } from '../data/resume';
import styles from './Skills.module.css';

function SkillBars() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.barsWrap}>
      <div className={styles.barsTitle}>Proficiency</div>
      {skillBars.map((s) => (
        <div key={s.label} className={styles.barRow}>
          <div className={styles.barLabel}>
            <span>{s.label}</span>
            <span>{s.pct}%</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{
                width: animated ? `${s.pct}%` : '0%',
                background: s.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <Section title="Skills">
      <div className={styles.grid}>
        {skillGroups.map((g) => (
          <div key={g.label} className={styles.group} style={{ borderColor: g.border }}>
            <div className={styles.groupLabel} style={{ color: g.color }}>
              {g.label}
            </div>
            <div className={styles.tags}>
              {g.tags.map((t) => (
                <span
                  key={t}
                  className={styles.tag}
                  style={{ background: g.bg, color: g.color, borderColor: g.border }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SkillBars />
    </Section>
  );
}
