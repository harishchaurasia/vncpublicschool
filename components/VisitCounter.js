import { useEffect, useState } from 'react';

const VisitCounter = () => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('/api/visits');
        const data = await response.json();
        setVisits(data.visits);
      } catch (error) {
        console.error('Failed to fetch visit count:', error);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <div>
      {visits !== null ? (
        <p>Visits: {visits}</p>
      ) : (
        <p>Loading visit count...</p>
      )}
    </div>
  );
};

export default VisitCounter;
