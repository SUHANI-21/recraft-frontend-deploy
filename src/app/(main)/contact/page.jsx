import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Us</h1>

        <p className={styles.text}>
          We’re here to help! If you have any questions, feedback, or issues
          with ReCraft, feel free to reach out.
        </p>

        <div className={styles.emailBox}>
          <p className={styles.label}>📩 Email:</p>
          <a href="mailto:scrappandrecraft@gmail.com" className={styles.email}>
            scrappandrecraft@gmail.com
          </a>
        </div>

        <p className={styles.responseTime}>
          We usually respond within <strong>24–48 hours</strong>.
        </p>
      </div>
    </div>
  );
}