import styles from './NavPills.module.css';

const TABS = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Journey', 'Contact'];

export default function NavPills({ active, onSelect }) {
  return (
    <nav className={styles.nav}>
      {TABS.map((tab) => (
        <button
          key={tab}
          className={`${styles.pill} ${active === tab ? styles.active : ''}`}
          onClick={() => onSelect(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
