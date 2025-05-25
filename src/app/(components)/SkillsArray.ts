interface Skill {
    name: string;
    category: string;
    icon: string;
}


const skills: Skill[] = [
    { name: "Next.js", category: "Web Framework", icon: "/skills/nextjs.svg" },
    {
        name: "React",
        category: "Frontend Library",
        icon: "/skills/react.svg",
    },
    {
        name: "Express",
        category: "Backend Framework",
        icon: "/skills/express.svg",
    },
    { name: "Typescript", category: "Programming Language", icon: "/skills/typescript.svg" },
    {
        name: "JavaScript",
        category: "Programming Language",
        icon: "/skills/javascript.svg",
    },
    {
        name: "jQuery",
        category: "Programming Language",
        icon: "/skills/jquery.svg",
    },
    {
        name: "Node.js",
        category: "Runtime Environment",
        icon: "/skills/nodejs.svg",
    },
    {
        name: "PHP",
        category: "Server-Side Language",
        icon: "/skills/php.svg",
    },
    { name: "MongoDB", category: "Database", icon: "/skills/mongodb.svg" },
    { name: "MySQL", category: "Database", icon: "/skills/mysql.svg" },
    {
        name: "CodeIgniter",
        category: "Web Framework",
        icon: "/skills/codeigniter.svg",
    },
    {
        name: "Git & GitHub",
        category: "Version Control",
        icon: "/skills/git.svg",
    },
    {
        name: "Socket.IO",
        category: "Real-time Library",
        icon: "/skills/socketio.svg",
    },
    {
        name: "Bootstrap",
        category: "CSS Framework",
        icon: "/skills/bootstrap.svg",
    },
    {
        name: "Tailwind CSS",
        category: "CSS Framework",
        icon: "/skills/tailwind.svg",
    },
    {
        name: "OWASP",
        category: "Application Security",
        icon: "/skills/owasp.svg",
    },
];

export default skills
