import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.css';

const Statistics = (props) => {
  const [statistics, setStatistics] = useState({});
  const { selectedMonth } = props;

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/statistics?month=${selectedMonth}`);
        if (response) {
          setStatistics(response.data);
        }
      } catch (error) {
        console.error("Error fetching statistics: ", error);
      }
    };

    getStatistics();
  }, [selectedMonth]);

  return (
    <div className='statistics-main-container'>
      <h2>Statistics - {selectedMonth}</h2>
      <div className='statistics-container'>
        <div className='element'>
          <span>Total Sale</span>
          <span>{statistics.totalSaleAmount}</span>
        </div>
        <div className='element'>
          <span>Total sold items</span>
          <span>{statistics.totalSoldItems}</span>
        </div>
        <div className='element'>
          <span>Total not sold items</span>
          <span>{statistics.totalNotSoldItems}</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
