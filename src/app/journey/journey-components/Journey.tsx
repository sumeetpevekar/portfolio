import styles from "../journey.module.css";
import journey from "./journeyArray";

const Journey: React.FC = () => {
    return (
        <div className={styles.parentContainer}>
            <div className={styles.titleSection}>
                <span className={styles.subtitle}>MY</span>
                <span className={styles.title}>JOURNEY</span>
                <span className={styles.space}></span>
            </div>

            <div className={styles.timelineContainer}>
                <div className={styles.timelineLine}></div>
                {journey.map((item, index) => (
                    <div
                        key={index}
                        className={styles.timelineItem}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                        }}
                    >
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineHeader}>
                                <h3 className={styles.instituteName}>
                                    {item.name}
                                </h3>
                                <span className={styles.duration}>
                                    {item.duration}
                                </span>
                            </div>
                            <div className={styles.timelineDetails}>
                                <p className={styles.degree}>{item.degree}</p>
                                <p className={styles.percentage}>
                                    {item.percentage}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journey;
