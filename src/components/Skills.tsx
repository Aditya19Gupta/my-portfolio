"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";


export const skillIcon = {
    MongoDB: "<a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' width='80' height='80'/></a>",
    Express: "<a href='https://expressjs.com' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' width='80' height='80'/></a>",
    "React.js": "<a href='https://reactjs.org/' target='_blank' rel='noreferrer'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' width='80' height='80'/></a>",
    NodeJS: "<a href='https://nodejs.org' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' width='80' height='80'/></a>",
    "Next.js": "<a href='https://nextjs.org/' target='_blank' rel='noreferrer'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' width='80' height='80'/></a>",
    Github: "<a href='https://git-scm.com/' target='_blank' rel='noreferrer'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' width='80' height='80'/></a>",
    HTML: "<a href='https://www.w3.org/html/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' width='80' height='80'/></a>",
    CSS: "<a href='https://www.w3schools.com/css/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' width='80' height='80'/></a>",
    JavaScript: "<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' width='80' height='80'/></a>",
    Bootstrap: "<a href='https://getbootstrap.com' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' width='80' height='80'/></a>",
    TailwindCSS: "<a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'><img src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' width='80' height='80'/></a>",
    "C++": "<a href='https://www.cplusplus.com/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' width='80' height='80'/></a>",
    Firebase: "<a href='https://firebase.google.com/' target='_blank' rel='noreferrer'><img src='https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' width='80' height='80'/></a>",
    Java: "<a href='https://www.java.com' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' width='80' height='80'/></a>",
    MySQL: "<a href='https://www.mysql.com/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' width='80' height='80'/></a>",
    Postman: "<a href='https://postman.com' target='_blank' rel='noreferrer'><img src='https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' width='80' height='80'/></a>",
    Python: "<a href='https://www.python.org' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' width='80' height='80'/></a>",
    Redux: "<a href='https://redux.js.org' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' width='80' height='80'/></a>",
    Hibernate: "<a href='https://hibernate.org/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-original.svg' width='80' height='80'/></a>",
    SpringMVC: "<a href='https://spring.io/projects/spring-framework' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' width='80' height='80'/></a>",
    SpringBoot: "<a href='https://spring.io/projects/spring-boot' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg' width='80' height='80'/></a>",
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

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {/* Languages */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-md shadow-md dark:bg-neutral-950/80 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >

                        <div className="flex flex-wrap gap-3">
                            {portfolioData.skills.map((skill, index) => {
                                const htmlString = skillIcon[skill as keyof typeof skillIcon];
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(htmlString, "text/html");
                                const anchor = doc.querySelector('a');
                                const img = doc.querySelector('img');

                                if (!anchor || !img) {
                                    return null; // Or handle error
                                }

                                const href = anchor.getAttribute('href');
                                const src = img.getAttribute('src');
                                const alt = img.getAttribute('alt') || skill; // Use skill name as alt if not present

                                return (
                                    <motion.div
                                        key={index}
                                        variants={item}
                                        className="rounded-lg cursor-default flex flex-col items-center p-2"
                                    >   <div className="bg-black rounded-full p-2 border border-gray-200"><a href={href || '#'} target='_blank' rel='noreferrer'>
                                        <img src={src || ''} alt={alt} className="rounded-full object-fit" width='80' height='80' />
                                    </a></div>

                                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap">{skill}</p>
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


// <p align="left">
// <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></a>
// <a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a>
// <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
// <a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a>
// <a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/></a>
// <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
// <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a>
// <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a>
// <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
// <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/></a>
// <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/></a>
// <a href="https://www.cplusplus.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/></a>
// <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/></a>
// <a href="https://www.java.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/></a>
// <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/></a>
// <a href="https://postman.com" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/></a>
// <a href="https://www.python.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>
// <a href="https://redux.js.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/></a>
// </p>
