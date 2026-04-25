import { useState } from 'react';
import Section from './Section';
import { projects } from '../data/resume';
import styles from './Projects.module.css';

export default function Projects() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Section title="Projects">
      <div className={styles.cards}>
        {projects.map((proj, i) => (
          <div
            key={proj.name}
            className={`${styles.card} ${openIdx === i ? styles.open : ''}`}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <div className={styles.header}>
              <div>
                <div className={styles.name}>
                  {proj.name}
                  {proj.featured && <span className={styles.featuredBadge}>FEATURED</span>}
                </div>
                <div className={styles.techStack}>
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className={styles.techTag}
                      style={{ background: proj.bg, color: proj.color, borderColor: proj.border }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                  onClick={(e) => e.stopPropagation()}
                  title="View Project"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>

            <div className={styles.details} style={{ maxHeight: openIdx === i ? '500px' : '0' }}>
              <p className={styles.description}>{proj.description}</p>
              <ul className={styles.bullets}>
                {proj.bullets.map((b) => (
                  <li key={b} style={{ '--bullet-color': proj.color }}>{b}</li>
                ))}
              </ul>
            </div>

            <div
              className={styles.arrow}
              style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
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
