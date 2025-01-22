import { Metadata } from "next";
import Projects from "./project-components/Project";
import Navbar from "../(components)/Navbar";

export const metadata: Metadata = {
    title: "Pratyush Sharma - Projects",
    metadataBase: new URL("https://pratyush2374.vercel.app"),
    description:
        "Explore my projects that showcase my skills as a full-stack developer. From web apps to innovative solutions, see my work come to life.",
    keywords:
        "Pratyush Sharma, projects, web developer, full-stack developer, React, Next.js, JavaScript, portfolio projects",
    authors: [{ name: "Pratyush Sharma" }],
    robots: "index, follow",

    openGraph: {
        title: "Pratyush Sharma - Projects",
        description:
            "Explore the diverse projects by Pratyush Sharma, demonstrating expertise in web development and full-stack technologies.",
        siteName: "Pratyush Sharma - Portfolio",
        images: [
            {
                url: "/Project.svg",
                width: 1200,
                height: 630,
                alt: "Pratyush Sharma - Projects",
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
