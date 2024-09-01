import React from 'react'
import { ReactComponent as InstagramIcon } from '../image/ig.svg'
import { ReactComponent as TiktokIcon } from '../image/tiktok.svg'

export default function Footer() {
    return (
        // <div className='w-full mt-20 md:mt-40 custom-linear-gradient'>
        <div className='w-full mt-20 md:mt-40 '>
            <div className="flex flex-col justify-between items-center w-full text-custom-text">
                <div className='w-full flex flex-col items-center justify-center my-14' data-aos="zoom-in" >
                    <img src="./assets/logo.png" alt="logo" className='w-[40%] md:w-[25%]' />
                    <div className='flex mt-14 justify-center items-center gap-8'>
                        <a href='https://www.instagram.com/elysianinvitation/' target={"_blank"} className='w-[5%] md:w-[5%]'>
                            {/* <img src="./assets/ig.svg" alt="logo" /> */}
                            <InstagramIcon className='w-6 h-6 fill-custom-text' />
                        </a>
                        <a href='https://www.tiktok.com/@elysianinvitation/' target={"_blank"} className=' w-[5%] md:w-[5%]' >
                            {/* <img src="./assets/tiktok.svg" alt="logo" /> */}
                            <TiktokIcon className='w-6 h-6 fill-custom-text' />
                        </a>
                    </div>
                </div>

                {/* <img src="/assets/footer.svg" alt="" className='w-full' /> */}
                {/* <div className='flex justify-between overflow-hidden py-7 -mt-24'> */}
                {/* <img src="./assets/flower-left.svg" alt="" className='w-[40%] lg:h-[80vh] -ml-[10%] animate-rotatee delay-500' /> */}
                {/* <img src="./assets/flower-right2.svg" alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] animate-rotatee delay-1000' /> */}
                {/* <img src="./assets/flower-short.svg" alt="" className='w-[20%] lg:h-[80vh] -mr-[0%] animate-rotatee delay-1000' /> */}
                {/* </div> */}
                <p className='text-xs text-center md:text-lg text-custom-text mb-2'>Copyright © 2022</p>
            </div>
        </div>
    )
}
