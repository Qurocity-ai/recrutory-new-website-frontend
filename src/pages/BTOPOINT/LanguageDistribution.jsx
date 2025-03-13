import mapBackground from '/assets/India Map.svg';
import styles from './LanguageDistribution.module.css';

const LanguageDistribution = () => {
    return (
        <div className={styles.container}>
            <div className={styles.decorativeSquares}></div>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                    Language vs Resource distribution across India
                </h2>

                <div className={styles.tableContainer}>
                    <div className={styles.table}>
                        <div className={styles.tableHeader}>
                            <span>Indic Languages</span>
                            <span>4LPA - 6LPA</span>
                        </div>
                        <div className={styles.row}><span>Tamil</span><span>2,300</span></div>
                        <div className={styles.row}><span>Telugu</span><span>1,800</span></div>
                        <div className={styles.row}><span>Kannada</span><span>2,500</span></div>
                        <div className={styles.row}><span>Malayalam</span><span>1,500</span></div>
                        <div className={styles.row}><span>Oriya</span><span>850</span></div>
                        <div className={styles.row}><span>Marathi</span><span>2,300</span></div>
                        <div className={styles.row}><span>Gujarati</span><span>1,500</span></div>
                    </div>

                    <div className={styles.table}>
                        <div className={styles.tableHeader}>
                            <span>FL Language</span>
                            <span>B2 - C2</span>
                        </div>
                        <div className={styles.row}><span>French</span><span>9,400</span></div>
                        <div className={styles.row}><span>German</span><span>7,500</span></div>
                        <div className={styles.row}><span>Spanish</span><span>5,100</span></div>
                        <div className={styles.row}><span>Russian</span><span>2,100</span></div>
                        <div className={styles.row}><span>Italian</span><span>2,700</span></div>
                        <div className={styles.row}><span>Dutch</span><span>120</span></div>
                        <div className={styles.row}><span>Portuguese</span><span>540</span></div>
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img src={mapBackground} alt="India Map" className={styles.mapImage} />
            </div>
            <div className={styles.decorativeSquares1}></div>
        </div>
    );
};

export default LanguageDistribution;
