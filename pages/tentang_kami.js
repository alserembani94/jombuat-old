import {
    getPostData,
} from '../lib/contents.js'
import stail from '../styles/Halaman.module.scss'
import Layout from '../components/layout'

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
        <div style={stail.page_container}>
            <article>
                <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
            </article>
        </div>
    </Layout>
);

export default TentangKami