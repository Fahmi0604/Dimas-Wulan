import React, { useEffect, useState } from 'react'
import GreetingService from '../service/greeting.service'
import toast, { Toaster } from 'react-hot-toast'
import { ReactComponent as FloweLeftSVG } from '../image/flower-left.svg'
import { ReactComponent as FloweRightSVG } from '../image/flower-right.svg'
import moment from 'moment'

export default function Ucapan({ isIntersecting }) {

    const [greeting, setGreeting] = useState([]);

    const [namaTamu, setNamaTamu] = useState('');
    const [konfirmasi, setKonfirmasi] = useState(true);
    const [pesan, setPesan] = useState('');

    const createGreeting = () => {
        if (namaTamu !== '' && pesan !== '') {
            GreetingService.createGreeting({ id_user: 4, nama_tamu: namaTamu, konfirmasi: JSON.parse(konfirmasi), pesan: pesan }).then(res => {
                toast.success('Data berhasil dibuat', { position: 'bottom-center' });
                setNamaTamu('');
                setKonfirmasi(false);
                setPesan('');
            }, (err) => {
                console.log(err);
                toast.error('Server Error, harap coba lagi!', { position: 'bottom-center' });
            }).finally(() => getAllGreeting())
        } else {
            toast.error('Harap Diisi Lengkap!', { position: 'bottom-center' });
        }
    }

    const getAllGreeting = () => {
        GreetingService.getGreetingByUserId(4).then(res => {
            setGreeting(res.data.data);
            console.log(res.data.data);
        }, (error => {
            console.log("Private page", error.response);
        }));
    }

    const checkWord = (value) => {
        if (value.length < 501) {
            setPesan(value);
        } else {
            setPesan(pesan);
        }
    }

    useEffect(() => {
        if (!isIntersecting) return;
        getAllGreeting();
    }, [isIntersecting])


    return (
        <>
            <Toaster />
            <div className='flex justify-between mb-8 overflow-hidden py-7'>
                <FloweLeftSVG className='w-[40%] lg:h-[80vh] -ml-[10%] fill-custom-text animate-rotatee delay-500' />
                <FloweRightSVG className='w-[40%] lg:h-[80vh] -mr-[15%] fill-custom-text animate-rotatee delay-1000' />
            </div>
            <div className='w-full -mt-24 md:mt-20 lg:-mt-24'>
                <div className='pb-[0] md:py-[10%]'>
                    <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-custom-text mx-4 md:mx-0'>Ucapkan Sesuatu Untuk Kami Berdua</h2>
                    <div className='flex flex-col md:flex-row' data-aos="zoom-in">
                        <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-secondary-md py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-2">
                            <div className='mb-4'>
                                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-white">Nama</label>
                                <input value={namaTamu} onChange={(e) => setNamaTamu(e.target.value)} type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="John" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="konfirmasi" className="block mb-2 text-sm font-medium text-white">Konfirmasi</label>
                                <select id="konfirmasi" onChange={(e) => setKonfirmasi(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5">
                                    <option value={true} >Hadir</option>
                                    <option value={false}>Tidak Hadir</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <div className='flex justify-between'>
                                    <label htmlFor="pesan" className="block mb-2 text-sm font-medium text-white">Ucapan & Doa</label>
                                    <label className="block mb-2 text-xs font-medium text-white">{500 - pesan.length}</label>
                                </div>
                                <textarea value={pesan} onChange={(e) => checkWord(e.target.value)} rows={5} type="text" id="pesan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Masukan pesan" />
                            </div>
                            <button onClick={() => createGreeting()} className='w-full md:w-auto bg-custom-white-md text-custom-text font-[Cinzel] text-2xl px-4 py-2 rounded-full'>Kirim</button>
                            {/* <Countdown tanggal={'2023-01-14'} /> */}

                            <div className='h-[50vh] overflow-y-auto bg-white flex flex-col items-center mt-8 rounded-lg py-4'>
                                {greeting.map((e, i) => (
                                    <div key={i} className='bg-primary text-custom-text  w-[90%] px-[5%] mb-4 rounded p-4 border-custom-text border-2'>
                                        <div className='flex justify-between items-start mb-4'>
                                            <h4 className='text-sm w-[62%] comforant font-medium'>From: {e?.nama_tamu}</h4>
                                            {/* <h4 className={`text-xs ${e?.konfirmasi ? 'bg-green-600' : 'bg-red-600'}  text-custom-text px-3 py-[2px] rounded`}>{e?.konfirmasi ? 'Hadir' : 'Tidak Hadir'}</h4> */}
                                            <h4 className={`text-xs w-fit  bg-[#D9D9D9] text-[#212121]  px-3 py-[2px] rounded`}>{e?.konfirmasi ? 'Hadir' : 'Tidak Hadir'}</h4>
                                        </div>
                                        <p className='text-base font-medium comforant'>
                                            {e?.pesan}
                                        </p>
                                        <span className='text-xs comforant'>{moment(e?.created_at).format("DD MMM YYYY, HH:mm")}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] mt-2 mb-2 md:mt-4 rounded bg-custom-secondary-md p-2'>
                <div className='pb-[0]'>
                    <img src="./assets/YennyOurstory.jpg" alt="" className='w-full rounded' />
                </div>
            </div> */}
        </>
    )
}

