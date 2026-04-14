import Section from './Section';
import { profile } from '../data/resume';
import styles from './About.module.css';

export default function About() {
  return (
    <Section title="About">
      <div className={styles.summaryBox}>
        {profile.summary.split(/(Java 8\+|Spring Boot|RESTful Architecture|React)/).map((part, i) =>
          ['Java 8+', 'Spring Boot', 'RESTful Architecture', 'React'].includes(part) ? (
            <span key={i} className={styles.highlight}>{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </div>

      <div className={styles.achievements}>
        {profile.achievements.map((a) => (
          <div
            key={a.label}
            className={styles.achievCard}
            style={{ background: a.bg, borderColor: a.border }}
          >
            <div className={styles.achievVal} style={{ color: a.color }}>{a.value}</div>
            <div className={styles.achievLbl}>{a.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
