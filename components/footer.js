import styles from '../styles/Home.module.css'

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

const Footer = () => (
    <footer className={styles.footer}>
        <div>
            <div className={styles.author}>
                Made with 💜 by&nbsp;
                <a href="https://fajarsiddiq.com" target="_blank" rel="noreferrer noopener">Fajar Siddiq</a>&nbsp;&&nbsp;
                <a href="https://atifaiman.dev" target="_blank" rel="noreferrer noopener">Atif Aiman</a>&nbsp;
            </div>
            <div className={styles.cta}>
                <ul>
                    {
                        callToAction.map(cta => (
                            <li>
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


