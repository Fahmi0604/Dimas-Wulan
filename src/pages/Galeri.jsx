import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Galeri() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='relative w-full mt-0 lg:-mt-32'>
      <div className="flex flex-wrap gap-[4%] md:flex-col md:justify-center md:items-center md:items-baseline w-[90%] mx-[5%] md:w-[90%] md:mx-[5%] text-center pt-0 md:py-28 text-[#f5f5f5] rounded-2xl md:rounded-none md:rounded-br-2xl md:rounded-tr-2xl">
        <img src="./assets/galeri2.jpg" alt="" className='w-[98%] md:w-[60%] mb-4 md:self-start rounded' data-aos="zoom-in" />
        <img src="./assets/galeri1.jpg" alt="" className='w-[98%] object-cover md:w-[60%] mb-4 md:self-end rounded' data-aos="zoom-in" />
        {/* <img src="./assets/galeri3.jpg" alt="" className='w-[48%] md:w-[60%] mb-4 md:self-start rounded' data-aos="zoom-in" /> */}
        {/* <img src="./assets/galeri4.jpg" alt="" className='w-[48%] md:w-[60%] mb-4 md:self-end rounded' data-aos="zoom-in" /> */}
        {/* <img src="./assets/galeri5.jpg" alt="" className='w-full md:w-[60%] mb-4 md:self-start rounded' data-aos="zoom-in" /> */}
      </div>
    </div>
  )
}
