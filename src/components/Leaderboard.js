import React, { useState } from 'react';
import styles from './Leaderboard.module.css';

const leaderboardData = [
  { id: 1, name: 'Alice', profit: 15000, accountSize: 100000, winRate: 68, totalTrades: 50 },
  { id: 2, name: 'Bob', profit: 12000, accountSize: 50000, winRate: 62, totalTrades: 45 },
  { id: 3, name: 'Charlie', profit: 9000, accountSize: 25000, winRate: 55, totalTrades: 40 },
  { id: 4, name: 'David', profit: 7500, accountSize: 50000, winRate: 58, totalTrades: 38 },
  { id: 5, name: 'Eve', profit: 6000, accountSize: 25000, winRate: 52, totalTrades: 35 },
  // Add more mock data as needed
];

function Leaderboard() {
  const [sortBy, setSortBy] = useState('profit');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedData = [...leaderboardData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className={styles.leaderboard}>
      <h2 className={styles.title}>Global Leaderboard</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th onClick={() => handleSort('profit')} className={styles.sortable}>
                Profit {sortBy === 'profit' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('accountSize')} className={styles.sortable}>
                Account Size {sortBy === 'accountSize' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('winRate')} className={styles.sortable}>
                Win Rate {sortBy === 'winRate' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('totalTrades')} className={styles.sortable}>
                Total Trades {sortBy === 'totalTrades' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th>ROI</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((trader, index) => (
              <tr key={trader.id}>
                <td>{index + 1}</td>
                <td>{trader.name}</td>
                <td className={styles.profit}>${trader.profit.toLocaleString()}</td>
                <td>${trader.accountSize.toLocaleString()}</td>
                <td>{trader.winRate}%</td>
                <td>{trader.totalTrades}</td>
                <td className={styles.roi}>{((trader.profit / trader.accountSize) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;