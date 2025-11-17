import styles from "./privacy-policy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>

      <p className={styles.text}>
        This Privacy Policy describes how ReCraft 
        collects, uses, and protects your information when you use our service.
        Your privacy is very important to us.
      </p>

      <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
      <p className={styles.text}>
        We may collect certain personal and usage information when you access or use the ReCraft platform.
      </p>

      <ul className={styles.list}>
        <li><strong>Account Information:</strong> Name, email, and encrypted password.</li>
        <li><strong>Usage Data:</strong> Pages visited, device/browser info, and general analytics.</li>
        <li><strong>Uploaded Files:</strong> Images or content you upload or generate.</li>
        <li><strong>Cookies:</strong> Used to keep you logged in and improve performance.</li>
      </ul>

      <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
      <p className={styles.text}>
        We use your information to operate and improve the ReCraft service. This includes processing
        image requests, managing your account, and ensuring platform security.
      </p>

      <ul className={styles.list}>
        <li>To provide and maintain our service</li>
        <li>To improve platform performance</li>
        <li>To respond to support requests</li>
        <li>To prevent abuse or misuse</li>
      </ul>

      <h2 className={styles.sectionTitle}>3. Third-Party Services</h2>
      <p className={styles.text}>
        We may use third-party tools for analytics, image processing, and cloud storage.
        These providers only receive the data necessary for their services.
      </p>

      <h2 className={styles.sectionTitle}>4. Data Security</h2>
      <p className={styles.text}>
        We use industry-standard security practices, but no method of digital transmission is 100% secure.
        We cannot guarantee absolute protection.
      </p>

      <h2 className={styles.sectionTitle}>5. Your Rights</h2>
      <p className={styles.text}>
        You may have the right to access, update, or delete your data. You can contact us anytime regarding your data rights.
      </p>

      <h2 className={styles.sectionTitle}>6. Children's Privacy</h2>
      <p className={styles.text}>
        ReCraft is not intended for children under 13. We do not knowingly collect information from children.
      </p>

      <h2 className={styles.sectionTitle}>7. Changes to This Policy</h2>
      <p className={styles.text}>
        We may update this Privacy Policy from time to time. Changes will be posted on this page.
      </p>

      <h2 className={styles.sectionTitle}>8. Contact Us</h2>
      <p className={styles.text}>
        If you have any questions about this Privacy Policy, you may contact us at:
        <br />
        <br />
        📩 <strong>scrappandrecraft@gmail.com</strong>
      </p>
    </div>
  );
}
