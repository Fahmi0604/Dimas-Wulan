import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next';

export default function GenerateUrl() {

    const [nama, setNama] = useState('')
    const [listGenerated, setListGenerated] = useState([]);
    //     const [pesan, setPesan] = useState(`Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i [nama] untuk menghadiri acara kami.

    // *Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi :

    // [link-undangan]

    // Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

    // *Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*

    // Dan karena suasana masih pandemi, diharapkan untuk *tetap menggunakan masker dan datang pada jam yang telah ditentukan.*

    // Terima kasih banyak atas perhatiannya.`);
    //     const [pesan, setPesan] = useState(`Kepada Yth
    // Bapak/Ibu/Saudara/i [nama]
    // Salam Sejahtera 🙏🏻

    // Tuhan membuat segala sesuatu Indah pada waktunya, Indah saat Dia mempertemukan, Indah saat Dia menumbuhkan kasih, dan indah saat Dia mempersatukan kami dalam pernikahan kudus.

    // Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami :

    // *Rio & Yenny*

    // Berikut link untuk info lengkap dari acara kami:

    // [link-undangan]

    // Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

    // Kami yang berbahagia
    // *Rio & Yenny*`)

    const { t } = useTranslation('common');
    // const [pesan, setPesan] = useState(`Kepada%20Yth%0ABapak%2FIbu%2FSaudara%2Fi%0A_*[nama]*_%0A%0AAssalamualaikum%20warahmatullahi%20wabarakatu.%0A%20%20%20%20%0ATanpa%20mengurangi%20rasa%20hormat%2C%20perkenankan%20kami%20mengundang%20Bapak%2FIbu%2FSaudara%2Fi%2C%20teman%20sekaligus%20sahabat%2C%20untuk%20menghadiri%20acara%20pernikahan%20kami%20%3A%0A%20%20%20%20%0A*${t("users.cpw-s")}%20%26%20${t("users.cpp-s")}*%0A%20%20%20%20%0ABerikut%20link%20untuk%20info%20lengkap%20dari%20acara%20kami%3A%0A%20%20%20%20%0A[link-undangan]%0A%20%20%20%20%0AAllah%20swt%20membuat%20segala%20sesuatu%20Indah%20pada%20waktunya%2C%20Indah%20saat%20Dia%20mempertemukan%2C%20Indah%20saat%20Dia%20menumbuhkan%20kasih%2C%20dan%20indah%20saat%20Dia%20mempersatukan%20kami%20dalam%20suci.%0AMerupakan%20suatu%20kebahagiaan%20bagi%20kami%20apabila%20Bapak%2FIbu%2FSaudara%2Fi%20berkenan%20untuk%20hadir%20dan%20memberikan%20doa%20restu.%0A%20%20%20%20%0AKami%20yang%20berbahagia%0A*${t("users.cpw-s")}%20%26%20${t("users.cpp-s")}*`)
    const [pesan, setPesan] = useState(`Kepada Yth
Bapak/Ibu/Saudara/i
_*[nama]*_
    
Assalamualaikum warahmatullahi wabarakatu.
        
Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami :
        
*${t("users.cpw-s")} & ${t("users.cpp-s")}*
        
Berikut link untuk info lengkap dari acara kami:
        
[link-undangan]
        
Allah swt membuat segala sesuatu Indah pada waktunya, Indah saat Dia mempertemukan, Indah saat Dia menumbuhkan kasih, dan indah saat Dia mempersatukan kami dalam suci.
Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
        
Kami yang berbahagia
*${t("users.cpw-s")} & ${t("users.cpp-s")}*`)

    const generate = () => {
        setListGenerated([]);

        if (nama != '' && pesan != '') {
            const daftar = nama.split(/\r?\n/).filter(el => el)

            daftar.forEach((e, i) => {
                let msg;
                msg = pesan.replace('[nama]', `${e}`).replace('[link-undangan]', encodeURI(`https://dreamyweddingbliss.my.id/Wulan-Dimas/${e}`))
                setListGenerated((prev) => [...prev,
                {
                    id: i + 1,
                    pesan: msg,
                    nama: e,
                    link: `https://api.whatsapp.com/send?phone=&text=${encodeURIComponent(msg)}`
                    // link: `https://api.whatsapp.com/send?phone=&text=${test}`
                }
                ]);
            });
        }
    }

    const deleteListGenerate = (id) => {
        setListGenerated(listGenerated.filter(f => f.id != id));
    }

    useEffect(() => {
        console.log(listGenerated);
    }, [listGenerated])


    return (
        <>
            <Toaster />
            <div className='w-full min-h-screen py-8 bg-primary'>
                <h2 className='text-3xl md:text-4xl font-[Cinzel] mb-4 text-center text-custom-text'>Kirim Undangan Untuk Para Tamu</h2>
                <p className='px-[15%] text-xl md:text-xl font-[Cinzel] mb-16 text-center text-custom-text'>Buat undangan jadi lebih ekslusif dan personal di setiap undangan yang akan dikirimkan. Silahkan Generate Link nya di bawah ini:</p>
                <div className='flex flex-col'>
                    <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-secondary-md py-8 md:py-10 text-white rounded-2xl md:rounded-xl mb-10">
                        {/* <div className='mb-4'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama" onChange={(e) => setNama(e.target.value)} />
                    </div> */}
                        <div className='mb-4'>
                            <label htmlFor="first_name" className="block text-lg font-medium">Nama Tamu</label>
                            <p className='text-xs mb-3'>* Gunakan baris baru (↵) untuk memisahkan nama yang akan Anda undang.</p>
                            <textarea rows={5} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama Tamu" onChange={(e) => setNama(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="first_name" className="block mb-2 text-lg font-medium">Text Pengantar</label>
                            <p className='text-xs mb-3'>
                                * Isikan text ini [link-undangan] pada text pengantar agar otomatis tercantumkan link kehalaman undangan. <br />
                                * Anda juga bisa menggunakan [nama] untuk menyertakan nama yang Anda undang.</p>
                            {/* <textarea rows={5} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Text Pengantar" value={decodeURIComponent(pesan)} onChange={(e) => setPesan(encodeURIComponent(e.target.value))} /> */}
                            <textarea rows={5} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Text Pengantar" value={pesan} onChange={(e) => setPesan(e.target.value)} />
                        </div>
                        {/* <div className='mb-4'>
                        <label htmlFor="konfirmasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Konfirmasi</label>
                        <select id="konfirmasi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" onChange={(e) => setkonfirmasi(e.target.value)}>
                            <option value="tidak-hadir" >Tidak Hadir</option>
                            <option value="hadir">Hadir</option>
                        </select>
                    </div> */}
                        <button onClick={() => generate()} className='w-full md:w-[40%] lg:w-[30%] bg-custom-white-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full'>Generate</button>
                        {/* <Countdown tanggal={'2023-01-14'} /> */}
                    </div>

                    <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-secondary-md py-8 md:py-10 text-custom-text rounded-2xl md:rounded-xl mb-10">
                        <h2 htmlFor="first_name" className="block font-[Cinzel] text-xl font-medium text-white mb-4">Nama Tamu</h2>

                        <div className='flex flex-col'>
                            {listGenerated && listGenerated.map((e, i) => (
                                <div className='bg-white px-4 py-8 mb-4 rounded-md' key={i}>
                                    <label htmlFor="first_name" className="block mb-4 text-lg font-medium">Nama Tamu : {e.nama}</label>
                                    {/* <div className='flex'> */}
                                    <a href={e.link} target={'_blank'} className='w-fit md:w-[40%] lg:w-[30%] bg-custom-secondary text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Share Whatsapp</a>
                                    <button onClick={() => deleteListGenerate(e.id)} className='w-fit md:w-[40%] lg:w-[30%] bg-custom-secondary text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>hapus</button>
                                    {/* </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
