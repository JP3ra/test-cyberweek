import React, { useState, useEffect } from 'react';
import './countdown.css';
const CountdownTimer = () => {
    const targetDate = new Date('2023-06-26T00:00:00');
    const now = new Date();
    const timeRemaining = targetDate - now;
  
    const [remainingTime, setRemainingTime] = useState(timeRemaining);
  
    useEffect(() => {
      const timer = setInterval(() => {
        const updatedTimeRemaining = targetDate - new Date();
        if (updatedTimeRemaining <= 0) {
          clearInterval(timer);
          // Timer has ended, do something here
        } else {
          setRemainingTime(updatedTimeRemaining);
        }
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  return (
    <div>
      <div>
        <div className="container-countdown">
        <p className='count-heading'>Days</p> 
        <p className='count-heading'>Hours</p> 
        <p className='count-heading'>Minutes </p>
        <p className='count-heading'>Seconds</p> 
        </div>
        <div className="container-countdown">

        <p className='count-numbers'>{days}</p> 
        <p className='count-numbers'>{hours.toString().padStart(2, '0')}</p>
        <p className='count-numbers'>{minutes.toString().padStart(2, '0')}</p> 
        <p className='count-numbers'>{seconds.toString().padStart(2, '0')}</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
