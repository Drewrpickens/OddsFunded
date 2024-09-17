import React from 'react';
import styles from './Dashboard.module.css';
import GameData from './GameData';
import SportFilter from './SportsFilter';

const userData = {
  name: 'John Doe',
  accountBalance: 27500,
  profitToDate: 2500,
  activeChallenge: {
    accountSize: 25000,
    profitTarget: 10,
    currentProfit: 10,
    lossLimit: 5,
    timeRemaining: 15,
  },
};

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Welcome, {userData.name}</h2>
      <div className={styles.overview}>
        <div className={styles.accountInfo}>
          <h3 className={styles.sectionTitle}>Account Overview</h3>
          <p className={styles.balance}>${userData.accountBalance.toLocaleString()}</p>
          <p className={styles.balanceLabel}>Current Balance</p>
          <p className={styles.profit}>+${userData.profitToDate.toLocaleString()}</p>
          <p className={styles.profitLabel}>Profit to Date</p>
        </div>
        <div className={styles.challengeInfo}>
          <h3 className={styles.sectionTitle}>Active Challenge</h3>
          <div className={styles.challengeDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Account Size:</span>
              <span className={styles.detailValue}>${userData.activeChallenge.accountSize.toLocaleString()}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Profit Target:</span>
              <span className={styles.detailValue}>{userData.activeChallenge.profitTarget}%</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Current Profit:</span>
              <span className={`${styles.detailValue} ${styles.currentProfit}`}>{userData.activeChallenge.currentProfit}%</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Loss Limit:</span>
              <span className={`${styles.detailValue} ${styles.lossLimit}`}>{userData.activeChallenge.lossLimit}%</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Time Remaining:</span>
              <span className={styles.detailValue}>{userData.activeChallenge.timeRemaining} days</span>
            </div>
          </div>
        </div>
      </div>
      <SportFilter />
      <div className={styles.gameDataSection}>
        <GameData />
      </div>
     
    </div>
  );
}

export default Dashboard;