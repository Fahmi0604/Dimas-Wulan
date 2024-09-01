import React, { lazy } from 'react'
import { Context } from '../App'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { google } from 'calendar-link'
import useLazyLoad from '../hooks/useLazyLoad'
import Countdown from '../component/Countdown'

// const translation = require("../translation.json")

const Pembukaan = lazy(() => import('./Pembukaan'))
const Ayat = lazy(() => import('./Ayat'))
const Galeri = lazy(() => import('./Galeri'))
const RangkaianAcara = lazy(() => import('./RangkaianAcara'))
const Ucapan = lazy(() => import('./Ucapan'))
const Rsvp = lazy(() => import('./Rsvp'))
const Gift = lazy(() => import('./Gift'))
const Live = lazy(() => import('./Live'))
const Protokol = lazy(() => import('./Protokol'))
const Footer = lazy(() => import('./Footer'))

// const event = {
//     title: "Wedding Invitation, Dilan And Milea <3",
//     description: "Be there!",
//     start: "2024-01-14 18:00:00 +0100",
//     duration: [3, "hour"],
//     location: "Malang, Indonesia"
// };

export default function Main({ handleAudio }) {

    const { t } = useTranslation('common');
    const { isAudio: isPlayingAudio, setIsAudio: setisPlayingAudio } = useContext(Context);
    const [ref, isIntersecting] = useLazyLoad();

    const event = {
        title: t("savethedate.title"),
        description: t("savethedate.description"),
        start: t("savethedate.start"),
        end: t("savethedate.end"),
        duration: t("savethedate.duration"),
        location: t("savethedate.location")
    };

    const fetchLink = () => {
        const link = google(event);
        console.log(link);
        window.open(link, "_blank").focus();
    };

    const generateTitleDesktop = (type) => {
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

    const generateTitleMobile = (type) => {
        if (type === 'cpp-cpw') {
            return (<>
                {t("users.cpp-s")} <br /> & <br /> {t("users.cpw-s")}
            </>
            )
        } else if (type === 'cpw-cpp') {
            return (<>
                {/* {t("users.cpw-s")} <br /> & <br /> {t("users.cpp-s")} */}
                {t("users.cpw-s")} & {t("users.cpp-s")}
            </>
            )
        }
    }

    return (
        <div className='min-h-[2500px] md:w-[50%] md:mx-[25%]'>
            <div className='fixed w-full md:w-[50%] md:mx-[25%] bottom-0 flex justify-end z-[11] pb-4 pr-4'>
                {/* <audio ref={myAudio} src="./assets/backsound2.mp3" loop /> */}
                <button onClick={() => handleAudio()} className="w-auto bg-transparent text-custom-text border-none cursor-pointer">
                    {isPlayingAudio ? (<svg id="btn-pause" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>) :
                        (<svg id="btn-play" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>)}
                </button>
            </div>
            <section className='relative w-full h-[100vh] overflow-hidden flex flex-col justify-between items-center'>
                {/* <img src="./assets/home-mobile.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[1] hidden md:block' /> */}
                {/* <img src="./assets/home-mobile.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[1] block md:hidden' /> */}
                <img src="./assets/opening.jpg" alt="cover" className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[1]' />
                <div className="relative flex flex-col justify-center items-center mt-[6vh] md:mt-[8vh] z-[2]">
                    <p className='text-2xl md:text-4xl text-white font-[Cinzel] mb-1'>The Wedding of</p>
                    <h1 className='hidden md:block text-white text-7xl font-[Cinzel] text-center px-12 pb-1 md:pb-5 rounded-full'>{generateTitleDesktop(t("title-type"))}</h1>
                    <h1 className='block md:hidden text-white text-4xl font-[Cinzel] font-extrabold text-center px-4 rounded-full'>{generateTitleMobile(t("title-type"))}</h1>
                </div>

                <div className='w-[85%] z-[2] mt-[38vh]'>
                    <Countdown tanggal={'2024-09-09 18:00:00'} />
                    {/* <Countdown tanggal={'2023-05-14 07:00:00'} /> */}
                </div>

                <div className="w-full h-[15vh] z-[10] flex justify-center items-center">
                    <button onClick={() => fetchLink()} className='w-auto bg-primary text-custom-text font-[Lora] text-lg font-medium px-4 py-2 rounded-full mb-8'>Save the Date</button>
                </div>
                {/* <div className="w-full h-[17.5vh] bg-[#304221] z-[2]">
                    <div className="flex justify-center items-center hidden">
                        <div className="w-1/5 h-[20vh] flex justify-center items-center">
                            <a href="#" className='text-lg text-custom-text decoration-none bg-[#98B66E] py-2 px-7 rounded-full'>
                                Home
                            </a>
                        </div>
                        <div className="w-1/5 h-[20vh] flex justify-center items-center">
                            <a href="#" className='text-lg text-custom-text decoration-none bg-[#98B66E] py-2 px-7 rounded-full'>
                                Acara
                            </a>
                        </div>
                        <div className="w-1/5 h-[20vh] flex justify-center items-center">
                            <a href="#" className='text-lg text-custom-text decoration-none bg-[#98B66E] py-2 px-7 rounded-full'>
                                Gift
                            </a>
                        </div>
                    </div>
                </div> */}
            </section>
            <main className='w-full bg-primary z-[4]'>
                <Ayat />
                <Pembukaan />
                <Galeri />
                <div ref={ref}></div>
                <RangkaianAcara />
                <Ucapan isIntersecting={isIntersecting} />
                <Rsvp />
                <Gift />
                {/* <Live /> */}
                {/* <Protokol /> */}
                <Footer />
            </main>
        </div>
    )
}
