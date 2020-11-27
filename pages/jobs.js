import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import jobStyles from '../styles/Jobs.module.css'
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/footer'


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=jobs').then(result => {
      setJobs(() => result.data.data);
      setFilteredJobs(() => result.data.data);
    });
  }, [])

  useEffect(() => {
    const filteredData = jobs.filter(job => {
      const splitName = job.Role.split(' ');
      let flag = false;
      splitName.forEach(word => {
        if(word.toLowerCase().startsWith(search.toLowerCase())) flag = true;
      })
      return flag;
    })
    setFilteredJobs(() => filteredData);
  }, [search])

  return (
    <div className={styles.container}>
      <Head>
        <title>JomBuat - Pekerjaan</title>
        <link rel="icon" href="/faviconjombuat.svg" />
        {/* Primary Meta Tags */}
        <meta name="title" content="JomBuat - Pekerjaan" />
        <meta name="description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Cari pekerjaan melalui komuniti kami!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jombuat.club/" />
        <meta property="og:title" content="JomBuat - Pekerjaan" />
        <meta property="og:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Cari pekerjaan melalui komuniti kami!" />
        <meta property="og:image" content="https://jombuat.club/jombuatmeta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jjombuat.club/" />
        <meta property="twitter:title" content="JomBuat - Pekerjaan" />
        <meta property="twitter:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Cari pekerjaan melalui komuniti kami!" />
        <meta property="twitter:image" content="https://jombuat.club/jombuatmeta.png" />
      </Head>

      <Header />

      <section className={styles.body}>
        <input
          className={styles.search}
          type="text"
          value={search}
          onChange={({ currentTarget: { value } }) => setSearch(() => value)}
          placeholder="Nak cari pekerjaan melalui komuniti?"
        />

        <ul className={`${styles.result} ${jobStyles.result}`}>
            {
                filteredJobs && filteredJobs.map(job => {
                    if (job.Status === 'FALSE') return (
                        <a href={job.Link} target="_blank" rel="noreferrer noopener" key={job.row_id}>
                            <li className={jobStyles.job_card}>
                                <p className={jobStyles.job_company}>{job.Company}</p>
                                <p className={jobStyles.job_role}>{job.Role}</p>
                            </li>
                        </a>
                    )
                })
            }
        </ul>
      </section>

      <Footer />

    </div>
  )
}

export default Jobs;
