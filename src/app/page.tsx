import { Metadata } from "next";
import LandingPage from "./(components)/LandingPage";

export const metadata: Metadata = {
    title: "Sumeet Pevekar - Portfolio",
    metadataBase: new URL("https://sumeetpevekar.vercel.app"),
    description:
        "Welcome to my portfolio. Explore my projects, skills, and achievements as a full-stack developer.",
    keywords:
        "Sumeet Pevekar, portfolio, web developer, full-stack developer, React, Next.js, JavaScript, projects",
    authors: [{ name: "Sumeet Pevekar" }],
    robots: "index, follow",

    openGraph: {
        title: "Sumeet Pevekar - Portfolio",
        description:
            "Showcasing my skills, projects, and achievements as a passionate web developer.",
        siteName: "Sumeet Pevekar - Portfolio",
        images: [
            {
                url: "/Home.svg",
                width: 1200,
                height: 630,
                alt: "Sumeet Pevekar - Portfolio",
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
