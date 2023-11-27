import React, { useState, useEffect } from 'react';

const GetDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div>
      <p>Create Date: {formattedDate}</p>
    </div>
  );
};

export default GetDate;
