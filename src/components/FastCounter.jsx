// import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const FastCounter = ({max, plus, text, styles}) => {
  const [counter, setCounter] = useState(0);
  const maxCount = max;
  const speed = 0.1; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter < maxCount) {
          return prevCounter + 1; 
        } else {
          clearInterval(interval); 
          return prevCounter; 
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [maxCount, speed]);

  return (
    <div style={styles}>
      <p>{plus}{counter} {text}</p> 
    </div>
  );
};
FastCounter.propTypes = {
  max: PropTypes.number.isRequired,
  text: PropTypes.string,
  plus: PropTypes.string,
  styles: PropTypes.object
};

export default FastCounter;
