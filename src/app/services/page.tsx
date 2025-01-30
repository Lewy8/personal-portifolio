'use client'

import Navbar from "@/components/navigation/navbar";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {

    const { theme } = useTheme();

    const services = [
        {
            title: "Frontend Development",
            description: "Creating responsive and interactive web interfaces using modern technologies.",
            technologies: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
            icon: "front.png"
        },
        {
            title: "Mobile Application Development",
            description: "Building cross-platform mobile applications with modern frameworks.",
            technologies: ["Flutter", "Android", "iOS"],
            icon: "mobile.png"
        },
        {
            title: "Web Application Development",
            description: "Developing full-stack web applications with robust backend solutions.",
            technologies: ["React", "Next.js", "Laravel",],
            icon: "front.png"
        }
    ];


    return (
        <div className="items-center justify-items-center p-8 min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-12"
            >
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <div className="container mx-auto px-4 py-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold mb-4 
                        text-transparent bg-clip-text 
                        bg-gradient-to-r from-slate-600 to-purple-600 
                        dark:from-blue-400 dark:to-purple-400">
                                My Professional Services
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Transforming ideas into digital solutions with cutting-edge technology and creative expertise.
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2
                            }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {services.map((service, index) => (
                                <MagicCard
                                    key={index}
                                    className="cursor-pointer flex-col text-sm p-4 shadow-2xl"
                                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                                >
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={service.icon}
                                            alt='img'
                                            style={{ width: '24px', height: '24px' }}
                                            className="w-12 h-12 mr-4"
                                        />
                                        <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
                                    </div>

                                    <p className="text-gray-600 mb-4">{service.description}</p>

                                    <div className="mt-4">
                                        <h3 className="font-medium mb-2 text-gray-700">Technologies:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </MagicCard>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-center mt-16"
                        >
                            <h3 className="text-2xl font-bold mb-4 
                        text-transparent bg-clip-text 
                        bg-gradient-to-r from-slate-600 to-purple-600 
                        dark:from-blue-400 dark:to-purple-400">
                                Need a Custom Solution?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                                I specialize in creating tailored digital solutions that precisely meet your unique business requirements.
                            </p>

                            <Link href="/contact">
                                <button className="bg-gradient-to-r 
                                    from-slate-600 
                                    via-slate-800
                                    to-purple-900 
                                    text-white 
                                    px-6 
                                    py-3 
                                    rounded-tr-lg 
                                    rounded-bl-lg 
                                    shadow-[4px_4px_0px_0px_rgba(210,23,101,1)] 
                                    transition-all 
                                    duration-500 
                                    ease-in-out 
                                    hover:translate-x-[3px] 
                                    hover:shadow-none
                                    hover:from-slate-700 
                                    hover:via-slate-900 
                                    hover:to-purple-950 
                                    transform 
                                    hover:scale-105">
                                    <span className="whitespace-pre-wrap px-2 text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                        Contact Now
                                    </span>
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </main>
            </motion.div>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

            </footer>
        </div>
    );
}