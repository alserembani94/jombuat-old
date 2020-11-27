import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Header = () => (
    <header className={styles.header} data-trigger={false}>
        <div>
            {/* <h3 className={styles.brand}>JomCreate</h3> */}
            <Link href='/'>
                <a>
                    <img className={styles.brand} src='./Logo-JomBuat.svg' alt="JomBuat" />
                </a>
            </Link>
            <ul>
                <li>
                    <Link href='/'>
                        <a>
                            Temu Ramah
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a>
                            Tentang Kami
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a>
                            Iklan
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
)

export default Header
