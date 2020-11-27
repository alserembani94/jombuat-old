import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/footer'


const Home = () => {
  const [community, setCommunity] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCommunity, setFilteredCommunity] = useState([]);

  useEffect(() => {
    axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=community').then(result => {
      setCommunity(() => result.data.data);
      setFilteredCommunity(() => result.data.data);
    });
  }, [])

  useEffect(() => {
    const filteredData = community.filter(comm => {
      const splitName = comm.Name.split(' ');
      let flag = false;
      splitName.forEach(word => {
        if(word.toLowerCase().startsWith(search.toLowerCase())) flag = true;
      })
      return flag;
    })
    setFilteredCommunity(() => filteredData);
  }, [search])

  return (
    <div className={styles.container}>
      <Head>
        <title>JomBuat - Komuniti</title>
        <link rel="icon" href="/faviconjombuat.svg" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Primary Meta Tags */}
        <meta name="title" content="JomBuat - Komuniti" />
        <meta name="description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jombuat.club/" />
        <meta property="og:title" content="JomBuat - Komuniti" />
        <meta property="og:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />
        <meta property="og:image" content="./Logo-JomBuat.svg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jjombuat.club/" />
        <meta property="twitter:title" content="JomBuat - Komuniti" />
        <meta property="twitter:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />
        <meta property="twitter:image" content="./Logo-JomBuat.svg" />
      </Head>

      <Header />

      <section className={styles.body}>
        <div className={styles.highlight}>
          <h1>Bila-bila masa, di mana sahaja</h1>
          <h1 className={styles.highlight_gradient}>Belajar & Lancarkan!</h1>
          <h4>Cari pengasas, pembuat, pekerjaan & produk</h4>
        </div>

        <input
          className={styles.search}
          type="text"
          value={search}
          onChange={({ currentTarget: { value } }) => setSearch(() => value)}
          placeholder="Cari siapa dalam komuniti kita!"
        />

        <ul className={styles.result}>
          {filteredCommunity && filteredCommunity.map(user => (
            <a href={user.Link} target="_blank" rel="noreferrer noopener" key={user.row_id}>
              <li className={styles.user_card}>
                <img className={styles.user_avatar} src={user.Avatar} alt={user.Name} />
                <p className={styles.user_name}>{user.Name}</p>
                <p className={styles.user_designation}>{user.Designation}</p>
                <p className={styles.user_organisation}>{user.Organization}</p>
                <p className={styles.user_location}>{user.Location}</p>
              </li>
            </a>
          ))}
        </ul>
      </section>

      <Footer />

    </div>
  )
}

export default Home;
