import styles from "../tech.module.css";

const TechHeading: React.FC = () => {
    return (
        <>
            <div className={styles.titleSection}>
                <span className={styles.subtitle}>TOOLS</span>
                <span className={styles.subtitle}>&</span>
                <span className={styles.title}>TECH</span>
                <span className={styles.space}></span>
            </div>
            <div className={styles.description}>
                <p>
                    Explore my diverse skill set, featuring cutting-edge tools
                    and technologies for modern development. From frontend
                    frameworks like React and Next.js to backend solutions with
                    Express and Node.js, I excel in creating scalable web
                    applications. My expertise includes databases like MongoDB,
                    Redis, and MySQL, along with tools like Docker, Prisma, and
                    Git for seamless development and deployment workflows.
                </p>
            </div>
        </>
    );
};

export default TechHeading;
