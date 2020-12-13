import stail from '../../styles/Halaman.module.scss'
import stailPekerjaan from '../../styles/Pekerjaan.module.scss'

const KadPekerjaan = ({ senaraiPekerjaan = [] }) => (
    <ul className={`${stail.result} ${stailPekerjaan.result}`}>
        {
            senaraiPekerjaan && senaraiPekerjaan.map(job => {
                if (job.status === 'FALSE') return (
                    <li className={stailPekerjaan.job_card} key={job.nama}>
                        <a href={job.pautan} target="_blank" rel="noreferrer noopener" key={job.row_id}>
                            <p className={stailPekerjaan.job_company}>{job.syarikat}</p>
                            <p className={stailPekerjaan.job_role}>{job.nama}</p>
                        </a>
                    </li>
                )
            })
        }
    </ul>
);

export default KadPekerjaan
