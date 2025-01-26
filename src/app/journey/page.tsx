import { Metadata } from "next";
import Journey from "./journey-components/Journey";
import Navbar from "../(components)/Navbar";

export const metadata: Metadata = {
    title: "Sumeet Pevekar - My Journey",
    metadataBase: new URL("https://sumeetpevekar.vercel.app"),
    description:
        "Discover my journey as a developer, from my academic path to the projects and skills that shape my professional career.",
    keywords:
        "Sumeet Pevekar, journey, developer career, full-stack developer, personal growth, web development, React, Next.js, portfolio",
    authors: [{ name: "Sumeet Pevekar" }],
    robots: "index, follow",

    openGraph: {
        title: "Sumeet Pevekar - My Journey",
        description:
            "Explore the journey of Sumeet Pevekar, highlighting key moments in my development as a web and full-stack developer.",
        siteName: "Sumeet Pevekar - Portfolio",
        images: [
            {
                url: "/Experience.svg",
                width: 1200,
                height: 630,
                alt: "Sumeet Pevekar - My Journey",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    icons: {
        icon: "/Experience.svg",
    },
};

const Page: React.FC = () => {
    return (
        <>
            <Navbar />
            <Journey />
        </>
    );
};

export default Page;
