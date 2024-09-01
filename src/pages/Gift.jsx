import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from '../component/Modal'
import Modal2 from '../component/Modal2'
import { ReactComponent as FloweLeftSVG } from '../image/flower-left.svg'
import { ReactComponent as FloweRightSVG } from '../image/flower-right.svg'
import { useTranslation } from 'react-i18next'

export default function Gift() {

    const { t } = useTranslation('common');

    let [isOpen, setIsOpen] = useState(false)
    const [nama, setNama] = useState('')
    const [nama2, setNama2] = useState('')
    const [norek, setNorek] = useState('')
    const [norek2, setNorek2] = useState('')

    // form konfirmasi
    const [isOpenKonfirmasi, setIsOpenKonfirmasi] = useState(false)
    const [konfirmasi_nama, setkonfirmasi_nama] = useState('')
    const [konfirmasi_hadiah, setkonfirmasi_hadiah] = useState('')
    const [konfirmasi_pesan, setkonfirmasi_pesan] = useState('')
    const [konfirmasi, setkonfirmasi] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal(norek, nama, norek2 = '', nama2 = '') {
        setNama(nama);
        setNorek(norek);
        setNama2(nama2);
        setNorek2(norek2);
        setIsOpen(true);
    }

    const copy = () => {
        navigator.clipboard.writeText(norek).then(() => {
            toast.success('Berhasil copy', { position: 'bottom-center' })
            closeModal();
            /* Resolved - text copied to clipboard successfully */
        }, () => {
            console.error('Failed to copy');
            /* Rejected - text failed to copy to the clipboard */
        });
    }

    const copy2 = () => {
        navigator.clipboard.writeText(norek2).then(() => {
            toast.success('Berhasil copy', { position: 'bottom-center' })
            closeModal();
            /* Resolved - text copied to clipboard successfully */
        }, () => {
            console.error('Failed to copy');
            /* Rejected - text failed to copy to the clipboard */
        });
    }

    const sendMessage = () => {
        if (konfirmasi_nama !== '' && konfirmasi_hadiah !== '' && konfirmasi_pesan !== '') {
            // const msg = `Hai, saya *${konfirmasi_nama}* ingin konfirmasi memberikan tanda kasih berupa, ${(konfirmasi === 'uang') ? 'Transfer Uang Rp. ' : 'Kirim Hadiah'} ${konfirmasi_hadiah}. 
            const msg = `Hai, saya *${konfirmasi_nama}* ingin konfirmasi memberikan tanda kasih berupa, Transfer Uang Rp. ${konfirmasi_hadiah}

${konfirmasi_pesan}

Terima kasih ya.`
            const url = `https://wa.me/${t("datano.gift")}/?text=${encodeURI(msg)}`
            window.open(url, '_blank');
        } else {
            toast.error('Harap Diisi Lengkap!', { position: 'bottom-center' })
        }
    }

    // function currencyFormat(num) {
    //     return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    // }

    return (
        <>
            <Toaster />
            <div className='flex justify-between mb-8 overflow-hidden py-7'>
                <FloweLeftSVG className='w-[40%] lg:h-[80vh] -ml-[10%] fill-custom-text animate-rotatee delay-500' />
                <FloweRightSVG alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] fill-custom-text animate-rotatee delay-1000' />
            </div>
            <div className='w-full -mt-24 md:mt-20 lg:-mt-24'>
                <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-custom-text'>Wedding Gift</h2>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-[100%] text-center md:pt-10 text-[#282828] rounded-2xl md:rounded-xl" data-aos="zoom-in">
                    <button onClick={() => openModal(t("datano.norek"), "Nus Wantari Wahyu Wulandari")} className='w-[50%] md:w-[30%] bg-custom-secondary-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full mb-8'>{t("users.cpw-s")}</button>
                    {/* <button onClick={() => openModal("987654321", "Milea")} className='w-[50%] md:w-[30%] bg-custom-secondary-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full mb-8'>Milea</button> */}
                </div>
                <div className='flex justify-center mb-10'>
                    <button onClick={() => setIsOpenKonfirmasi(true)} className='text-custom-text source-sans-pro'><u>
                        Silahkan melakukan Konfirmasi hadiah <br />
                        <strong>klik disini</strong>
                    </u></button>
                </div>
            </div>

            <Modal isOpen={isOpen} setIsOpen={(e) => setIsOpen(e)}>
                <div className='flex justify-center'>
                    <img src="./assets/mandiri.svg" alt="mandiri" className="w-[60%]" />
                </div>

                <div className="mt-6">
                    <p className="text-lg font-sans font-medium text-center text-[#282828]">
                        {norek} <br />
                        {nama}
                    </p>
                </div>

                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => copy()}
                    >
                        Copy No Rekening
                    </button>
                </div>

                {norek2 !== '' && nama2 !== '' &&
                    (<>
                        <div className="mt-6">
                            <p className="text-lg font-sans font-medium text-center text-[#282828] mt-4">
                                {norek2} <br />
                                {nama2}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={() => copy2()}
                            >
                                Copy No Rekening
                            </button>
                        </div>
                    </>)}
            </Modal>

            <Modal2 isOpenKonfirmasi={isOpenKonfirmasi} setIsOpenKonfirmasi={(e) => setIsOpenKonfirmasi(e)} konfirmasi_nama={konfirmasi_nama} setkonfirmasi_nama={(e) => setkonfirmasi_nama(e)} konfirmasi_hadiah={konfirmasi_hadiah} setkonfirmasi_hadiah={(e) => setkonfirmasi_hadiah(e)} konfirmasi_pesan={konfirmasi_pesan} setkonfirmasi_pesan={(e) => setkonfirmasi_pesan(e)}>
                <h2 className='text-2xl md:text-3xl font-[Cinzel] font-semibold mb-0 text-center text-gray-500'>Konfirmasi Hadiah</h2>
                <div className='flex flex-col md:flex-row'>
                    <div className="w-full flex flex-col p-4 bg-custom-white-sm text-[#282828] rounded-2xl md:rounded-xl" data-aos="zoom-in">
                        <div className='mb-4'>
                            <input type="text" id="first_name" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama" onChange={(e) => setkonfirmasi_nama(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <input type="text" id="first_name" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nominal/Hadiah" onChange={(e) => setkonfirmasi_hadiah(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <textarea rows={5} type="text" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Pesan" onChange={(e) => setkonfirmasi_pesan(e.target.value)} />
                        </div>
                        <button onClick={() => sendMessage()} className='w-full md:w-[40%] lg:w-[30%] bg-custom-secondary-md text-custom-text font-[Cinzel] text-lg md:text-2xl px-4 py-2 rounded-full'>Kirim</button>
                    </div>
                </div>
            </Modal2>
        </>
    )
}
