import Section from './Section';
import { profile } from '../data/resume';
import styles from './Contact.module.css';

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0112 2.18 2 2 0 0114 4v3a2 2 0 01-2 2 1 1 0 00-1 1v0a16 16 0 006 6 1 1 0 001-1 2 2 0 012-2z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const contacts = [
  { icon: <PhoneIcon />, label: 'Phone', value: profile.phone },
  { icon: <MailIcon />, label: 'Email', value: profile.email },
  { icon: <LocationIcon />, label: 'Location', value: profile.location },
];

export default function Contact() {
  return (
    <Section title="Contact">
      <div className={styles.list}>
        {contacts.map((c) => (
          <div key={c.label} className={styles.item}>
            <div className={styles.iconWrap}>{c.icon}</div>
            <div>
              <div className={styles.label}>{c.label}</div>
              <div className={styles.value}>{c.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>Open to exciting opportunities. Let's build something great together.</p>
        <a
          href={`mailto:${profile.email}`}
          className={styles.ctaBtn}
        >
          Send an Email
        </a>
      </div>
    </Section>
  );
}
