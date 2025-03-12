import styles from "./styles.module.css";

const Right: React.FC = () => {
    return (
        <div className={styles.rightContainer}>
            <div className={styles.titleSection}>
                <h1 className={styles.title}>FULLSTACK</h1>
                <h1 className={styles.subtitle}>DEVELOPER</h1>
            </div>

            <p className={styles.description}>
                Transforming ideas into fully functional, user-friendly web
                applications with a focus on performance and design.
            </p>

            <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                    <h2 className={styles.statNumber}>3+</h2>
                    <p className={styles.statLabel}>
                        YEARS OF
                        <br />
                        EXPERIENCE
                        <br />
                        IN DEV
                    </p>
                </div>

                <div className={styles.statItem}>
                    <h2 className={styles.statNumber}>30+</h2>
                    <p className={styles.statLabel}>
                        PROJECTS
                        <br />
                        COMPLETED
                    </p>
                </div>

                <div className={styles.statItem}>
                    <h2 className={styles.statNumber}>20+</h2>
                    <p className={styles.statLabel}>
                        TECHNOLOGIES
                        <br />
                        MASTERED
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Right;
