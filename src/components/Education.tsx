"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Achievements</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                            <GraduationCap className="text-blue-600" />
                            Education
                        </h3>
                        <div className="space-y-8">
                            {portfolioData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 pb-8 last:pb-0"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                                    <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>{edu.duration}</span>
                                        <span className="font-semibold text-gray-700 dark:text-gray-300">Marks: {edu.marks}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements & Training */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                            <Award className="text-purple-600" />
                            Achievements & Training
                        </h3>

                        <div className="space-y-6">
                            {/* Achievements */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Awards</h4>
                                <ul className="space-y-3">
                                    {portfolioData.achievements.map((achievement, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                                        >
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                                            {achievement}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Training */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certifications & Training</h4>
                                <div className="space-y-4">
                                    {portfolioData.training.map((train, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 last:border-0 pb-2 last:pb-0"
                                        >
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">{train.name}</p>
                                                <p className="text-sm text-gray-500">{train.provider}</p>
                                            </div>
                                            <span className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                                                {train.marks}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
