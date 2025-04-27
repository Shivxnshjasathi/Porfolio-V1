import LibraryImage from "@/assets/library.png";
import SkygazeImage from "@/assets/skygaze.png";
import TodoImage from "@/assets/todo.png";
import { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "Shivansh Jasathi",
    AGE: "21",
    PRONOUN: "he/him",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME:
      "https://drive.google.com/file/d/18KgbZ4eRa9H-DWXiCTxw2GDaWxK5LqUu/view?usp=sharing",
    EMAIL: "mailto:shivanshhasathi052004@gmail.com",
    GITHUB: "https://github.com/Shivxnshjasathi",
    LINKEDIN: "https://www.linkedin.com/in/shivansh-jasathi-5095a3225",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a mobile developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    EXPERTISE:
      "My expertise lies in Kotlin, Swift, Flutter, and Cloud technologies, and I enjoy working across the stack to bring ideas to life.",
    BLOG: "I would love publishing blogs and sharing insights on software development, best practices, and new technologies.",
  },

  EXPERIENCE: {
    "PhonePe": {
      WEBSITE: "https://www.phonepe.com/",
      POSITION: "Product Solution Engineer",
      LOCATION: "Bangalore",
      DURATION: "March, 2025 - Present",
      DESCRIPTION: [
        "Developed and maintained scalable Phonepe's insurence mobile applications to enhance user engagement and operational efficiency.",
        "contributed to the migration from PhonePe 2.0 to the new PhonePe 3.0 UI.",
        "Collaborated with cross-functional teams to design and implement scalable solutions.",
        "Utilized modern frameworks and libraries to ensure responsive and dynamic user interfaces.",
      ],
      TECH_STACK: [
        "Kotlin",
        "Swift",
        "LiquidUI",
        "Node.js",
        "Git & Github",
      ],
    },
    "NavGurukul":
      {
        WEBSITE: "https://www.navgurukul.org/",
        POSITION: "Sr Flutter Associate",
        LOCATION: "Remort",
        DURATION: "Apr, 2023 - Jan 2025",
        DESCRIPTION: [
          "Assisted in the development of full-stack applications to support academic initiatives.",
          "Spearheaded a 7-member development team to successfully deliver multiple client and in-house projects",
          "Participated in code reviews and contributed to the optimization of existing codebases.",
        ],
        TECH_STACK: [
          "Flutter",
          "Kotlin",
          "Gemini AI",
          "Firebase",
          "GCP",
          "Vercel",
          "Git & Github",
        ],
      },
    "Qurinom Solutions": {
      WEBSITE: "https://qurinomsolutions.com/",
      POSITION: "Software Engineer",
      LOCATION: "Hybrid - Delhi, India",
      DURATION: "Dec, 2022 - Mar, 2023",
      DESCRIPTION: [
        "Researched and analyzed various API testing platforms (Kubesense, LevoAI, Wallarm, Traceable, Safe Security, Keploy) to evaluate features, security, and integration capabilities.",
        "Worked extensively with AWS services (Lambda, Kinesis, S3, API Gateway, EC2, Route 53) to manage infrastructure, automate processes, and optimize security configurations.",
        "Built a To-Do Chrome Extension using Chrome Storage API, enabling users to save and manage tasks directly within their browser.",
      ],
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "AWS",
        "Chrome Extensions",
        "Git & Github",
      ],
    },
  },

  PROJECTS: {
    "Sernity AI": {
      SLUG: "sernity-ai",
      LIVE_PREVIEW: "https://github.com/Shivxnshjasathi/Serenity",
      DESCRIPTION: [
        "Serenity uses advanced AI to provide empathetic support on the basis of gita , helping youth navigate their emotional challenges and improve mental well-being.",
        "Integrated the Razorpay payment gateway to enable secure and seamless transactions",
        "Built a high-performance UI using Next.js and TypeScript, optimizing user experience and system efficiency.",
      ],
      TECH_STACK: [
        "Flutter",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Razorpay",
        "Firebase",
        "GCP",
        "Razorpay",
      ],
      IMAGE: SkygazeImage,
      HIDDEN: false,
    },
    "DIY SmartWatch": {
      SLUG: "digital-library",
      LIVE_PREVIEW: "https://www.linkedin.com/posts/shivansh-jasathi-5095a3225_smartwatchui-cplusplus-wearabletech-activity-7188751290728857600-FQLS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiBjRkBN2_FnPToOvulzPpjurHciX0by2c",
      DESCRIPTION: [
        "Developed and launched a functional Smartwatch for Personal Uses. User can connect the watch to app from bluetooth",
        "Designed and built a smartwatch from scratch, featuring accurate time display and menu navigation.",
        "Engineered low-power consumption features to extend battery life by 40%, making it ideal for day-to-day usage.",
        "Integrated all hardware components with the software to ensure the watch operates smoothly."
      ],
      TECH_STACK: ["C++", "ESP32", "Ardino","Flutter"],
      IMAGE: LibraryImage,
      HIDDEN: false,
    },
    MailProof: {
      SLUG: "mailproof",
      LIVE_PREVIEW: "https://www.npmjs.com/package/mailproof",
      DESCRIPTION: [
        "Developed an email validation library that checks email format, MX records, and SMTP server response.",
        "Implemented filtering of disposable email addresses to improve data quality.",
        "Designed with configurable DNS servers, timeouts, and SMTP sender options.",
        "Published as an npm package for easy integration into Node.js applications.",
      ],
      TECH_STACK: [
        "Node.js",
        "TypeScript",
        "DNS",
        "SMTP",
        "Regex",
        "NPM Package",
      ],
      HIDDEN: true,
    },
    "Apple Iphone website Clone": {
      SLUG: "todo-extension",
      LIVE_PREVIEW: "https://iphone-clone-black.vercel.app/",
     
      DESCRIPTION: [
        "Developed and launched a clone website for Iphone 15 using Reactjs.",
        "Implemented user-friendly interface to enhance productivity and task tracking.",
        "Designed responsive layout ensuring seamless experience across different screen sizes and browsers.",
        "I created a website hosted on Vercel and used Three.js to model the iPhone 15."
        
      ],
    
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Three.js",
        "Vercel"
      ],
      IMAGE: TodoImage,
      HIDDEN: false,
    },
  },

  ALL_PROJECTS:
  "https://github.com/Shivxnshjasathi",

  SKILLS: {
    Languages: ["Kotlin","Swift","JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
    Frameworks: [
      "Flutter",
      "React.js",
      "Next.js",
      "Astro",
      "Express.js",
      "React Native",
      "Expo",
      "Electron",
    ],
    Libraries: [
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
      "ShadCN",
      "Material UI",
      "Ant Design",
    ],
    "Database & Backend": [
      "MongoDB",
      "Firebase",
      "Redis",
      "Contentful",
      "GraphQL",
    ],
    "Cloud & Deployment": [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Vercel",
    ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Razorpay",
      "Postman",
      "Visual Studio Code",
    ],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
