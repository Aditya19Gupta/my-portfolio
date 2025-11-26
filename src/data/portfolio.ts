import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Aditya Gupta",
    role: "Java Developer",
    email: "adityacse207@gmail.com",
    phone: "+91 9794369680",
    location: "Gajpur, Gorakhpur, UP, India 273413",
    github: "https://github.com/aditya03gupta",
    summary:
      "I am currently engaged in Java development, with expertise in Spring Boot and frontend technologies. I am seeking a position as a Java Developer to gain industry experience and further enhance my technical skills.",
  },
  skills: {
    languages: ["Java", "JavaScript", "Python"],
    technical: [
      "OOPS",
      "Java and DSA",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "MySQL",
      "Git and Github",
    ],
    frontend: ["HTML", "CSS", "JS", "React.js", "Next.js"],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Move37 Productions",
      location: "London, UK",
      duration: "May 2025 - Present",
      description: [
        "Built responsive, high-performance UIs using Next.js, React.js, and Tailwind CSS",
        "Developed reusable components and managed state with Redux Toolkit",
        "Integrated REST APIs for real-time data rendering and dashboard features",
        "Optimized performance with code splitting, lazy loading, and Next.js image optimization",
        "Collaborated with designers and backend engineers in an Agile team",
      ],
      techStack: ["Next.js", "React.js", "Tailwind CSS", "Shadcn", "REST API", "Redux"],
    },
    {
      role: "Java Developer Intern",
      company: "CSKA Automation",
      location: "Noida, India",
      duration: "Jan 2024 - Feb 2025",
      description: [
        "Developed RESTful APIs using Spring Boot for core business features",
        "Integrated backend services with frontend components for seamless data flow",
        "Worked on MySQL database design, queries, and performance tuning",
        "Participated in debugging, testing, and resolving application issues",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
      techStack: ["Java", "Spring Boot", "JPA", "Hibernate", "REST API", "MySQL"],
    },
  ],
  projects: [
    {
      name: "MedAI",
      github: "https://github.com/Aditya19Gupta/MedAI",
      techStack: [
        "Spring Boot",
        "Spring Security",
        "Java",
        "Python",
        "RestTemplate",
        "Machine Learning",
        "MySQL",
      ],
      description:
        "MedAI is an AI-driven web application offering predictive healthcare insights, allowing users to predict diseases such as diabetes and cancer. It features secure user authentication, online video consultations, and payment processing.",
      features: [
        "User Authentication & Secure Login",
        "REST API Integration with Python",
        "Disease Prediction",
        "Database Management with MySQL",
        "Full-Stack Development",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Dev Bhoomi Uttarakhand University, Dehradun",
      duration: "2021 - 2025",
      marks: "83.03%",
    },
    {
      degree: "Secondary Education (PCM)",
      institution: "GIC Gangabhogpur, Rhishikesh",
      duration: "2020 - 2021",
      marks: "89.8%",
    },
    {
      degree: "High School Education (PCM)",
      institution: "GIC Gangabhogpur, Rhishikesh",
      duration: "2018 - 2019",
      marks: "88.2%",
    },
  ],
  achievements: [
    "INSPIRE AWARD 2021 - UTTARAKHAND BOARD",
    "Hackathon 2023 Session - DBUU University Competition",
  ],
  training: [
    {
      name: "Core Java",
      provider: "Internshala",
      marks: "84.7%",
    },
    {
      name: "Java Spring Boot",
      provider: "Scaler",
      marks: "87%",
    },
  ],
};
