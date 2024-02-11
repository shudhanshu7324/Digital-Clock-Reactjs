import React, { useState, useEffect } from 'react';
import './App.css'; 

const DigitalClock = () => {

    const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    amPm: 'AM',
  });

  const updateClock = () => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    setTime({ hours, minutes, seconds, amPm });
  };

  useEffect(() => {
    const interval = setInterval(updateClock, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body">
      <h2 className="clockHeading">Digital Clock</h2>
      <div className="clock">
        <div>
          <span>{time.hours}</span>
          <span className="text">Hours</span>
        </div>
        <div>
          <span>{time.minutes}</span>
          <span className="text">Minutes</span>
        </div>
        <div>
          <span>{time.seconds}</span>
          <span className="text">Seconds</span>
        </div>
        <div>
          <span id='amPm'>{time.amPm}</span>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
