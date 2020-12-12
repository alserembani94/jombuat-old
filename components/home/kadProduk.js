import stail from '../../styles/Halaman.module.scss'
import stailProduk from '../../styles/Produk.module.scss'

const KadProduk = ({ senaraiProduk = [] }) => (
    <ul className={`${stail.result} ${stailProduk.result}`}>
        {
            senaraiProduk && senaraiProduk.map(prod => (
                <li className={stailProduk.product_card} key={prod.row_id}>
                    <a href={prod.pautan} target="_blank" rel="noreferrer noopener">
                        <p className={stailProduk.product_name}>{prod.nama}</p>
                    </a>
                </li>
            ))
        }
    </ul>
);

export default KadProduk