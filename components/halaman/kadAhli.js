import stail from '../../styles/Halaman.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const KadAhli = ({ senaraiKomuniti = [] }) => (
    <ul className={stail.result}>
        {
            senaraiKomuniti.map(ahli => (
                // <a href={ahli.pautan} target="_blank" rel="noreferrer noopener" key={ahli.row_id}>
                //     <li className={stail.user_card}>
                //         <img className={stail.user_avatar} src={ahli.avatar} alt={ahli.nama} />
                //         <p className={stail.user_name}>{ahli.nama}</p>
                //         <p className={stail.user_designation}>{ahli.jawatan}</p>
                //         <p className={stail.user_organisation}>{ahli.organisasi}</p>
                //         <p className={stail.user_location}>{ahli.lokasi}</p>
                //     </li>
                // </a>
                ahli.sorok !== 'TRUE' && 
                    <li className={stail.user_card} key={ahli.nama}>
                        <Link href={ahli.pautan} key={ahli.row_id}>
                            <a target={ahli.pautan === "" ? "_self" : "_blank"} rel="noreferrer noopener">
                                <div className={stail.user_avatar}>
                                    <Image
                                        src={ahli.avatar}
                                        alt={ahli.nama}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                </div>
                                <p className={stail.user_name}>{ahli.nama}</p>
                                <p className={stail.user_designation}>{ahli.jawatan}</p>
                                <p className={stail.user_organisation}>{ahli.organisasi}</p>
                            </a>
                        </Link>
                        <button aria-label="Berhubung dengan media sosial" className={stail.user_hubung} data-visible={ahli.media_sosial !== ""} onClick={() => window.open(ahli.media_sosial, "_blank")}>Hubung</button>
                    </li>
            ))
        }
    </ul>
);

export default KadAhli
