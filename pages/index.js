import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SearchBox } from 'react-instantsearch-dom';

// export const getStaticProps = async() => {  
//   const projectUrl = 'https://api.sheety.co/f01718588e1a9fd13e5c0b18276cbaaa/jombuat';
//   const res = await fetch('https://api.sheety.co/f01718588e1a9fd13e5c0b18276cbaaa/jombuat/community');
//   const json = await res.json;
//   return { 
//     props: {
//       env: JSON.stringify(json)
//     }
//   };
// };
export const getServerSideProps = async(context) => {
  // const projectUrl = 'https://api.sheety.co/f01718588e1a9fd13e5c0b18276cbaaa/jombuat';
  let result;
  await fetch('https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=community').then(res => res.json).then(data => result = data);
  return { 
    props: {
      community: JSON.parse(JSON.stringify(result))
    }
  };
}

const Home = ({ community }) => {
  useEffect(() => {
    console.log(community);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home;
