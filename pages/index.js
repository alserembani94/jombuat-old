import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import jobStyles from '../styles/Jobs.module.css'
import productStyles from '../styles/Products.module.css'
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/footer'

const filterData = (dataArray, searchParam) => {
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
  const [community, setCommunity] = useState([]);
  const [filteredCommunity, setFilteredCommunity] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  
  const [search, setSearch] = useState('');

  // * Category section
  const categoryList = [
    { name: 'all', label: 'semua' },
    { name: 'members', label: 'ahli' },
    { name: 'jobs', label: 'kerja' },
    { name: 'products', label: 'produk' }];
  const [category, setCategory] = useState(categoryList[0].name);

  const handleCategory = (selectedCategory) => {
    setCategory(() => selectedCategory);
  };

  useEffect(() => {
    axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=komuniti').then(result => {
      setCommunity(() => result.data.data);
      setFilteredCommunity(() => result.data.data);
    });
    axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=produk').then(result => {
      setProducts(() => result.data.data);
      setFilteredProducts(() => result.data.data);
    });
    axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=pekerjaan').then(result => {
      setJobs(() => result.data.data);
      setFilteredJobs(() => result.data.data);
    });
  }, [])

  useEffect(() => {
    setFilteredCommunity(() => filterData(community, search));
    // setFilteredProducts(() => filterData(products, search));
    // setFilteredJobs(() => filterData(jobs, search));
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
        <meta property="og:image" content="https://jombuat.club/jombuatmeta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jjombuat.club/" />
        <meta property="twitter:title" content="JomBuat - Komuniti" />
        <meta property="twitter:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />
        <meta property="twitter:image" content="https://jombuat.club/jombuatmeta.png" />
      </Head>

      <Header />

      <section className={styles.body}>
        <div className={styles.highlight}>
          <h1>Bila-bila masa, di mana sahaja</h1>
          <h1 className={styles.highlight_gradient}>Belajar & Lancarkan!</h1>
          <h4>Cari pengasas, pembuat, pekerjaan & produk</h4>
        </div>

        <div className={styles.search_area}>
          <ul className={styles.search_filter}>
            {
              categoryList.map(cat => (
                <li key={cat.name} onClick={() => handleCategory(cat.name)} data-active={cat.name === category}>{cat.label}</li>
              ))
            }
          </ul>
          <input
            className={styles.search}
            type="text"
            value={search}
            onChange={({ currentTarget: { value } }) => setSearch(() => value)}
            placeholder="Cari siapa dalam komuniti kita!"
          />
        </div>

        {
          (category === 'all' || category === 'members') && <ul className={styles.result}>
            {filteredCommunity && filteredCommunity.map(user => (
              <a href={user.pautan} target="_blank" rel="noreferrer noopener" key={user.row_id}>
                <li className={styles.user_card}>
                  <img className={styles.user_avatar} src={user.avatar} alt={user.nama} />
                  <p className={styles.user_name}>{user.nama}</p>
                  <p className={styles.user_designation}>{user.jawatan}</p>
                  <p className={styles.user_organisation}>{user.organisasi}</p>
                  <p className={styles.user_location}>{user.lokasi}</p>
                </li>
              </a>
            ))}
          </ul>
        }

        {
          (category === 'all' || category === 'products') && <ul className={`${styles.result} ${productStyles.result}`}>
            {
                filteredProducts && filteredProducts.map(prod => (
                  <a href={prod.pautan} target="_blank" rel="noreferrer noopener">
                      <li className={productStyles.product_card} key={prod.row_id}>
                          <p className={productStyles.product_name}>{prod.nama}</p>
                      </li>
                  </a>
                ))
            }
          </ul>
        }

        {
          (category === 'all' || category === 'jobs') && <ul className={`${styles.result} ${jobStyles.result}`}>
            {
                filteredJobs && filteredJobs.map(job => {
                    if (job.status === 'FALSE') return (
                        <a href={job.pautan} target="_blank" rel="noreferrer noopener" key={job.row_id}>
                            <li className={jobStyles.job_card}>
                                <p className={jobStyles.job_company}>{job.syarikat}</p>
                                <p className={jobStyles.job_role}>{job.nama}</p>
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
