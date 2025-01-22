import { Metadata } from "next";
import Journey from "./journey-components/Journey";
import Navbar from "../(components)/Navbar";

export const metadata: Metadata = {
    title: "Pratyush Sharma - My Journey",
    metadataBase: new URL("https://pratyush2374.vercel.app"),
    description:
        "Discover my journey as a developer, from my academic path to the projects and skills that shape my professional career.",
    keywords:
        "Pratyush Sharma, journey, developer career, full-stack developer, personal growth, web development, React, Next.js, portfolio",
    authors: [{ name: "Pratyush Sharma" }],
    robots: "index, follow",

    openGraph: {
        title: "Pratyush Sharma - My Journey",
        description:
            "Explore the journey of Pratyush Sharma, highlighting key moments in my development as a web and full-stack developer.",
        siteName: "Pratyush Sharma - Portfolio",
        images: [
            {
                url: "/Experience.svg",
                width: 1200,
                height: 630,
                alt: "Pratyush Sharma - My Journey",
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
