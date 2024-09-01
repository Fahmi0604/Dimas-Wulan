import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Ayat() {
  const { t } = useTranslation('common');
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='relative w-full mt-20 md:mt-40 '>
      <div className="flex flex-col justify-center bg-custom-secondary-md items-center w-[90%] mx-[5%] text-center py-16 md:py-28 mb-4 text-white rounded-2xl" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">

        <p className='w-[80%] md:w-[80%] text-xl md:text-2xl font-[Cinzel] mb-4' data-aos="fade-up">
          {t("ayat.isi")}
        </p>
        <p className='text-lg md:text-3xl font-[Cinzel]' data-aos="fade-up">{t("ayat.kutipan")}</p>
      </div>
    </div>
  )
}
