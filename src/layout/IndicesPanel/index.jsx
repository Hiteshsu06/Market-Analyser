import Coursel from "@components/Coursel";
import { useState, useEffect } from 'react';
import axios from 'axios';

let dummyData = {
  domesticIndexes: [
    {
      name: 'Nifty 50',
      currentPrice: '23,501.10',
      prevDayChange: '-65.90',
      prevDayChangePercent: '-0.28%'
    },
    {
      name: 'Nifty Metal',
      currentPrice: '9,990.90',
      prevDayChange: '+39.85',
      prevDayChangePercent: '0.40%'
    },
    {
      name: 'Nifty Bank',
      currentPrice: '51,661.45',
      prevDayChange: '-121.80',
      prevDayChangePercent: '0.24%'
    },
    {
      name: 'Nifty 50',
      currentPrice: '23,501.10',
      prevDayChange: '-65.90',
      prevDayChangePercent: '-0.28%'
    },
    {
      name: 'Nifty Metal',
      currentPrice: '9,990.90',
      prevDayChange: '+39.85',
      prevDayChangePercent: '0.40%'
    },
    {
      name: 'Nifty Bank',
      currentPrice: '51,661.45',
      prevDayChange: '-121.80',
      prevDayChangePercent: '0.24%'
    }
  ],
  internationalIndexes: {
    usaIndexes: [{
      name: 'Dow Jones',
      currentPrice: '23,450.60',
      prevDayChange: '116',
      prevDayChangePercent: '0.49%',
      country: 'Ameri'
    },
    {
      name: 'Nasdaq',
      currentPrice: '23,450.60',
      prevDayChange: '116',
      prevDayChangePercent: '0.49%',
      country: 'Ameri'
    }],
    asiaIndexes: [{
      name: 'Dow Jones',
      currentPrice: '23,450.60',
      prevDayChange: '116',
      prevDayChangePercent: '0.49%',
      country: 'Ameri'
    },
    {
      name: 'Nasdaq',
      currentPrice: '23,450.60',
      prevDayChange: '116',
      prevDayChangePercent: '0.49%',
      country: 'Ameri'
    }],
    europeIndexes: [{
      name: 'Dow Jones',
      currentPrice: '23,450.60',
      prevDayChange: '116',
      prevDayChangePercent: '0.49%',
      country: 'Ameri'
    },
    {
      name: 'Nasdaq',
      currentPrice: '23,450.60',
      prevDayChange: '116',
      prevDayChangePercent: '0.49%',
      country: 'Ameri'
    }]
  }
}

const IndicesPanel = () => {
  const [time, setTime] = useState(new Date());
  const [domesticData, setDomesticData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour12: true });
  };

  const formatDate = (time) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    return time.toLocaleDateString(undefined, options);
  };
  
  useEffect(()=>{
    setDomesticData(dummyData?.domesticIndexes)
  },[])

  return (
    <div className='w-100 p-4 bg-blue'>
        <div className='row'>
            <div className='col-4 p-4'>
                <div className="fs-6 fw-bolder text-center">{formatDate(time)}</div>
                <div className="fs-1 fw-bolder text-center">{formatTime(time)}</div>
            </div>
            <div className='col-8'>
                <Coursel data={domesticData} cardsPerCoursel={3}/>
            </div>
        </div>
        <div className='row mt-4'>
            <div className='col-12'>
                <span className="ms-1 mb-1"><h4>Foreign Indices</h4></span>
                <Coursel data={domesticData} cardsPerCoursel={5}/>
            </div>
        </div>
    </div>
  )
}

export default IndicesPanel