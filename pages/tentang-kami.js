import {
    getPostData,
} from '../lib/contents.js'
import stail from '../styles/TentangKami.module.scss'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Image from 'next/image'

export const getStaticProps = async() => {
    const pageData = await getPostData('tentang_kami');
    return {
        props: {
            pageData,
        }
    }
}

const TentangKami = ({ pageData }) => (
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
    </Layout>
);

export default TentangKami