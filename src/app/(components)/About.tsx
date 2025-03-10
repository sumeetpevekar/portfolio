import styles from "./styles.module.css";

const About: React.FC = () => {
    return (
        <>
            <div className={styles.parentContainer}>
                <div>
                    <div className={styles.titleSectionAbt}>
                        <span className={styles.titleAbt}>ABOUT</span>
                        <span className={styles.space}></span>
                        <span className={styles.subtitleAbt}>ME</span>
                    </div>

                    <div >
                        <p className={styles.descriptionAbt}>
                        Hi, I'm Sumeet Pevekar, a dedicated Full-Stack Developer with a passion for crafting robust and scalable web applications. With experience in building dynamic projects like auction platforms, CRMs, and e-commerce clones, I specialize in React.js, PHP, Node.js, MongoDB and SQL. From interactive user interfaces to secure back-end systems, I focus on delivering seamless and efficient solutions. Welcome to my portfolio—let's explore my journey in development together!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
