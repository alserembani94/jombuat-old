import stail from './Testimoni.module.scss'

const KadTestimoni = ({ senaraiTestimoni = [] }) => (
    <ul className={stail.senarai}>
        {
            senaraiTestimoni.map((testimoni, indeks) => (
                <li className={stail.kad} key={indeks}>
                    "{testimoni.huraian}" - {testimoni.nama}
                </li>
            ))
        }
    </ul>
);

export default KadTestimoni
