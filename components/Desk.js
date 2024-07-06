import React from 'react';

const DeskCard = ({ image, name, position, message }) => {
  return (
    <div style={styles.card}>
      <div style={styles.leftSection}>
        <div style={styles.imageWrapper}>
          <img style={styles.image} src={image} alt={`${name}'s picture`} />
        </div>
        <div style={styles.info}>
          <h2 style={styles.name}>{name}</h2>
          <h3 style={styles.position}>{position}</h3>
        </div>
      </div>
      <div style={styles.messageWrapper}>
        <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    margin: '25px',
    backgroundColor: '#64B6AC',
    width: '600px',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '16px',
  },
  imageWrapper: {
    marginBottom: '16px',
  },
  image: {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
  },
  info: {
    textAlign: 'center',
  },
  name: {
    margin: '8px 0',
    fontSize: '1.2em',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
  },
  position: {
    margin: 0,
    fontSize: '1em',
    color: '#666',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
  },
  messageWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    margin: 0,
    fontSize: '1em',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left',
  },
};

export default DeskCard;
