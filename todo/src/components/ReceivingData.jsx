import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';
import './loading.css'

const API_KEY = 'S4ubpbFH3fZgohievbzIyZZMsIOeKVFg3mlCWnWh';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function ReceivingData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const result = response.data;
        setData(Array(4).fill(result));
      })
      .catch(error => {
        console.error('Error fetching the data from NASA API:', error);
      });
  }, []);

  const handleBack = () =>{
    navigate('/')
  }

  return (
    <>
  <h1 className='text-3xl font-medium dark:text-white text-custom-purple text-center mt-10'>NASA APOD</h1>

  {data.length > 0 ? (
    <div className='grid grid-cols-2 gap-10 mx-10'>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className='text-xl font-medium dark:text-white text-custom-purple text-center mt-4'>{item.title}</h2>
          <p className='font-medium dark:text-white text-custom-purple text-center mt-4'>{item.date}</p>
          <img src={item.url} alt={item.title} />
          <p className='dark:text-white text-custom-purple text-justify'>{item.explanation}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className='flex justify-center items-center loading-container'>
      <Atom color="#cc4731" />
    </div>
  )}

  <button onClick={handleBack} className="border border-custom-purple text-custom-purple dark:bg-custom-purple2 dark:text-white px-4 rounded py-2 m-10">بازگشت به صفحه قبل</button>
</>

  );
}

export default ReceivingData;
