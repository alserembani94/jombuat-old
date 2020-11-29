import { useEffect } from 'react'
import Head from 'next/head'
import {
    getPostData,
} from '../lib/contents.js'
import Header from '../components/header'
import Footer from '../components/footer'
import stail from '../styles/Home.module.scss'

export const getStaticProps = async() => {
    const pageData = await getPostData('tentang_kami');
    return {
        props: {
            pageData,
        }
    }
}

const TentangKami = ({ pageData }) => {
    useEffect(() => {
        console.log(pageData);
    });

    return (
        <div className={stail.container}>
            <Head>
                <title>JomBuat - Komuniti</title>
                <link rel="icon" href="/faviconjombuat.svg" />
                {/* Primary Meta Tags */}
                <meta name="title" content="JomBuat - Tentang Kami" />
                <meta name="description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jombuat.club/" />
                <meta property="og:title" content="JomBuat - Tentang Kami" />
                <meta property="og:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />
                <meta property="og:image" content="https://jombuat.club/jombuatmeta.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://jjombuat.club/" />
                <meta property="twitter:title" content="JomBuat - Tentang Kami" />
                <meta property="twitter:description" content="Bila-bila masa, di mana sahaja, belajar dan lancarkan! Bersama komuniti kami!" />
                <meta property="twitter:image" content="https://jombuat.club/jombuatmeta.png" />
            </Head>

            <Header />

            <article>
                <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
            </article>

            <Footer />
        </div>
    );
};

export default TentangKami