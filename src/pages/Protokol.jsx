import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { ReactComponent as Protokol1 } from '../image/protokol1.svg'
// import { ReactComponent as Protokol2 } from '../image/protokol2.svg'
import Protokol2 from '../image/protokol2'
import { ReactComponent as Protokol3 } from '../image/protokol3.svg'
const namaTema = require('.././translation.json')
const tema = require('.././theme.json')

export default function Protokol() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Toaster />
            <div className='w-full mt-20 md:mt-40'>
                <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                    <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-4 text-center text-custom-text'>Protokol Kesehatan</h2>
                    <p className='text-md md:text-xl source-sans-pro text-center text-custom-text mx-4'>Sehubungan dengan situasi pandemi Covid-19, tanpa mengurangi rasa hormat, kami menghimbau kepada seluruh tamu undangan untuk menerapkan protokol kesehatan.</p>
                    <div className='flex flex-col mt-8 text-center items-center'>
                        <div className='w-full md:w-[30%] md:mx-[1.5%] flex flex-col justify-center items-center mb-8'>
                            <h4 className='text-custom-text text-lg font-[Cinzel] mb-4'>Cuci Tangan</h4>
                            {/* <img src="./assets/protokol1.svg" alt="p1" className='w-20 h-20 md:w-40 md:h-40 md:p-4 hover:scale-110' /> */}
                            <Protokol1 className='w-20 h-20 fill-custom-text md:w-40 md:h-40 md:p-4 hover:scale-110' />
                        </div>
                        <div className='w-full md:w-[30%] md:mx-[1.5%] flex flex-col justify-center items-center mb-8'>
                            <h4 className='text-custom-text text-lg font-[Cinzel] mb-4'>Gunakan Masker</h4>
                            {/* <img src="./assets/protokol2.svg" alt="p1" className='w-20 h-20 md:w-40 md:h-40 hover:scale-110' /> */}
                            <Protokol2 className='w-20 h-20 md:w-40 md:h-40 md:p-4 hover:scale-110' primary={tema[namaTema?.tema]?.colors?.customText} />
                        </div>
                        <div className='w-full md:w-[30%] md:mx-[1.5%] flex flex-col justify-center items-center mb-8'>
                            <h4 className='text-custom-text text-lg font-[Cinzel] mb-4'>Jaga Jarak</h4>
                            {/* <img src="./assets/protokol3.svg" alt="p1" className='w-20 h-20 md:w-40 md:h-40 hover:scale-110' /> */}
                            <Protokol3 className='w-20 h-20 fill-custom-text md:w-40 md:h-40 md:p-4 hover:scale-110' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
