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
                            Hi, I’m Pratyush Sharma, a passionate and dedicated
                            3rd-year Computer Science student at Kishinchand
                            Chellaram College, Mumbai. I specialize in
                            full-stack development with expertise in React,
                            Next.js, TypeScript, Node.js, Express, MongoDB,
                            PostgreSQL, Redis, and Docker. I have built several
                            web apps, I’m always eager to learn new
                            technologies, push boundaries in tech
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
