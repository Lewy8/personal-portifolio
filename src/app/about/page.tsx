'use client'

import Navbar from "@/components/navigation/navbar";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaDatabase, FaGit } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
export default function About() {
    const skills = [
        {
            category: "Web Development",
            technologies: [
                "/HTML5.png",
                "/CSS3.png",
                "/JavaScript.png",
                "/React.png",
                "/Nextjs.png"
            ],
            icon: FaCode
        },
        {
            category: "Mobile Development",
            technologies: ["/flutter.png"],
            icon: FaMobileAlt
        },
        {
            category: "Backend Development",
            technologies: ["/Laravel.png", "/php.png"],
            icon: FaDatabase
        },
        {
            category: "Version Control",
            technologies: ["/Git.png", "/GitHub.png"],
            icon: FaGit
        }
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-16"
            >
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                            <Image
                                src="/lewy.png"
                                alt="Lewis Nhuguti"
                                width={256}
                                height={256}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* About Text */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4 
                            text-transparent bg-clip-text 
                            bg-gradient-to-r from-slate-600 to-purple-600 
                            dark:from-blue-400 dark:to-purple-400">
                            About Me
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I'm a dedicated mobile and web developer passionate about creating intuitive and user-friendly applications.
                            Graduated from the National Institute of Transport in 2022, I've gained valuable experience in crafting
                            innovative digital solutions. I'm excited to collaborate and bring your vision to life!
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
                                    Hire me
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-12 
                                        text-transparent bg-clip-text 
                                        bg-gradient-to-r from-blue-600 to-purple-600 
                                        dark:from-blue-400 dark:to-purple-400">
                        My Skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2
                                }}
                                className="bg-white dark:bg-gray-800 
                                                    shadow-lg rounded-xl 
                                                    p-6 
                                                    transform transition-all 
                                                    hover:scale-105 
                                                    hover:shadow-2xl"
                            >
                                <div className="flex items-center mb-4">
                                    <skill.icon
                                        className="text-3xl mr-4 
                                                        text-blue-600 dark:text-blue-400"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {skill.category}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
                                    {skill.technologies.map((tech, techIndex) => (
                                        <Image
                                            key={techIndex}
                                            src={tech}
                                            alt={`Tech ${techIndex}`}
                                            width={50}
                                            height={50}
                                            className="object-contain hover:scale-110 transition-transform justify-self-center"
                                        />
                                    ))}
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
    );
}