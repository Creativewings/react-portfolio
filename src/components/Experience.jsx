import { useState } from 'react';
import Section from './Section';
import { experiences } from '../data/resume';
import styles from './Experience.module.css';

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Section title="Experience">
      <div className={styles.cards}>
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className={`${styles.card} ${openIdx === i ? styles.open : ''}`}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <div className={styles.header}>
              <div>
                <div className={styles.company}>
                  {exp.company}
                  {exp.current && <span className={styles.liveBadge}>LIVE</span>}
                </div>
                <div className={styles.role}>{exp.role}</div>
              </div>
              <div className={styles.period}>{exp.period}</div>
            </div>

            <div className={styles.details} style={{ maxHeight: openIdx === i ? '400px' : '0' }}>
              <ul className={styles.bullets}>
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className={styles.arrow} style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
