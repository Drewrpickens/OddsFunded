import React from 'react';
import styles from './GameOdds.module.css';
import { buffalo, mia } from './../imagerepository/imagerepository';

const GameOdds = ({ homeTeam, awayTeam, date, time, odds, isLive }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
  };

  const formatTime = (timeString) => {
    const date = new Date(`2000-01-01T${timeString}`);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.gameInfoContainer}>
        <div className={styles.teamsContainer}>
          <div className={styles.team}>
            <img src={buffalo} alt={homeTeam} className={styles.teamLogo} />
            <span className={styles.teamName}>{homeTeam}</span>
          </div>
          <div className={styles.gameTime}>
            {isLive && <span className={styles.liveIndicator}>LIVE</span>}
            <div className={styles.date}>{formatDate(date)}</div>
            <div className={styles.time}>{formatTime(time)}</div>
          </div>
          <div className={styles.team}>
            <img src={mia} alt={awayTeam} className={styles.teamLogo} />
            <span className={styles.teamName}>{awayTeam}</span>
          </div>
        </div>
      </div>
      <div className={styles.oddsSection}>
        <div className={styles.oddsColumn}>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{odds.pointsSpread.home.spread}</span>
            <span className={styles.price}>{odds.pointsSpread.home.price}</span>
          </div>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{odds.pointsSpread.away.spread}</span>
            <span className={styles.price}>{odds.pointsSpread.away.price}</span>
          </div>
        </div>
        <div className={styles.oddsColumn}>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{odds.totalPoints.over.spread}</span>
            <span className={styles.price}>{odds.totalPoints.over.price}</span>
          </div>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{odds.totalPoints.under.spread}</span>
            <span className={styles.price}>{odds.totalPoints.under.price}</span>
          </div>
        </div>
        <div className={styles.oddsColumn}>
          <div className={styles.oddBox}>
            <span className={styles.price}>{odds.moneyLine.home}</span>
          </div>
          <div className={styles.oddBox}>
            <span className={styles.price}>{odds.moneyLine.away}</span>
          </div>
        </div>
      </div>
      <button className={styles.morePicksButton}>
        <span className={styles.buttonText}>More Picks</span>
        <svg className={styles.arrowIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </button>
    </div>
  );
};

export default GameOdds;