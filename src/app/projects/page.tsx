import { Metadata } from "next";
import Projects from "./project-components/Project";
import Navbar from "../(components)/Navbar";

export const metadata: Metadata = {
    title: "Sumeet Pevekar - Projects",
    metadataBase: new URL("https://sumeetpevekar.vercel.app"),
    description:
        "Explore my projects that showcase my skills as a full-stack developer. From web apps to innovative solutions, see my work come to life.",
    keywords:
        "Sumeet Pevekar, projects, web developer, full-stack developer, React, Next.js, JavaScript, portfolio projects",
    authors: [{ name: "Sumeet Pevekar" }],
    robots: "index, follow",

    openGraph: {
        title: "Sumeet Pevekar - Projects",
        description:
            "Explore the diverse projects by Sumeet Pevekar, demonstrating expertise in web development and full-stack technologies.",
        siteName: "Sumeet Pevekar - Portfolio",
        images: [
            {
                url: "/Project.svg",
                width: 1200,
                height: 630,
                alt: "Sumeet Pevekar - Projects",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    icons: {
        icon: "/Project.svg",
    },
};

const Page: React.FC = () => {
    return (
        <>
            <Navbar />
            <Projects />
        </>
    );
};

export default Page;
