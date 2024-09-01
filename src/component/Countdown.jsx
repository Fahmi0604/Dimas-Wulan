import React, { useState, useEffect } from 'react'


export default function Countdown({ tanggal }) {
  const targetTime = new Date(tanggal).getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-between text-custom-text mt-10 font-[Cinzel] z-[2] text-center">
      <div className='w-[20%] mx-[2.5%] bg-primary py-3 rounded text-sm md:text-base'>
        <span className='text-2xl'>{(days > 0) ? days : '0'}</span> <br /> Hari
      </div>
      <div className='w-[20%] mx-[2.5%] bg-primary py-3 rounded text-sm md:text-base'>
        <span className='text-2xl'>{(hours > 0) ? hours : '0'}</span> <br /> Jam
      </div>
      <div className='w-[20%] mx-[2.5%] bg-primary py-3 rounded text-sm md:text-base'>
        <span className='text-2xl'>{(minutes > 0) ? minutes : '0'}</span> <br /> Menit
      </div>
      <div className='w-[20%] mx-[2.5%] bg-primary py-3 rounded text-sm md:text-base'>
        <span className='text-2xl'>{(seconds > 0) ? seconds : '0'}</span> <br /> Detik
      </div>
    </div>
  )
}
