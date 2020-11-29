import { useState, useEffect } from 'react'
import Head from 'next/head'
import stail from '../styles/Home.module.scss'
import stailPekerjaan from '../styles/Jobs.module.scss'
import stailProduk from '../styles/Products.module.scss'
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/footer'

import KadAhli from '../components/home/kadAhli'

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
    <div className={stail.container}>
      <Head>
        <title>JomBuat - Komuniti</title>
        <link rel="icon" href="/faviconjombuat.svg" />
        {/* Primary Meta Tags */}
        <meta name="title" content="JomBuat" />
        <meta name="description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jombuat.club/" />
        <meta property="og:title" content="JomBuat - Komuniti" />
        <meta property="og:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />
        <meta property="og:image" content="https://jombuat.club/jombuatmeta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jjombuat.club/" />
        <meta property="twitter:title" content="JomBuat - Komuniti" />
        <meta property="twitter:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />
        <meta property="twitter:image" content="https://jombuat.club/jombuatmeta.png" />
      </Head>

      <Header />

      <section className={stail.body}>
        <div className={stail.highlight}>
          <h1>Bila-bila masa, di mana sahaja</h1>
          <h1 className={stail.highlight_gradient}>Belajar & Lancarkan!</h1>
          <h4>Cari pengasas, pembuat, pekerjaan & produk</h4>
        </div>

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
            placeholder="Cari siapa dalam komuniti kita!"
          />
        </div>

        {
          (kategori === 'semua' || kategori === 'ahli') && <KadAhli senaraiKomuniti={komunitiTertapis} />
        }

        {
          (kategori === 'semua' || kategori === 'produk') && <ul className={`${stail.result} ${stailProduk.result}`}>
            {
                produkTertapis && produkTertapis.map(prod => (
                  <a href={prod.pautan} target="_blank" rel="noreferrer noopener">
                      <li className={stailProduk.product_card} key={prod.row_id}>
                          <p className={stailProduk.product_name}>{prod.nama}</p>
                      </li>
                  </a>
                ))
            }
          </ul>
        }

        {
          (kategori === 'semua' || kategori === 'pekerjaan') && <ul className={`${stail.result} ${stailProduk.result}`}>
            {
                pekerjaanTertapis && pekerjaanTertapis.map(job => {
                    if (job.status === 'FALSE') return (
                        <a href={job.pautan} target="_blank" rel="noreferrer noopener" key={job.row_id}>
                            <li className={stailProduk.job_card}>
                                <p className={stailProduk.job_company}>{job.syarikat}</p>
                                <p className={stailProduk.job_role}>{job.nama}</p>
                            </li>
                        </a>
                      )
                  })
              }
          </ul>
        }
      </section>

      <Footer />

    </div>
  )
}

export default Home;
