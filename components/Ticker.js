// components/Ticker.js
import React from 'react';
//import styles from './Ticker.module.css';

const Ticker = ({ notice }) => {
  return (
    <div style={tickerContainer}>
      <div className="tickerContent">
        {notice}
      </div>
    </div>
  );
};

export default Ticker;


// const Ticker = ({ notice }) => {
//   return (
//     <div className={styles.tickerContainer}>
//       <div className={styles.tickerContent}>
//         {notice}
//       </div>
//     </div>
//   );
// };
// export default Ticker;

const tickerContainer = {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#b80000  ',
  color: '#000000',
  fontSize: '20px',
  fontWeight: 'bold',
  position: '10px',
  bottom: '05',
  left: '0',
  zIndex: '1000',
};
