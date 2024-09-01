import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { ReactComponent as FloweLeftSVG } from '../image/flower-left.svg'
import { ReactComponent as FloweRigntSVG } from '../image/flower-right.svg'

export default function Pembukaan() {
  const { t } = useTranslation('common');
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className='flex justify-between overflow-hidden py-7'>
        {/* <div className='w-[40%] lg:h-[80vh] -ml-[10%] invisible animate-rotatee delay-500'> */}
        <FloweLeftSVG className='w-[40%] lg:h-[80vh] -ml-[10%] fill-custom-text invisible animate-rotatee delay-500' />
        {/* </div> */}
        {/* <img src="./assets/flower-left.svg" alt="" className='w-[40%] lg:h-[80vh] -ml-[10%] invisible animate-rotatee delay-500' /> */}
        <FloweRigntSVG className='w-[40%] lg:h-[80vh] -mr-[15%] fill-custom-text animate-rotatee delay-1000' />
      </div>
      <div className='w-full -mt-24'>
        <div className=" w-[90%] md:w-full mx-[5%] md:mx-0 text-center py-4 text-custom-text rounded-2xl md:rounded-none">
          <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-14'>Groom & Bride</h2>

          <div className='flex flex-col md:flex-row md:mt-20'>

            <div className='flex flex-col items-center mb-14 md:w-1/2' data-aos="zoom-in">
              <a href='https://www.instagram.com/nuruslailya/' target={"_blank"}>
                <img src="./assets/bride.png" alt="bride" className='w-48 h-48 mb-8' />
              </a>
              <p className='text-lg md:text-3xl font-[Cinzel] mb-4 mx-8'>{t("users.cpw-l")}</p>
              <p className='text-md md:text-2xl roboto-serif'>Putri Pertama dari <br />Bapak {t("users.ayah-cpw")} <br /> dan <br />Ibu {t("users.ibu-cpw")}</p>
            </div>

            <div className='flex flex-col items-center mb-14 md:w-1/2' data-aos="zoom-in">
              <a href='https://www.instagram.com/_fahmifs/' target={"_blank"}>
                <img src="./assets/groom.png" alt="groom" className='w-48 h-48 mb-8' />
              </a>
              <p className='text-lg md:text-3xl font-[Cinzel] mb-4 mx-8'>{t("users.cpp-l")}</p>
              <p className='text-md md:text-2xl roboto-serif'>Putra Pertama dari <br /> Bapak {t("users.ayah-cpp")} <br /> dan <br />Ibu {t("users.ibu-cpp")}</p>
            </div>
            {/* <p className='text-5xl font-[Cinzel] mb-4'>&</p> */}

          </div>

          {/* <h4 className='text-2xl mt-8 md:text-2xl font-[Cinzel]'>#ourstoRY</h4> */}
        </div>
        <div className='flex justify-between overflow-hidden py-7 -mt-14'>
          <FloweLeftSVG className='w-[40%] lg:h-[80vh] -ml-[10%] fill-custom-text animate-rotatee delay-500' />
          {/* <img src="./assets/flower-right2.svg" alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] animate-rotatee delay-1000' /> */}
          {/* <img src="./assets/flower-short.svg" alt="" className='w-[20%] lg:h-[80vh] -mr-[0%] animate-rotatee delay-1000' /> */}
        </div>
      </div>
    </>
  )
}
