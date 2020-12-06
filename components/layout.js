import Head from 'next/head'
import stail from './layout.module.scss'
import Header from './header'
import Footer from './footer'
import NavDrawer from './navdrawer'

const Layout = ({ children, tajuk, huraian, pautan, gambar }) => {
    return (
        <div className={stail.badan}>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <title>{tajuk}</title>
                <link rel="icon" href="/faviconjombuat.svg" />

                {/* Primary Meta Tags */}
                <meta name="title" content={tajuk} />
                <meta name="description" content={huraian} />
                <meta name="keywords" content="Founder, Maker, Developer, Pengasas, Pembuat, Pembangun" />

                {/* <!-- Android  --> */}
                <meta name="theme-color" content="#4A8EED" />
                {/* <meta name="mobile-web-app-capable" content="yes" /> */}

                {/* <!-- iOS --> */}
                {/* <meta name="apple-mobile-web-app-title" content="Jombuat" /> */}
                {/* <meta name="apple-mobile-web-app-capable" content="yes" /> */}
                {/* <meta name="apple-mobile-web-app-status-bar-style" content="default" /> */}

                {/* <!-- Windows  --> */}
                {/* <meta name="msapplication-navbutton-color" content="#4A8EED" /> */}
                {/* <meta name="msapplication-TileColor" content="#4A8EED" /> */}
                {/* <meta name="msapplication-TileImage" content="ms-icon-144x144.png" /> */}
                {/* <meta name="msapplication-config" content="browserconfig.xml" /> */}

                {/* <!-- Pinned Sites  --> */}
                {/* <meta name="application-name" content="Jombuat" /> */}
                {/* <meta name="msapplication-tooltip" content="Bila-bila masa, di mana sahaja Belajar & Lancarkan!"> /</meta> */}
                {/* <meta name="msapplication-starturl" content="/" /> */}

                {/* <!-- Tap highlighting  --> */}
                {/* <meta name="msapplication-tap-highlight" content="no" /> */}

                {/* <!-- UC Mobile Browser  --> */}
                {/* <meta name="full-screen" content="yes" /> */}
                {/* <meta name="browsermode" content="application" /> */}

                {/* <!-- Fitscreen  --> */}
                {/* <meta name="viewport" content="uc-fitscreen=yes" /> */}

                {/* <!-- Layout mode --> */}
                {/* <meta name="layoutmode" content="standard" /> */}

                {/* <!-- imagemode - show image even in text only mode  --> */}
                {/* <meta name="imagemode" content="force" /> */}

                {/* <!-- Orientation  --> */}
                {/* <meta name="screen-orientation" content="portrait" /> */}

                {/* Icons */}
                <link rel="manifest" href="/manifest.json" />
                <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>

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

            <Footer display="desktop" />
            <NavDrawer />
        </div>
    )
}

export default Layout
