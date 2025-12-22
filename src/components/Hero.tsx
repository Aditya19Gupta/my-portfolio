"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-black">
            {/* 3D Scene Background */}
            <Scene3D />

            {/* Glassmorphism Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/80 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl"
                >
                    <h2 className="text-base sm:text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 tracking-wide uppercase">
                        Hello, I'm
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
                        {portfolioData.personal.name}
                    </h1>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 sm:mb-8">
                        {portfolioData.personal.role}
                    </h3>
                    <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed font-light px-2">
                        {portfolioData.personal.summary}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            View Work <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.pdf"
                            download
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2 shadow-sm text-sm sm:text-base"
                        >
                            Download CV <Download size={18} className="sm:w-5 sm:h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
