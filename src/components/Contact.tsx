"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm text-blue-600">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">{portfolioData.personal.email}</p>
                                </div>
                            </a>

                            <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm text-blue-600">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">{portfolioData.personal.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm text-blue-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">{portfolioData.personal.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a
                                href={portfolioData.personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            {/* Add LinkedIn if available */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/80 p-8 rounded-2xl shadow-lg"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
