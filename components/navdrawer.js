import Link from 'next/link'
import Image from 'next/image'
import stail from './layout.module.scss'

const NavDrawer = () => {
    return (
        <ul className={stail.navdrawer}>
            <li>
                <Link href="/">
                    <a className={stail.navdrawer_butang}>
                        <div className={stail.navdrawer_ikon}>
                            <Image
                                src="/ikon/Icon-Jombuat.svg"
                                alt="Senarai"
                                width={30}
                                height={30}
                                className={stail.navdrawer_ikon}
                            />
                        </div>
                        Senarai
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={stail.navdrawer_butang}>
                        <div className={stail.navdrawer_ikon}>
                            <Image
                                src="/ikon/Icon-Chat.svg"
                                alt="Temu Ramah"
                                width={30}
                                height={30}
                                className={stail.navdrawer_ikon}
                            />
                        </div>
                        Temu Ramah
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={stail.navdrawer_butang}>
                        <div className={stail.navdrawer_ikon}>
                            <Image
                                src="/ikon/Icon-Contact.svg"
                                alt="Komuniti"
                                width={30}
                                height={30}
                                className={stail.navdrawer_ikon}
                            />
                        </div>
                        Komuniti
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={stail.navdrawer_butang}>
                        <div className={stail.navdrawer_ikon}>
                            <Image
                                src="/ikon/Icon-Mail.svg"
                                alt="Langgan"
                                width={30}
                                height={30}
                                className={stail.navdrawer_ikon}
                            />
                        </div>
                        Langgan
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default NavDrawer;