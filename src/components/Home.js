import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h1 className={styles.heroTitle}>SWEAT THE GAME NOT THE RISK</h1>
        <p className={styles.heroSubtitle}>Complete the 2 Step Challenge to get funded.</p>
        <div className={styles.discordBlock}>
          <p className={styles.discordText}>
            We're here to help you turn your betting aspirations into reality.
          </p>
          <button className={styles.discordBtn}>
            <svg className={styles.discordIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/>
            </svg>
            Join the Discord
          </button>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.challengeBadge}>Challenge: Tier 1 $29.99 (100% OFF)</div>
        <div className={styles.progressBar}>
          <div className={`${styles.progressStep} ${styles.progressStepActive}`}>Step 1</div>
          <div className={styles.progressStep}>Step 2</div>
          <div className={styles.progressStep}>Funded</div>
        </div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="account-size" className={styles.formLabel}>Account Size</label>
            <select id="account-size" className={styles.formInput}>
              <option>$1000</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="minimum-picks" className={styles.formLabel}>Minimum Picks</label>
            <input type="number" id="minimum-picks" value="15" readOnly className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="minimum-amount" className={styles.formLabel}>Minimum Amount</label>
            <input type="text" id="minimum-amount" value="$10" readOnly className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="maximum-amount" className={styles.formLabel}>Maximum Amount</label>
            <input type="text" id="maximum-amount" value="$50" readOnly className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="maximum-loss" className={styles.formLabel}>Maximum Loss</label>
            <input type="text" id="maximum-loss" value="15%" readOnly className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="maximum-daily-loss" className={styles.formLabel}>Maximum Daily Loss</label>
            <input type="text" id="maximum-daily-loss" value="10%" readOnly className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="profit-target" className={styles.formLabel}>Profit Target</label>
            <input type="text" id="profit-target" value="20%" readOnly className={styles.formInput} />
          </div>
          <button type="submit" className={styles.getStartedBtn}>
            Get Started
          </button>
        </form>
      </div>
      <div className={styles.orangeBlob}></div>
    </div>
  );
};

export default Home;
