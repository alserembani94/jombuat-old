import stail from './SertaiBuletin.module.scss'

const SertaiBuletin = () => {
    return (
        <>
            <div className={stail.seksyen}>
                <p className={stail.tajuk}>Sertailah buletin kami</p>
                <p className={stail.subtajuk}>Untuk mendapatkan berita mutakhir terawal daripada orang lain!</p>
                <form className={stail.borang} autoComplete="on">
                    <input id="email" type="email" aria-label="email address" placeholder="Taipkan e-mel anda di sini ..." autofill="" inputMode="email" />
                    <button type="submit">Langgan</button>
                </form>
            </div>
        </>
    )
}

export default SertaiBuletin
