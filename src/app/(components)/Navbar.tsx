import Image from "next/image";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
    const navItems = [
        { href: "/", icon: "/Home.svg", alt: "Home", tooltip: "Home" },
        {
            href: "/projects",
            icon: "/Project.svg",
            alt: "Projects",
            tooltip: "Projects",
        },
        {
            href: "/journey",
            icon: "/Experience.svg",
            alt: "Journey",
            tooltip: "Journey",
        },
        {
            href: "/technologies",
            icon: "/Tools.svg",
            alt: "Tools",
            tooltip: "Technologies",
        },
        {
            href: "/contact",
            icon: "/contact.svg",
            alt: "Contact",
            tooltip: "Contact",
        },
    ];

    return (
        <TooltipProvider delayDuration={0}>
            <nav className="w-full max-w-xl mx-auto px-4">
                <div className="flex items-center justify-around bg-[#1c1a19] backdrop-blur-sm px-4 sm:px-8 py-2 rounded-[15px] mt-2">
                    {navItems.map((item) => (
                        <Tooltip key={item.alt}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className="hover:bg-[#2e2e2e] p-2 rounded-full transition-colors"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                        width={24}
                                        height={24}
                                        className="w-6 h-6"
                                    />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.tooltip}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </nav>
        </TooltipProvider>
    );
};

export default Navbar;