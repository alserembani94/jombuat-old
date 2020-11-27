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
        <title>JomCreate! - Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={styles.body}>
        <input
          className={styles.search}
          type="text"
          value={search}
          onChange={({ currentTarget: { value } }) => setSearch(() => value)}
          placeholder="Find what job is available!"
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
