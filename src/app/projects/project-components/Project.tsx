import styles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";
import projects from "./projects";

const Projects: React.FC = () => {
    return (
        <div className={styles.parentContainer}>
            <div className={styles.titleSection}>
                <span className={styles.subtitle}>RECENT</span>
                <span className={styles.title}>PROJECTS</span>
                <span className={styles.space}></span>
            </div>

            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={styles.projectCard}
                        style={{
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectName}>
                                {project.name}
                            </h3>
                            <p className={styles.projectDescription}>
                                {project.description}
                            </p>
                            <div className={styles.projectLinks}>
                                {project.sourceCode && (
                                    <Link
                                        href={project.sourceCode}
                                        target="_blank"
                                        className={styles.projectLink}
                                    >
                                        <Image
                                            src="/icons/github.svg"
                                            alt="GitHub"
                                            width={24}
                                            height={24}
                                        />
                                        <span>Code</span>
                                    </Link>
                                )}
                                {project.url && (
                                    <Link
                                        href={project.url}
                                        target="_blank"
                                        className={styles.projectLink}
                                    >
                                        <Image
                                            src="/link.svg"
                                            alt="Live Demo"
                                            width={24}
                                            height={24}
                                        />
                                        <span>Visit</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
