import React, { useState, useEffect } from 'react';
import { eventService } from '../services/eventService';
import GameOdds from './GameOdds';
import styles from './GameData.module.css';

function GameData() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userPick, setUserPick] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      try {
        const fetchedEvents = await eventService.getEvents();
        console.log('Fetched events:', fetchedEvents);
        console.log('Raw event data:', JSON.stringify(fetchedEvents, null, 2));
        setEvents(fetchedEvents);
      } catch (err) {
        console.error('Error in fetchEvents:', err);
        setError('Failed to fetch events. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handlePickSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted pick: ${userPick} for ${selectedEvent.home_team} vs ${selectedEvent.away_team}`);
    // Here you would typically send this data to your backend
  };

  const formatDate = (dateString) => {
    console.log('Formatting date:', dateString);
    const date = new Date(dateString);
    console.log('Parsed date:', date);
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', dateString);
      return 'Invalid Date';
    }
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC'
    });
  };

  const filteredEvents = events.filter(event =>
    event.home_team.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.away_team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.gameData}>
      <div className={styles.topBar}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by team name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.columnHeaders}>
          <span className={styles.columnHeader}>Points Spread</span>
          <span className={styles.columnHeader}>Total Points</span>
          <span className={styles.columnHeader}>Money Line</span>
        </div>
      </div>
      <div className={styles.eventsContainer}>
        {filteredEvents.length === 0 ? (
          <p>No upcoming events found.</p>
        ) : (
          <div className={styles.eventsList}>
            {filteredEvents.map((event) => (
              <GameOdds
                key={event.event_id}
                homeTeam={event.home_team}
                awayTeam={event.away_team}
                date="2023-09-17"
                time="14:20:00"
                away_team_spread_price={event.away_team_spread_price}
                away_team_spread={event.away_team_spread}
                home_team_spread_price={event.home_team_spread_price}
                home_team_spread={event.home_team_spread}
                home_team_ml_price={event.home_team_ml_price}
                away_team_ml_price={event.away_team_ml_price}
                over_point={event.over_point}
                under_point={event.under_point}
                over_price={event.over_price}
                under_price={event.under_price}
              />
            ))}
          </div>
        )}
      </div>
      {selectedEvent && (
        <form className={styles.pickForm} onSubmit={handlePickSubmit}>
          <h4>{selectedEvent.home_team} vs {selectedEvent.away_team}</h4>
          <p>{formatDate(selectedEvent.commence_time)}</p>
          <input 
            type="text" 
            placeholder="Enter your pick"
            value={userPick}
            onChange={(e) => setUserPick(e.target.value)}
            className={styles.pickInput}
          />
          <button type="submit" className={styles.submitButton}>Submit Pick</button>
        </form>
      )}
    </div>
  );
}

export default GameData;