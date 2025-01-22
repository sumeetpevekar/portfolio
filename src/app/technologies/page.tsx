import { Metadata } from "next";
import Navbar from "../(components)/Navbar";
import Skills from "./technologies-components/Skills";
import TechHeading from "./technologies-components/TechHeading";
import styles from "./tech.module.css";

export const metadata: Metadata = {
    title: "Pratyush Sharma - Tools & Technologies",
    metadataBase: new URL("https://pratyush2374.vercel.app"),
    description:
        "Discover the tools and technologies I use to build scalable and innovative web applications. Explore my expertise in frameworks, libraries, and programming languages.",
    keywords:
        "Pratyush Sharma, tools, technologies, portfolio, web developer, React, Next.js, JavaScript, MongoDB, TypeScript, Redis, Tailwind CSS, Node.js, full-stack development",
    authors: [{ name: "Pratyush Sharma" }],
    robots: "index, follow",

    openGraph: {
        title: "Tools & Technologies - Pratyush Sharma",
        description:
            "A comprehensive overview of the tools and technologies I master as a web developer. Dive into my skills and expertise.",
        siteName: "Pratyush Sharma - Portfolio",
        images: [
            {
                url: "/Tools.svg",
                width: 1200,
                height: 630,
                alt: "Tools and Technologies - Pratyush Sharma",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    icons: {
        icon: "/Tools.svg",
    },
};

const Page: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className={styles.parentContainer}>
                <TechHeading />
                <Skills />
            </div>
        </>
    );
};

export default Page;
