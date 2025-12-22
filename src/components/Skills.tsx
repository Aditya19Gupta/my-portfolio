"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";


export const skillIcon = {
    MongoDB: { href: 'https://www.mongodb.com/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
    Express: { href: 'https://expressjs.com', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
    "React.js": { href: 'https://reactjs.org/', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    NodeJS: { href: 'https://nodejs.org', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
    "Next.js": { href: 'https://nextjs.org/', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    Github: { href: 'https://git-scm.com/', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    HTML: { href: 'https://www.w3.org/html/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    CSS: { href: 'https://www.w3schools.com/css/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    JavaScript: { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    Bootstrap: { href: 'https://getbootstrap.com', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' },
    TailwindCSS: { href: 'https://tailwindcss.com/', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    "C++": { href: 'https://www.cplusplus.com/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    Firebase: { href: 'https://firebase.google.com/', src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    Java: { href: 'https://www.java.com', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    MySQL: { href: 'https://www.mysql.com/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    Postman: { href: 'https://postman.com', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    Python: { href: 'https://www.python.org', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    Redux: { href: 'https://redux.js.org', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
    Hibernate: { href: 'https://hibernate.org/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-original.svg' },
    SpringMVC: { href: 'https://spring.io/projects/spring-framework', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
    SpringBoot: { href: 'https://spring.io/projects/spring-boot', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg' },
};

interface Skill {
    name: string;
    provider: string;
    marks: string;
}

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    {/* Languages */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/80 p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >

                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                            {portfolioData.skills.map((skill, index) => {
                                const skillData = skillIcon[skill as keyof typeof skillIcon];

                                if (!skillData) {
                                    return null; // Skip if skill icon data not found
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        variants={item}
                                        className="rounded-lg cursor-default flex flex-col items-center p-2"
                                    >
                                        <div className="bg-black rounded-full p-1.5 sm:p-2 border border-gray-200">
                                            <a href={skillData.href} target='_blank' rel='noreferrer'>
                                                <img
                                                    src={skillData.src}
                                                    alt={skill}
                                                    className="rounded-full object-fit w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                                                />
                                            </a>
                                        </div>
                                        <p className="text-xs sm:text-sm mt-2 text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap">{skill}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}