import { Metadata } from "next";
import Navbar from "../(components)/Navbar";
import styles from "./contact.module.css";
import Contact from "../(components)/Contact";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "Contact - Pratyush Sharma",
    metadataBase: new URL("https://pratyush2374.vercel.app"),
    description:
        "Get in touch with Pratyush Sharma. Whether you have questions, collaboration ideas, or just want to say hi, feel free to drop a message.",
    keywords:
        "Pratyush Sharma, contact, portfolio, web developer, email, connect, collaboration, projects, inquiries",
    authors: [{ name: "Pratyush Sharma" }],
    robots: "index, follow",

    openGraph: {
        title: "Contact - Pratyush Sharma",
        description:
            "Reach out to Pratyush Sharma for collaborations, inquiries, or just a friendly chat. Let's connect!",
        siteName: "Pratyush Sharma - Portfolio",
        images: [
            {
                url: "/contact.svg",
                width: 1200,
                height: 630,
                alt: "Contact Pratyush Sharma",
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
