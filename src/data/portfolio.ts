import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Aditya Gupta",
    role: "Software Engineer",
    email: "adityacse207@gmail.com",
    phone: "+91 9794369680",
    location: "Gajpur, Gorakhpur, UP, India 273413",
    github: "https://github.com/Aditya19Gupta",
    summary:
      "I am currently engaged in Java development, with expertise in Spring Boot and frontend technologies. I am seeking a position as a Java Developer to gain industry experience and further enhance my technical skills.",
  },
  skills: ["Java", "JavaScript", "Python", "SpringBoot", "SpringMVC", "Hibernate", "MySQL", "Github", "HTML", "CSS", "JS", "React.js", "Next.js", "TailwindCSS"],
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
    {
      name: "AI Video Generator",
      github: "https://github.com/Aditya19Gupta",
      live: "https://move37ventures.com/",
      techStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "AI/ML",
        "REST API",
        "JWT Authentication",
      ],
      description:
        "A full-stack MERN application that leverages AI to generate videos from text prompts. Users can create, edit, and manage AI-generated video content with an intuitive interface and real-time processing capabilities.",
      features: [
        "AI-Powered Video Generation",
        "User Authentication & Authorization",
        "Real-time Video Processing",
        "Video Management Dashboard",
        "RESTful API Architecture",
      ],
    },
    {
      name: "Video Editing Platform",
      github: "https://github.com/Aditya19Gupta",
      live: "https://frontend-video-editing-app.vercel.app/",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Video.js",
        "Canvas API",
        "Web APIs",
      ],
      description:
        "A modern frontend video editing platform that allows users to edit videos directly in the browser. Features include trimming, filters, transitions, text overlays, and real-time preview with a beautiful, responsive UI.",
      features: [
        "Browser-based Video Editing",
        "Real-time Preview",
        "Multiple Filters & Effects",
        "Text Overlay & Transitions",
        "Responsive Design",
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
