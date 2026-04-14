import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={styles.section}>
      {title && <div className={styles.sTitle}>{title}</div>}
      {children}
    </div>
  );
}
