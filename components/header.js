import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Header = () => (
    <header className={styles.header} data-trigger={false}>
        <div>
            {/* <h3 className={styles.brand}>JomCreate</h3> */}
            <img className={styles.brand} src='./Logo-JomBuat.svg' alt="JomBuat" />
            <ul>
                <li>
                    <Link href='/'>
                        <a>
                            Komuniti
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/jobs'>
                        <a>
                            Pekerjaan
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        <a>
                            Produk
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
)

export default Header
