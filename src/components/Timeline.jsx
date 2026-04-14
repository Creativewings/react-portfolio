import Section from './Section';
import { timeline } from '../data/resume';
import styles from './Timeline.module.css';

export default function Timeline() {
  return (
    <Section title="Career Journey">
      <div className={styles.timeline}>
        {timeline.map((item, i) => (
          <div key={i} className={`${styles.item} ${item.current ? styles.current : ''}`}>
            <div className={styles.dotWrap}>
              <div className={styles.dot} />
              {i < timeline.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.content}>
              <div className={styles.year}>{item.year}</div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.sub}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
