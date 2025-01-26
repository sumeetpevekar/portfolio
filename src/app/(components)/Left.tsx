import Image from "next/image";
import styles from "./styles.module.css";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";

const Left: React.FC = () => {
    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open("https://mail.google.com/mail/u/0/?fs=1&to=sumeetpevekar1810@gmail.com&su&body&tf=cm", "_blank");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <div className={styles.profileImage}>
                        <Image
                            src="/me.jpg"
                            alt="Profile"
                            width={1000}
                            height={1000}
                            priority
                            quality={100}
                            className={styles.profileImage}
                        />
                    </div>
                </div>

                <h1 className={styles.name}>Sumeet Pevekar</h1>

                <p className={styles.description}>
                    Turning ideas into scalable, efficient code solutions.
                </p>

                <div>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className={styles.resumeLink}
                    >
                        <h2>Resume</h2>
                        <LuExternalLink />
                    </Link>
                </div>

                <div className={styles.emailContainer}>
                    <p
                        className={styles.descriptionSmall}
                        onClick={handleEmailClick}
                    >
                        <span>
                            <HiOutlineMail />
                        </span>
                        sumeetpevekar1810@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Left;
