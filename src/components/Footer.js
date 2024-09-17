import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>About TradeMaster</h3>
            <p className={styles.description}>
              TradeMaster is the leading platform for trading challenges and funded accounts. Test your skills and earn real profits!
            </p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><a href="/" className={styles.link}>Home</a></li>
              <li><a href="/challenges" className={styles.link}>Challenges</a></li>
              <li><a href="/dashboard" className={styles.link}>Dashboard</a></li>
              <li><a href="/leaderboard" className={styles.link}>Leaderboard</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Contact Us</h3>
            <p className={styles.contactInfo}>Email: support@trademaster.com</p>
            <p className={styles.contactInfo}>Phone: (123) 456-7890</p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 TradeMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;