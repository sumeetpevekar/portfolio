"use client";

import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";
import { Toaster } from "@/components/ui/toaster";
import Contact from "./Contact";

const LandingPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Socials />
            <Projects />
            <Contact />
            <Toaster />
        </>
    );
};

export default LandingPage;
