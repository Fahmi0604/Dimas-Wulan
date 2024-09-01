import React, { useEffect } from 'react'
import Countdown from '../component/Countdown'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactComponent as FloweLeftSVG } from '../image/flower-left.svg'
import { ReactComponent as FloweRightSVG } from '../image/flower-right.svg'

export default function RangkaianAcara() {

    useEffect(() => {
        AOS.init();
    }, []);

    function openTab(url) {
        window.open(url);
    }

    return (
        <>
            <div className='flex justify-between mb-8 overflow-hidden py-7'>
                <FloweLeftSVG className='w-[40%] lg:h-[80vh] -ml-[10%] fill-custom-text animate-rotatee delay-500' />
                <FloweRightSVG className='w-[40%] lg:h-[80vh] -mr-[15%] fill-custom-text animate-rotatee delay-1000' />
            </div>
            <div className='w-full -mt-24 md:mt-20 lg:-mt-24'>
                <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-custom-text'>Rangkaian Acara</h2>
                <div className='flex flex-col'>
                    <div className="flex flex-col items-center w-[90%] md:h-fit mx-[5%] bg-custom-secondary-md text-center py-8 px-4 md:py-10 text-white rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">

                        <img src="./assets/cincin.svg" alt="cincin" className='w-[25%] md:w-auto md:h-[15vh] mb-4' />

                        <p className='text-2xl md:text-3xl font-[Cinzel] mb-4'>Akad Nikah</p>
                        <p className='text-lg md:text-2xl font-[Cinzel] mb-2'>Jum'at, 09 September 2024 </p>
                        <p className='text-lg md:text-2xl font-[Cinzel] mb-4'>Pukul 08:00 WIB - selesai</p>

                        <div className='responsive-map-container rounded-md mb-6'>
                            <iframe title='maps2' width="500" height="500" src="https://www.google.com/maps/embed/v1/place?q=-7.500209, 112.656805&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" frameBorder="0" marginWidth={0} marginHeight={0}></iframe>
                        </div>
                        <p className='text-center text-lg md:text-2xl source-sans-pro mb-6 mx-4 md:mx-0'>
                            {/* Masjid Al Manshur, <br /> Kalangan, Keplaksari, <br /> Kabupaten Jombang */}
                            {/* Jl. Ikan Tombro Timur <br /> No 44B RT 04 RW 04, <br /> Tunjungsekar, Lowokwaru, <br /> Kota Malang */}
                            Desa Gelang Dsn. Krploso <br /> RT 05 RW 04, <br /> Tulangan, Sidoarjo
                        </p>

                        <button onClick={() => openTab('https://maps.app.goo.gl/buryPw6gfmsRogVw5?g_st=com.google.maps.preview.copy')} className='bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Buka Maps</button>
                        <Countdown tanggal={'2024-09-09 08:00:00'} />
                    </div>
                    <div className="flex flex-col items-center w-[90%] md:h-fit mx-[5%] bg-custom-secondary-md text-center py-8 px-4 md:py-10 text-white rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">

                        <img src="./assets/drink.svg" alt="cincin" className='w-[25%] md:w-auto md:h-[15vh] mb-4' />

                        <p className='text-2xl md:text-3xl font-[Cinzel] mb-4'> Resepsi</p>
                        <p className='text-lg md:text-2xl font-[Cinzel] mb-2'>Jum'at, 09 September 2024</p>
                        <p className='text-lg md:text-2xl font-[Cinzel] mb-4'>Pukul 18:00 WIB - selesai</p>
                        <div className='responsive-map-container rounded-md mb-6'>
                            <iframe title='maps2' width="500" height="500" src="https://www.google.com/maps/embed/v1/place?q=-7.500209, 112.656805&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" frameBorder="0" marginWidth={0} marginHeight={0}></iframe>
                        </div>
                        <p className='text-center text-lg md:text-2xl source-sans-pro mb-6 mx-4 md:mx-0'>
                            Desa Gelang Dsn. Krploso <br /> RT 05 RW 04, <br /> Tulangan, Sidoarjo
                        </p>

                        <button onClick={() => openTab('https://maps.app.goo.gl/buryPw6gfmsRogVw5?g_st=com.google.maps.preview.copy')} className='bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Buka Maps</button>
                        <Countdown tanggal={'2024-09-09 18:00:00'} />
                    </div>
                    {/* <div className="flex flex-col items-center w-[90%] md:h-fit mx-[5%] bg-custom-secondary-md text-center py-8 px-4 md:py-10 text-white rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">

                        <img src="./assets/terompet.svg" alt="cincin" className='w-[25%] md:w-auto md:h-[15vh] mb-4' />

                        <p className='text-2xl md:text-3xl font-[Cinzel] mb-4'>Ngunduh Mantu</p>
                        <p className='text-lg md:text-2xl font-[Cinzel] mb-2'>Sabtu, 20 Mei 2023 </p>
                        <p className='text-lg md:text-2xl font-[Cinzel] mb-4'>Pukul 12:00 WIB - selesai</p>
                        <div className='responsive-map-container rounded-md mb-6'>
                            <iframe title='maps2' width="500" height="500" src="https://www.google.com/maps/embed/v1/place?q=-7.254389,112.723663&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" frameBorder="0" marginWidth={0} marginHeight={0}></iframe>
                        </div>
                        <p className='text-center text-lg md:text-2xl source-sans-pro mb-6 mx-4 md:mx-0'>
                            Balai RW 01,<br /> Kel. Tembok Dukuh,<br /> Kec. Bubutan, Surabaya
                        </p>

                        <button onClick={() => openTab(`https://www.google.com/maps/place/7%C2%B015'15.8%22S+112%C2%B043'25.2%22E/@-7.254389,112.723663,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.254389!4d112.723663`)} className='bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Buka Maps</button>
                        <Countdown tanggal={'2023-05-20 07:00:00'} />
                    </div> */}
                </div>
            </div>
        </>
    )
}
