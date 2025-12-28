"use client";

import { motion } from "framer-motion";
import { Code, Palette } from "lucide-react";
import Image from "next/image";

export default function About() {
    const javaSkills = ["Java", "SpringBoot", "SpringMVC", "Hibernate", "MySQL", "JPA", "REST API"];
    const frontendSkills = ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "TailwindCSS", "Redux", "Node.js", "Express.js", "MongoDB", "PostGresSQL"];

    return (
        <section id="about" className="py-20 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    {/* Java Developer Slide */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/80 rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                <Image
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                                    alt="Java"
                                    width={48}
                                    height={48}
                                    className="-mt-3"
                                />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                                Java Developer
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I am currently engaged in Java development, with expertise in Spring Boot, Spring MVC, and Hibernate.
                            I specialize in building robust backend systems, RESTful APIs, and database management using MySQL.
                        </p>
                        <div className="mb-6">
                            <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3">Key Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                                {javaSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-blue-600 text-lg sm:text-xl mb-1">02+</h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-blue-600 text-lg sm:text-xl mb-1">03+</h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Java Projects</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Frontend Enthusiast Slide */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/80 rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                <Image
                                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                                    alt="React"
                                    width={48}
                                    height={48}
                                    className="-mt-3"
                                />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                                Full Stack(MERN) Enthusiast
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Passionate about creating beautiful, responsive, and high-performance user interfaces.
                            I work with modern frameworks like React.js, Next.js, Node.js, Express.js, focusing on creating seamless user experiences.
                        </p>
                        <div className="mb-6">
                            <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3">Key Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-purple-600 text-lg sm:text-xl mb-1">02+</h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-purple-600 text-lg sm:text-xl mb-1">05+</h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Frontend Projects</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
