"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/80 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-5 sm:p-6 md:p-8">
                                <div className="flex justify-between items-start mb-3 sm:mb-4">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors flex-1">
                                        {project.name}
                                    </h3>
                                    <div className="flex gap-2 sm:gap-3 ml-2">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                                title="Live Demo"
                                            >
                                                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            title="GitHub Repository"
                                        >
                                            <Github size={18} className="sm:w-5 sm:h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="mb-4 sm:mb-6">
                                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-blue-600 rounded-full flex-shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-0.5 sm:py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
