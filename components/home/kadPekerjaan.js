import stail from '../../styles/Home.module.scss'

const KadAhli = ({ senaraiPekerjaan = [] }) => (
    <ul className={`${stail.result} ${stailProduk.result}`}>
        {
            senaraiProduk && senaraiProduk.map(prod => (
                <a href={prod.pautan} target="_blank" rel="noreferrer noopener">
                    <li className={stailProduk.product_card} key={prod.row_id}>
                        <p className={stailProduk.product_name}>{prod.nama}</p>
                    </li>
                </a>
            ))
        }
    </ul>
);

export default KadAhli
