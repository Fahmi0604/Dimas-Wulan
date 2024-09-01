import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'
import { ReactComponent as FloweLeftSVG } from '../image/flower-left.svg'
import { ReactComponent as FloweRightSVG } from '../image/flower-right.svg'
import { useTranslation } from 'react-i18next';

export default function Rsvp() {

    const { t } = useTranslation('common');
    const [nama, setNama] = useState('')
    const [jumlahTamu, setjJumlahTamu] = useState('')
    const [alamat, setAlamat] = useState('');
    const [konfirmasi, setkonfirmasi] = useState('hadir')
    const [lokasi, setlokasi] = useState('')

    const sendMessage = () => {
        if (nama !== '' && jumlahTamu !== '' && konfirmasi !== '' && lokasi !== '') {
            const msg = `Hai, saya ${nama} ingin konfirmasi kehadiran pada undangan pernikahan anda bahwa, ${(konfirmasi === 'hadir') ? `saya akan datang ke acara ${(lokasi === 'resepsi') ? 'Resepsi' : 'Akad Nikah'} Bersama ${jumlahTamu} Orang` : 'Maaf, saya tidak bisa datang'}. Terima kasih ya.`
            const url = `https://wa.me/${t("datano.rsvp")}/?text=${encodeURI(msg)}`
            window.open(url, '_blank');
        } else {
            toast.error('Harap Diisi Lengkap!', { position: 'bottom-center' })
        }
    }

    return (
        <>
            <Toaster />
            <div className='flex justify-between mb-8 overflow-hidden py-7'>
                <FloweLeftSVG className='w-[40%] lg:h-[80vh] -ml-[10%] fill-custom-text animate-rotatee delay-500' />
                <FloweRightSVG className='w-[40%] lg:h-[80vh] -mr-[15%] fill-custom-text animate-rotatee delay-1000' />
            </div>
            <div className='w-full -mt-24 md:mt-20 lg:-mt-24'>
                <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-4 text-center text-custom-text'>RSVP</h2>
                <p className='text-2xl md:text-3xl font-[Cinzel] mb-16 text-center text-custom-text mx-4'>Silahkan Konfirmasi Kehadiran Anda</p>
                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-secondary-md py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                        <div className='mb-4'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Nama</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama" onChange={(e) => setNama(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Jumlah Tamu</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="1 Orang" onChange={(e) => setjJumlahTamu(e.target.value)} />
                        </div>
                        {/* <div className='mb-4'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Alamat</label>
                        <textarea rows={5} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Alamat" onChange={(e) => setAlamat(e.target.value)} />
                    </div> */}
                        <div className='mb-4'>
                            <label htmlFor="konfirmasi" className="block mb-2 text-sm font-medium text-white">Konfirmasi</label>
                            <select value={konfirmasi} id="konfirmasi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" onChange={(e) => setkonfirmasi(e.target.value)}>
                                <option value="hadir">Hadir</option>
                                <option value="tidak-hadir">Tidak Hadir</option>
                            </select>
                        </div>

                        <div className='mb-4'>
                            <div className="flex items-center mb-2">
                                <input id="default-radio-2" type="radio" value="akadnikah" name="konfirmasi" className="w-4 h-4 text-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" onChange={(e) => setlokasi(e.target.value)} />
                                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-50">Akad Nikah</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio-1" type="radio" value="resepsi" name="konfirmasi" className="w-4 h-4 text-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" onChange={(e) => setlokasi(e.target.value)} />
                                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-50">Resepsi</label>
                            </div>
                        </div>
                        <button onClick={() => sendMessage()} className='w-full md:w-auto bg-custom-white-md text-custom-text font-[Cinzel] text-lg md:text-xl px-4 py-2 rounded-full'>Reservation via Whatsapp</button>
                    </div>
                </div>
            </div>
        </>
    )
}
