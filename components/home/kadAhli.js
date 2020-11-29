import stail from '../../styles/Home.module.scss'

const KadAhli = ({ senaraiKomuniti = [] }) => (
    <ul className={stail.result}>
        {
            senaraiKomuniti.map(ahli => (
                <a href={ahli.pautan} target="_blank" rel="noreferrer noopener" key={ahli.row_id}>
                    <li className={stail.user_card}>
                        <img className={stail.user_avatar} src={ahli.avatar} alt={ahli.nama} />
                        <p className={stail.user_name}>{ahli.nama}</p>
                        <p className={stail.user_designation}>{ahli.jawatan}</p>
                        <p className={stail.user_organisation}>{ahli.organisasi}</p>
                        <p className={stail.user_location}>{ahli.lokasi}</p>
                    </li>
                </a>
            ))
        }
    </ul>
);

export default KadAhli
