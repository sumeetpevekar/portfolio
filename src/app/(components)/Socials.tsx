import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const Socials: React.FC = () => {
    const socialLinks = [
        {
            id: 1,
            name: "GitHub",
            icon: "/icons/github.svg",
            href: "https://github.com/sumeetpevekar",
        },
        {
            id: 2,
            name: "LinkedIn",
            icon: "/icons/linkedin.svg",
            href: "https://www.linkedin.com/in/sumeetpevekar18",
        },
        {
            id: 3,
            name: "X (Twitter)",
            icon: "/icons/twitter.svg",
            href: "https://x.com/https://x.com/PevekarSumeet",
        },
        {
            id: 4,
            name: "Email",
            icon: "/icons/gmail.svg",
            href: "https://mail.google.com/mail/u/0/?fs=1&to=sumeetpevekar1810@gmail.com&su&body&tf=cm",
        },
        {
            id: 5,
            name: "Instagram",
            icon: "/icons/instagram.svg",
            href: "https://www.instagram.com/sumitttt___.18",
        },
        {
            id: 6,
            name: "WhatsApp",
            icon: "/icons/whatsapp.svg",
            href: "https://wa.me/9022592380",
        },
    ];

    return (
        <section className={styles.containerSocials}>
            <div className={styles.titleSectionAbt}>
                <span className={styles.titleAbt}>LET&apos;S</span>
                <span className={styles.space}></span>
                <span className={styles.subtitleAbt}>CONNECT</span>
            </div>
            <div className={styles.socialsContainer}>
                {socialLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <div className={styles.socialContent}>
                            <div className={styles.iconWrapper}>
                                <Image
                                    src={link.icon}
                                    alt={link.name}
                                    width={24}
                                    height={24}
                                    className={styles.iconSocial}
                                />
                            </div>
                            <span className={styles.socialName}>
                                {link.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Socials;
