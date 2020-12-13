import { useState, useEffect } from 'react'
import stail from '../styles/Halaman.module.scss'
import Layout from '../components/layout'

import KadAhli from '../components/halaman/kadAhli'
import KadPekerjaan from '../components/halaman/kadPekerjaan'
import KadProduk from '../components/halaman/kadProduk'
import Banner from '../components/banner'

const tapisData = (dataArray, searchParam) => {
    const filteredData = dataArray.filter(data => {
        const splitName = data.nama.split(' ');
        let flag = false;
        splitName.forEach(word => {
            if(word.toLowerCase().startsWith(searchParam.toLowerCase())) flag = true;
        })
        return flag;
    })
    return filteredData;
};

export const getStaticProps = async () => {
    const komuniti = await fetch(`https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=komuniti`).then(res => res.json());
    const produk = await fetch(`https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=produk`).then(res => res.json());
    const pekerjaan = await fetch(`https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=pekerjaan`).then(res => res.json());
    return {
        props: {
            message: "Hello Swag!",
            data: {
                komuniti: komuniti.data,
                produk: produk.data,
                pekerjaan: pekerjaan.data,
            }
        }
    }
};

const Home = ({ message, data }) => {
    const [komunitiTertapis, setKomunitiTertapis] = useState([]);
    const [produkTertapis, setProdukTertapis] = useState([]);
    const [pekerjaanTertapis, setPekerjaanTertapis] = useState([]);
    
    const [carian, setCarian] = useState('');

    // * Category section
    const senaraiKategori = [
        { nama: 'semua', label: 'semua' },
        { nama: 'ahli', label: 'ahli' },
        { nama: 'pekerjaan', label: 'kerja' },
        { nama: 'produk', label: 'produk' }];
    const [kategori, setKategori] = useState(senaraiKategori[0].nama);

    const ubahKategori = (kategoriTerpilih) => {
        setKategori(() => kategoriTerpilih);
    };

    useEffect(() => {
        setKomunitiTertapis(() => data.komuniti);
        setProdukTertapis(() => data.produk);
        setPekerjaanTertapis(() => data.pekerjaan);
        // console.log(data);
    }, [])

    useEffect(() => {
        setKomunitiTertapis(() => tapisData(data.komuniti, carian));
        setProdukTertapis(() => tapisData(data.produk, carian));
        setPekerjaanTertapis(() => tapisData(data.pekerjaan, carian));
    }, [carian])

    return (
        <Layout
            tajuk="JomBuat - Belajar dan Lancarkan!"
            huraian="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!"
            gambar="https://jombuat.club/jombuatmeta.png"
            pautan="https://jombuat.club"
        >
            <section className={stail.body}>
                <Banner />

                <div className={stail.search_area}>
                    <ul className={stail.search_filter}>
                        {
                            senaraiKategori.map(kat => (
                                <li key={kat.nama} onClick={() => ubahKategori(kat.nama)} data-active={kat.nama === kategori}>{kat.label}</li>
                            ))
                        }
                    </ul>
                    <input
                        id="carian"
                        className={stail.search}
                        type="text"
                        value={carian}
                        onChange={({ currentTarget: { value } }) => setCarian(() => value)}
                        placeholder="Anda cari, dan kami akan senaraikan untuk anda"
                    />
                    <label htmlFor="carian">Carian</label>
                </div>

                {/* Penghasilan Komponen Kad Ahli */}
                {
                    ((kategori === 'semua' || kategori === 'ahli') && komunitiTertapis.length !== 0) && (
                        <>
                            <div className={stail.tajukBahagian}>
                                <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_pendek}`} />
                                <p>Komuniti</p>
                                <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_panjang}`} />
                            </div>
                            <KadAhli senaraiKomuniti={komunitiTertapis} />
                        </>
                    )
                }

                {/* Penghasilan Komponen Kad Produk */}
                { ((kategori === 'semua' || kategori === 'produk') && produkTertapis.length !== 0) && (
                        <>
                            <div className={stail.tajukBahagian}>
                                <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_pendek}`} />
                                <p>Produk</p>
                                <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_panjang}`} />
                            </div>
                            <KadProduk senaraiProduk={produkTertapis} />
                        </>
                    )
                }

                {/* Penghasilan Komponen Kad Pekerjaan */}
                { ((kategori === 'semua' || kategori === 'pekerjaan') && pekerjaanTertapis.length !== 0) &&  (
                    <>
                        <div className={stail.tajukBahagian}>
                            <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_pendek}`} />
                            <p>Pekerjaan</p>
                            <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_panjang}`} />
                        </div>
                        <KadPekerjaan senaraiPekerjaan={pekerjaanTertapis} />
                    </>
                    )
                }

                
           </section>
        </Layout>
    )
}

export default Home;
