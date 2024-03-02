import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const Greeting = () => {
  const [salutation, setSalutation] = useState('');

  useEffect(() => {
    const updateSalutation = () => {
      const hour = new Date().getHours();
      const greeting =
        hour >= 5 && hour < 12
          ? 'Good Morning'
          : hour >= 12 && hour < 17
          ? 'Good Afternoon'
          : 'Hello Night owl';
      setSalutation(greeting);
    };

    updateSalutation(); // Initial call
    const timerID = setInterval(updateSalutation, 60000); // Update time every minute

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className={styles.salutations_box}>
      {salutation}!
    </div>
  );
};

export default Greeting;
