"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative max-w-xs sm:max-w-sm mx-auto md:mx-0"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 relative z-10">
                            {/* Placeholder for profile image if available, otherwise using a gradient or pattern */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-gray-400">
                                <span className="text-4xl sm:text-5xl">AG</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border-2 border-blue-600 rounded-2xl z-0 hidden md:block"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                            Passionate Java Developer & Frontend Enthusiast
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                            {portfolioData.personal.summary}
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-blue-600 text-lg sm:text-xl mb-1">02+</h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-purple-600 text-lg sm:text-xl mb-1">05+</h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
