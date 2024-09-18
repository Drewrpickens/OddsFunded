import React from 'react';
import styles from './GameOdds.module.css';
import { teamLogoMap } from './../imagerepository/imagerepository';

const GameOdds = ({ homeTeam, awayTeam, date, time, isLive, away_team_spread, home_team_spread, away_team_spread_price, home_team_spread_price,
  home_team_ml_price,
  away_team_ml_price,
  over_point,
  over_price,
  under_point,
  under_price,
 }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
  };

  const formatTime = (timeString) => {
    const date = new Date(`2000-01-01T${timeString}`);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const getTeamLogo = (teamName) => {
    return teamLogoMap[teamName] || 'default-logo.png'; 
  };

  return (
    <div className={styles.container}>
      <div className={styles.gameInfoContainer}>
        <div className={styles.teamsContainer}>
          <div className={styles.team}>
            <img src={getTeamLogo(homeTeam)} alt={homeTeam} className={styles.teamLogo} />
            <span className={styles.teamName}>{homeTeam}</span>
          </div>
          <div className={styles.gameTime}>
            {isLive && <span className={styles.liveIndicator}>LIVE</span>}
            <div className={styles.date}>{formatDate(date)}</div>
            <div className={styles.time}>{formatTime(time)}</div>
          </div>
          <div className={styles.team}>
            <img src={getTeamLogo(awayTeam)} alt={awayTeam} className={styles.teamLogo} />
            <span className={styles.teamName}>{awayTeam}</span>
          </div>
        </div>
      </div>
      <div className={styles.oddsSection}>
        <div className={styles.oddsColumn}>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{home_team_spread}</span>
            <span className={styles.price}>{home_team_spread_price}</span>
          </div>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{away_team_spread}</span>
            <span className={styles.price}>{away_team_spread_price}</span>
          </div>
        </div>
        <div className={styles.oddsColumn}>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{over_point}</span>
            <span className={styles.price}>{over_price}</span>
          </div>
          <div className={styles.oddBox}>
            <span className={styles.spread}>{under_point}</span>
            <span className={styles.price}>{under_price}</span>
          </div>
        </div>
        <div className={styles.oddsColumn}>
          <div className={styles.oddBox}>
            <span className={styles.price}>{home_team_ml_price}</span>
          </div>
          <div className={styles.oddBox}>
            <span className={styles.price}>{away_team_ml_price}</span>
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