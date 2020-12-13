import { useEffect } from 'react';
import {
    getPostData,
} from '../lib/contents.js'
import stail from '../styles/TentangKami.module.scss'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Image from 'next/image'
import KadTestimoni from '../components/tentang-kami/kadTestimoni'
import SertaiBuletin from '../components/sertaiBuletin'

export const getStaticProps = async() => {
    const pageData = await getPostData('tentang_kami');
    const testimoni = await fetch(`https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=testimoni`).then(res => res.json());
    return {
        props: {
            pageData,
            testimoni: testimoni.data
        }
    }
}

const TentangKami = ({ pageData, testimoni }) => {
    const dikuasakan = () => {
        const gambar = [];
        const pautan = [];
        Object.entries(pageData).forEach(([dataKey, dataValue]) => {
            dataKey.startsWith('dikuasakan_gambar') && gambar.push(dataValue);
            dataKey.startsWith('dikuasakan_pautan') && pautan.push(dataValue);
        });

        const senaraiKuasa = [];
        gambar.forEach((img, index) => senaraiKuasa.push({ gambar: img, pautan: pautan[index] }));

        return senaraiKuasa;
    }

    return (
        <Layout
            tajuk="JomBuat - Tentang Kami"
            huraian="Di sebalik kejayaan web ini, berdirinya semua komuniti di serantau ASEAN yang terdiri daripada pembangun, pembina, pereka cipta, penginsprasi."
            gambar="https://jombuat.club/jombuatmeta.png"
            pautan="https://jombuat.club"
        >
            <Banner />
            <div className={stail.page_container}>
                <div className={stail.page_pembangun}>
                    <div className={stail.pembangun}>
                        <div className={stail.pembangun_gambar}>
                            <Image
                                src={pageData.gambar1}
                                alt={pageData.nama1}
                                width={200}
                                height={200}
                            />
                        </div>
                        <p className={stail.pembangun_nama}>{pageData.nama1}</p>
                        <p className={stail.pembangun_kendali}>{pageData.kendali1}</p>
                    </div>
                    <div className={stail.pembangun}>
                        <div className={stail.pembangun_gambar}>
                            <Image
                                src={pageData.gambar2}
                                alt={pageData.nama2}
                                width={200}
                                height={200}
                            />
                        </div>
                        <p className={stail.pembangun_nama}>{pageData.nama2}</p>
                        <p className={stail.pembangun_kendali}>{pageData.kendali2}</p>
                    </div>
                </div>
                <article className={stail.page_huraian}>
                    <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
                </article>
            </div>

            <div className={stail.dikuasakan}>
                <p>Dikuasakan oleh:</p>
                <div className={stail.dikuasakan_senarai}>
                {
                    dikuasakan().map((kuasa) => (
                        <div className={stail.dikuasakan_gambar} key={kuasa.pautan}>
                            <a href={kuasa.pautan} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={kuasa.gambar}
                                    alt={kuasa.gambar}
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="center"
                                />
                            </a>
                        </div>
                    ))
                }
                </div>
            </div>

            { testimoni.length !== 0 && <KadTestimoni senaraiTestimoni={testimoni} /> }

            <SertaiBuletin />
        </Layout>
    );
};

export default TentangKami