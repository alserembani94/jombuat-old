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
        <title>JomCreate! - Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={styles.body}>
        <input
          className={styles.search}
          type="text"
          value={search}
          onChange={({ currentTarget: { value } }) => setSearch(() => value)}
          placeholder="Find who is in the community!"
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
