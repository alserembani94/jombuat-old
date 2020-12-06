import { useState, useEffect } from 'react'
import stail from '../styles/Halaman.module.scss'
import axios from 'axios'
import Layout from '../components/layout'

import KadAhli from '../components/home/kadAhli'
import KadPekerjaan from '../components/home/kadPekerjaan'
import KadProduk from '../components/home/kadProduk'
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

const Home = () => {
    const [komuniti, setKomuniti] = useState([]);
    const [komunitiTertapis, setKomunitiTertapis] = useState([]);
    const [produk, setProduk] = useState([]);
    const [produkTertapis, setProdukTertapis] = useState([]);
    const [pekerjaan, setPekerjaan] = useState([]);
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
        axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=komuniti').then(hasil => {
            setKomuniti(() => hasil.data.data);
            setKomunitiTertapis(() => hasil.data.data);
        });
        axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=produk').then(hasil => {
            setProduk(() => hasil.data.data);
            setProdukTertapis(() => hasil.data.data);
        });
        axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=pekerjaan').then(hasil => {
            setPekerjaan(() => hasil.data.data);
            setPekerjaanTertapis(() => hasil.data.data);
        });
    }, [])

    useEffect(() => {
        setKomunitiTertapis(() => tapisData(komuniti, carian));
        setProdukTertapis(() => tapisData(produk, carian));
        setPekerjaanTertapis(() => tapisData(pekerjaan, carian));
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
                        className={stail.search}
                        type="text"
                        value={carian}
                        onChange={({ currentTarget: { value } }) => setCarian(() => value)}
                        placeholder="Anda cari, dan kami akan senaraikan untuk anda"
                    />
                </div>

                {/* Penghasilan Komponen Kad Ahli */}
                { (kategori === 'semua' || kategori === 'ahli') && <KadAhli senaraiKomuniti={komunitiTertapis} /> }

                {/* Penghasilan Komponen Kad Produk */}
                { (kategori === 'semua' || kategori === 'produk') && <KadProduk senaraiProduk={produkTertapis} /> }

                {/* Penghasilan Komponen Kad Pekerjaan */}
                { (kategori === 'semua' || kategori === 'pekerjaan') && <KadPekerjaan senaraiPekerjaan={pekerjaanTertapis} /> }

                
           </section>
        </Layout>
    )
}

export default Home;
