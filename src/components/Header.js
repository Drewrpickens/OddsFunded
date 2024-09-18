import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  const handleAuthRedirect = () => {
    navigate('/auth');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5L10 19L12 12L14 19L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          SportsFunded
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><Link to="/challenges" className={styles.navLink}>Challenges</Link></li>
            <li><Link to="/dashboard" className={styles.navLink}>Dashboard</Link></li>
            <li><Link to="/leaderboard" className={styles.navLink}>Leaderboard</Link></li>
            <button onClick={handleAuthRedirect} className={styles.loginbtn}>Log In</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
