// components/Ticker.js
import React from 'react';
//import styles from './Ticker.module.css';

const Ticker = ({ notice }) => {
  return (
    <div style={tickerContainer}>
      <div className= 'tickerContent'>
        {notice}
      </div>
    </div>
  );
};

export default Ticker;



const tickerContainer = {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#D6F1DF',
  color: '#9e0000',
  fontSize: '20px',
  fontWeight: 'bold',
  position: '10px',
  bottom: '05',
  left: '0',
  zIndex: '1000',
  // marginTop: '10px',
  // marginBottom: '10px',
  paddingTop:'10px',
  paddingBottom:'10px'
};