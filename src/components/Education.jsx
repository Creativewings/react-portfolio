import Section from './Section';
import { education } from '../data/resume';
import styles from './Education.module.css';

export default function Education() {
  return (
    <Section title="Education">
      <div className={styles.cards}>
        {education.map((edu) => (
          <div key={edu.degree} className={styles.card}>
            <div className={styles.left}>
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.institution}>{edu.institution}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.score} style={{ color: edu.color }}>
                {edu.score}
              </div>
              <div className={styles.scoreLabel}>{edu.scoreLabel}</div>
              <div className={styles.year}>{edu.year}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
