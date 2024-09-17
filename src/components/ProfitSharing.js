import React, { useState } from 'react';
import styles from './ProfitSharing.module.css';

// Mock user data
const userData = {
  name: 'John Doe',
  totalProfit: 5000,
  availableForWithdrawal: 4000,
  completedChallenges: 2,
};

function ProfitSharing() {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleWithdrawal = (e) => {
    e.preventDefault();
    if (parseFloat(withdrawalAmount) <= userData.availableForWithdrawal) {
      setShowConfirmation(true);
    } else {
      alert('Withdrawal amount exceeds available funds.');
    }
  };

  const confirmWithdrawal = () => {
    // Here you would typically process the withdrawal
    console.log(`Withdrawal of $${withdrawalAmount} confirmed`);
    setShowConfirmation(false);
    setWithdrawalAmount('');
  };

  return (
    <div className={styles.profitSharing}>
      <h2 className={styles.title}>Profit Sharing & Withdrawal</h2>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Your Earnings</h3>
        <p className={styles.profit}>Total Profit: ${userData.totalProfit.toLocaleString()}</p>
        <p className={styles.available}>Available for Withdrawal: ${userData.availableForWithdrawal.toLocaleString()}</p>
        <p className={styles.challenges}>Completed Challenges: {userData.completedChallenges}</p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Withdraw Funds</h3>
        <form onSubmit={handleWithdrawal} className={styles.withdrawalForm}>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(e.target.value)}
            placeholder="Enter amount to withdraw"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Withdraw</button>
        </form>
      </div>
      {showConfirmation && (
        <div className={styles.confirmation}>
          <h3>Confirm Withdrawal</h3>
          <p>Are you sure you want to withdraw ${withdrawalAmount}?</p>
          <div className={styles.confirmationButtons}>
            <button onClick={confirmWithdrawal} className={styles.confirmButton}>Confirm</button>
            <button onClick={() => setShowConfirmation(false)} className={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfitSharing;