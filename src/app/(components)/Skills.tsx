// Skills.tsx
import styles from "./styles.module.css";
import Image from "next/image";
import skills from "./SkillsArray";

const Skills: React.FC = () => {
    return (
        <div className={styles.containerSkills}>
            <div className={styles.titleSectionAbt}>
                <span className={styles.titleAbt}>MY</span>
                <span className={styles.space}></span>
                <span className={styles.subtitleAbt}>SKILLS</span>
            </div>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillBox}>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <Image
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    width={40}
                                    height={40}
                                    className={styles.icon}
                                />
                            </div>
                            <div className={styles.textContent}>
                                <h3 className={styles.skillName}>
                                    {skill.name}
                                </h3>
                                <p className={styles.category}>
                                    {skill.category}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
