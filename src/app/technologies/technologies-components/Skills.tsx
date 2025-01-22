import skills from "@/app/(components)/SkillsArray";
import Image from "next/image";
import styles from "../tech.module.css"

const Skills: React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default Skills;
