import Head from 'next/head'
import stail from './layout.module.scss'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, tajuk, huraian, pautan, gambar }) => {
    return (
        <div className={stail.badan}>
            <Head>
                <title>{tajuk}</title>
                <link rel="icon" href="/faviconjombuat.svg" />
                {/* Primary Meta Tags */}
                <meta name="title" content={tajuk} />
                <meta name="description" content={huraian} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pautan} />
                <meta property="og:title" content={tajuk} />
                <meta property="og:description" content={huraian} />
                <meta property="og:image" content={gambar} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={pautan} />
                <meta property="twitter:title" content={tajuk} />
                <meta property="twitter:description" content={huraian} />
                <meta property="twitter:image" content={gambar} />
            </Head>

            <Header />

             <main className={stail.kandungan}>
                 {children}
             </main>

            <Footer />
        </div>
    )
}

export default Layout
