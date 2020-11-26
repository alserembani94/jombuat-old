import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Header = () => (
    <header className={styles.header} data-trigger={false}>
        <div>
            <h3 className={styles.brand}>JomCreate</h3>
            <ul>
                <li>
                    <Link href='/'>
                        <a>
                            Community
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/jobs'>
                        <a>
                            Jobs
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        <a>
                            Products
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
)

export default Header
