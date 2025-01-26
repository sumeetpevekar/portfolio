import { Metadata } from "next";
import Navbar from "../(components)/Navbar";
import styles from "./contact.module.css";
import Contact from "../(components)/Contact";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "Contact - Sumeet Pevekar",
    metadataBase: new URL("https://sumeetpevekar.vercel.app"),
    description:
        "Get in touch with Sumeet Pevekar. Whether you have questions, collaboration ideas, or just want to say hi, feel free to drop a message.",
    keywords:
        "Sumeet Pevekar, contact, portfolio, web developer, email, connect, collaboration, projects, inquiries",
    authors: [{ name: "Sumeet Pevekar" }],
    robots: "index, follow",

    openGraph: {
        title: "Contact - Sumeet Pevekar",
        description:
            "Reach out to Sumeet Pevekar for collaborations, inquiries, or just a friendly chat. Let's connect!",
        siteName: "Sumeet Pevekar - Portfolio",
        images: [
            {
                url: "/contact.svg",
                width: 1200,
                height: 630,
                alt: "Contact Sumeet Pevekar",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    icons: {
        icon: "/contact.svg",
    },
};

const Page: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className={styles.parentContainer}>
                <Contact />
            </div>
            <Toaster />
        </>
    );
};

export default Page;
