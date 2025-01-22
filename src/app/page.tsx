import { Metadata } from "next";
import LandingPage from "./(components)/LandingPage";

export const metadata: Metadata = {
    title: "Pratyush Sharma - Portfolio",
    metadataBase: new URL("https://pratyush2374.vercel.app"),
    description:
        "Welcome to my portfolio. Explore my projects, skills, and achievements as a full-stack developer.",
    keywords:
        "Pratyush Sharma, portfolio, web developer, full-stack developer, React, Next.js, JavaScript, projects",
    authors: [{ name: "Pratyush Sharma" }],
    robots: "index, follow",

    openGraph: {
        title: "Pratyush Sharma - Portfolio",
        description:
            "Showcasing my skills, projects, and achievements as a passionate web developer.",
        siteName: "Pratyush Sharma - Portfolio",
        images: [
            {
                url: "/Home.svg",
                width: 1200,
                height: 630,
                alt: "Pratyush Sharma - Portfolio",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    icons: {
        icon: "/Home.svg",
    },
};

const Landing: React.FC = () => {
    return (
        <>
            <LandingPage />
        </>
    );
};

export default Landing;
