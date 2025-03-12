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
                        I have worked on diverse projects showcasing my web development and backend skills. Blog Website with Admin Panel, built with React.js and Node.js, provides a secure content management system with CRUD operations and authentication. Call Log - CRM enables efficient call tracking and database management for 50+ employees using CodeIgniter and SQL. SALASAR AUCTION Landing Page, developed using a theme, features improved SEO for better visibility. Myntra Functional Clone replicates a seamless shopping experience with Redux Toolkit. Additionally, I have built a real-time chat application using Socket.io, a Netflix static homepage, and a Marksheet Generator with downloadable PDFs. Other projects include a Corona Virus Map with Mapbox, Simple Social Media, Todo App, and Calculator.
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
