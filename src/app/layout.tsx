import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Pratyush Sharma",
    description:
        "Welcome to my portfolio. Explore my projects, skills, and achievements as a full-stack developer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
