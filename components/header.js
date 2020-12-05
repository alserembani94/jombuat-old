import Link from 'next/link'
import styles from '../styles/Halaman.module.scss'
import { IconContext } from 'react-icons'
import { IoMenu } from 'react-icons/io5'

const Header = () => (
    <header className={styles.header} data-trigger={false}>
        <div className={styles.header_desktop}>
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
                            Iklan
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/tentang-kami'>
                        <a>
                            Tentang Kami
                        </a>
                    </Link>
                </li>
                <li className={styles.header_submit}>
                    <Link href='/'>
                        <a>
                            Serahkan
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={styles.header_tablet}>
            <Link href='/'>
                <a>
                    <img className={styles.brand} src='./Logo-JomBuat.svg' alt="JomBuat" />
                </a>
            </Link>
            <button>
                <IconContext.Provider value={{ className: "Icon" }}>
                    <IoMenu />
                </IconContext.Provider>
            </button>
        </div>
    </header>
)

export default Header
