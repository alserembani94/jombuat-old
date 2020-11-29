import stail from '../../styles/Halaman.module.scss'
import stailProduk from '../../styles/Produk.module.scss'

const KadProduk = ({ senaraiProduk = [] }) => (
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

export default KadProduk