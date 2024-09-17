import React, { useState } from 'react';
import styles from './Challenges.module.css';
import BillingModal from './BillingModal';

const challengeData = [
  { id: 1, accountSize: 25000, profitTarget: 10, lossLimit: 5, timeLimit: 30, entryFee: 250 },
  { id: 2, accountSize: 50000, profitTarget: 8, lossLimit: 7, timeLimit: 60, entryFee: 400 },
  { id: 3, accountSize: 100000, profitTarget: 6, lossLimit: 10, timeLimit: 90, entryFee: 750 },
];

function ChallengeCard({ challenge, onJoin }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className={styles.challengeCard}>
      <h3 className={styles.accountSize}>${challenge.accountSize.toLocaleString()} Account</h3>
      <ul className={styles.challengeDetails}>
        <li className={styles.detailItem}>
          <span className={styles.detailLabel}>Profit Target:</span>
          <span className={styles.detailValue}>{challenge.profitTarget}%</span>
        </li>
        <li className={styles.detailItem}>
          <span className={styles.detailLabel}>Loss Limit:</span>
          <span className={`${styles.detailValue} ${styles.lossLimit}`}>{challenge.lossLimit}%</span>
        </li>
        <li className={styles.detailItem}>
          <span className={styles.detailLabel}>Time Limit:</span>
          <span className={styles.detailValue}>{challenge.timeLimit} days</span>
        </li>
      </ul>
      <div className={styles.entryFee}>
        <span className={styles.entryFeeLabel}>Entry Fee:</span>
        <span className={styles.entryFeeValue}>${challenge.entryFee}</span>
      </div>
      <button className={styles.rulesButton} onClick={() => setShowRules(!showRules)}>
        {showRules ? 'Hide Rules' : 'View Rules'}
      </button>
      {showRules && (
        <div className={styles.rules}>
          <h4>Challenge Rules:</h4>
          <ul>
            <li>Reach {challenge.profitTarget}% profit within {challenge.timeLimit} days</li>
            <li>Do not exceed {challenge.lossLimit}% drawdown at any point</li>
            <li>Successfully complete to unlock a funded account</li>
            <li>Opportunity to scale up account size in future challenges</li>
          </ul>
        </div>
      )}
      <button className={styles.joinButton} onClick={() => onJoin(challenge)}>Join Challenge</button>
    </div>
  );
}

function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showBillingModal, setShowBillingModal] = useState(false);

  const handleJoinChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setShowBillingModal(true);
  };

  const handleCloseBillingModal = () => {
    setShowBillingModal(false);
    setSelectedChallenge(null);
  };

  const handleBillingSubmit = (formData) => {
    // Here you would typically process the payment and create the challenge
    console.log('Processing payment for challenge:', selectedChallenge);
    console.log('Billing information:', formData);
    // After processing, close the modal and show a confirmation
    setShowBillingModal(false);
    setSelectedChallenge(null);
    alert('Challenge joined successfully! Check your email for details.');
  };

  return (
    <div className={styles.challenges}>
      <h2 className={styles.title}>Choose Your Challenge</h2>
      <div className={styles.challengeList}>
        {challengeData.map(challenge => (
          <ChallengeCard 
            key={challenge.id} 
            challenge={challenge} 
            onJoin={handleJoinChallenge}
          />
        ))}
      </div>
      {showBillingModal && selectedChallenge && (
        <BillingModal
          challenge={selectedChallenge}
          onClose={handleCloseBillingModal}
          onSubmit={handleBillingSubmit}
        />
      )}
    </div>
  );
}

export default Challenges;