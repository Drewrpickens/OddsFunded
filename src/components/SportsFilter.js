import React from 'react';
import styles from './SportFilter.module.css';

const sports = [
  { name: 'Football', emoji: '🏈' },
  { name: 'Basketball', emoji: '🏀' },
  { name: 'Baseball', emoji: '⚾' },
  { name: 'Soccer', emoji: '⚽' },
  { name: 'Hockey', emoji: '🏒' },
  { name: 'MMA', emoji: '🥊' },
  { name: 'Tennis', emoji: '🎾' },
  { name: 'Cricket', emoji: '🏏' },
];

const SportFilter = () => {
  return (
    <div className={styles.filterContainer}>
      {sports.map((sport, index) => (
        <button key={index} className={styles.filterButton}>
          <span className={styles.emoji}>{sport.emoji}</span>
          <span className={styles.sportName}>{sport.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SportFilter;