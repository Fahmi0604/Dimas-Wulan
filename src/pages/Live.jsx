import { Fragment, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { ReactComponent as FloweLeftSVG } from '../image/flower-left.svg'
import { ReactComponent as FloweRightSVG } from '../image/flower-right.svg'
import { useTranslation } from 'react-i18next'
import { ReactComponent as InstagramIcon } from '../image/ig.svg'

export default function Live() {

    const { t } = useTranslation('common');

    return (
        <>
            <Toaster />
            <div className='flex justify-between mb-8 overflow-hidden py-7 mt-32'>
                <FloweLeftSVG className='w-[40%] lg:h-[80vh] -ml-[10%] fill-custom-text animate-rotatee delay-500' />
                <FloweRightSVG alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] fill-custom-text animate-rotatee delay-1000' />
            </div>
            <div className='w-full -mt-24 md:mt-20 lg:-mt-24'>
                <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-custom-text'>Live Streaming</h2>
                <div className='flex justify-center mb-10 mx-8'>
                    <p className='text-custom-text source-sans-pro text-center'>Temui kami secara virtual untuk menyaksikan acara pernikahan kami melalui platform Instagram.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-[100%] text-center md:pt-10 text-[#282828] rounded-2xl md:rounded-xl" data-aos="zoom-in">
                    <a href={t("live.link")} target='_blank' className='w-fit flex justify-center items-center bg-custom-secondary-md text-white font-[Cinzel] text-md px-4 py-2 rounded-full mb-8'>
                        <InstagramIcon className='w-4 h-4 fill-white mr-2' /> Join Live Streaming
                    </a>
                    {/* <button onClick={() => openModal("987654321", "Milea")} className='w-[50%] md:w-[30%] bg-custom-secondary-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full mb-8'>Milea</button> */}
                </div>
                <div className='flex justify-center mb-10'>
                    <p className='text-custom-text source-sans-pro text-center'>
                        Instagram: {t("live.username")}<br />
                        Hari/Tanggal: {t("live.date")}<br />
                        Pukul: {t("live.time")}
                    </p>
                </div>
            </div>
        </>
    )
}
