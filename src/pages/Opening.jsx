import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../App';
import { useTranslation } from "react-i18next";

export default function ({ setisOpen, nama, audio }) {

  const [click, setclick] = useState(false)
  const { setIsAudio } = useContext(Context);
  const { t } = useTranslation('common');

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setisOpen(true);
        setIsAudio(true);
      }, 750);
    }
  }, [click])

  const generateTitle = (type) => {
    if (type === 'cpp-cpw') {
      return (
        `${t("users.cpp-s")} & ${t("users.cpw-s")}`
      )
    } else if (type === 'cpw-cpp') {
      return (
        `${t("users.cpw-s")} & ${t("users.cpp-s")}`
      )
    }
  }

  return (
    <div className={`h-[100vh] max-h-[100vh] w-full fixed overflow-hidden ${click ? 'animate-moveToTop z-[-999]' : 'z-[999'} md:overflow-hidden md:w-[50%] md:mx-[25%]`}>
      {/* <img src="./assets/opening.webp" alt="opening" className='absolute w-full md:w-[75%] h-screen object-cover pointer-events-none z-0 md:mt-[50vh] md:mx-[12.5%]' /> */}
      <img src="./assets/cover.jpg" alt="opening" className='absolute w-full h-screen object-cover pointer-events-none z-0' />
      {/* <div className='absolute z-[1]'>
            p
        </div> */}
      <div id="c-text" className="h-[90vh] max-h-[90vh] relative flex flex-col items-center text-center z-[2]">
        <div className='h-[50vh] pt-9'>
          <p className='text-base md:text-2xl text-white font-[Cinzel] mb-2'>WEDDING INVITATION</p>
          <h2 className='relative text-white text-4xl md:text-5xl font-[Cinzel] font-bold px-5 pb-3 rounded-full'>{generateTitle(t("title-type"))}</h2>
          {/* <p className='invisible text-xl md:text-3xl text-white font-[Lora] mb-8 mx-4'>#ourstoRY</p> */}
          {/* <p className='text-xl md:text-3xl text-primary font-[Alegreya] mb-8 mx-4'>with great joy, we are pleased to cordially invite you to celebrate the mariage of</p> */}
        </div>

        <div className='h-[30vh] md:h-[45vh] flex flex-col justify-between items-center px-4'>
          <div className='text-lg md:text-3xl text-white font-[Cinzel] mb-4'>DEAR, <br />
            <span className='text-2xl font-bold'>
              {nama}
            </span>
            <p className='text-lg md:text-xl text-primary comforant mb-8 mx-4'>Join us for a day of love, laughter, and happily ever after!</p>
          </div>
          <button onClick={() => { setclick(true); audio.play(); }} className='flex w-fit items-center bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 mb-0 rounded-full'>
            {/* <img className='w-4 h-4 mr-2' src="./assets/undangan.svg" alt="" /> */}
            OPEN INVITATION
          </button>
        </div>
      </div>
    </div>
  )
}
