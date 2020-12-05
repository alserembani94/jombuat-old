import styles from '../styles/Halaman.module.scss'

const callToAction = [
    {
        name: 'figma',
        icon: './Icon-Figma.svg',
        url: 'https://www.figma.com/file/m5Rjm7spRSJ9Kwe2kbJkTG/Jombuat',
    },
    {
        name: 'github',
        icon: './Icon-Github.svg',
        url: 'https://github.com/alserembani94/jomlaunch',
    },
    {
        name: 'telegram',
        icon: './Icon-Telegram.svg',
        url: 'https://t.me/jombuatclub',
    },
];

const Footer = ({ display = "all" }) => (
    <footer className={styles.footer} data-visible={display}>
        <div>
            <div className={styles.author}>
                Dibuat oleh&nbsp;
                <a href="https://fajarsiddiq.com" target="_blank" rel="noreferrer noopener">🇸🇬 Fajar Siddiq</a>&nbsp;&&nbsp;
                <a href="https://atifaiman.dev" target="_blank" rel="noreferrer noopener">🇲🇾 Atif Aiman</a>&nbsp;
            </div>
            <div className={styles.cta}>
                <ul>
                    {
                        callToAction.map(cta => (
                            <li key={cta.name}>
                                <a className={styles.cta_link}  href={cta.url} target="_blank" rel="noreferrer noopener">
                                    <img className={styles.cta_icon}  src={cta.icon} alt={cta.name}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer


