import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Get the current number of visits from localStorage
    const storedVisits = localStorage.getItem('visits');

    // If visits are already stored, update the state
    if (storedVisits) {
      setVisits(parseInt(storedVisits));
    } else {
      // If visits are not stored, set the initial value to 1
      setVisits(1);
    }
  }, []);

  useEffect(() => {
    // Update the localStorage with the updated number of visits
    localStorage.setItem('visits', visits.toString());
  }, [visits]);

  return (
    <div>
      <h2>Welcome to My Portfolio!</h2>
      <p>Number of Visits: {visits}</p>
    </div>
  );
};

export default VisitorCounter;
