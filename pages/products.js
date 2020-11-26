import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import productStyles from '../styles/Products.module.css'
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/footer'


const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=products').then(result => {
      setProducts(() => result.data.data);
      console.log(result.data.data);
    });
  }, [])

  useEffect(() => {
    const filteredData = products.filter(prod => {
      const splitName = prod.Product.split(' ');
      let flag = false;
      splitName.forEach(word => {
        if(word.toLowerCase().startsWith(search.toLowerCase())) flag = true;
      })
      return flag;
    })
    setFilteredProducts(() => filteredData);
  }, [search])

  return (
    <div className={styles.container}>
      <Head>
        <title>JomCreate! - Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={styles.body}>
        <input
          className={styles.search}
          type="text"
          value={search}
          onChange={({ currentTarget: { value } }) => setSearch(() => value)}
          placeholder="Find what product is featured on JomLaunch 2020!"
        />

        <ul className={`${styles.result} ${productStyles.result}`}>
          {
              filteredProducts && filteredProducts.map(prod => (
                <a href={prod.Link} target="_blank" rel="noreferrer noopener">
                    <li className={productStyles.product_card} key={prod.row_id}>
                        <p className={productStyles.product_name}>{prod.Product}</p>
                    </li>
                </a>
              ))
          }
        </ul>
      </section>

      <Footer />

    </div>
  )
}

export default Products;
