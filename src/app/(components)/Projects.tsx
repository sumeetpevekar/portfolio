import Link from "next/link";
import styles from "./styles.module.css";
import { LuExternalLink } from "react-icons/lu";

const Projects: React.FC = () => {
    return (
        <>
            <div className={styles.containerProjects}>
                <div>
                    <div className={styles.titleSectionAbt}>
                        <span className={styles.titleAbt}>MY</span>
                        <span className={styles.space}></span>
                        <span className={styles.subtitleAbt}>PROJECTS</span>
                    </div>

                    <div>
                        <p className={styles.descriptionAbt}>
                            I have worked on diverse projects showcasing my web
                            development and backend skills. PTAI, an AI-based
                            fitness app with Next.js, provides personalized
                            workout and nutrition plans. Shade Mail is an
                            anonymous messaging platform, while I also built a
                            backend system for video hosting with YouTube. Other
                            projects include Slinkit, a URL shortener, Expense
                            Calculator, Simple Social Media, Todo App,
                            Calculator, Netflix Landing Page Clone, Medicine
                            Donating Website, and College Merch Website for
                            online merchandise.
                        </p>
                    </div>

                    <div>
                        <Link href="/projects" className={styles.projectLink}>
                            <h2>View Projects</h2>
                            <LuExternalLink />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
