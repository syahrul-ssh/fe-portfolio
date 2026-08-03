import {
  Blocks,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  FolderKanban,
  HeartPulse,
  Home,
  Layers,
  Mail,
  Network,
  Newspaper,
  ShieldCheck,
  UserRound,
  Wrench,
  Zap,
} from "lucide-react";

import type { Experience, Metric, Project } from "@/features/portfolio/types/portfolio";

export const navigationItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About Me", href: "#about", icon: UserRound },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Blocks },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Highlights", href: "#highlights", icon: Newspaper },
  { label: "Journey", href: "#journey", icon: Network },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const navigationSectionIds = navigationItems.map((item) => item.href.slice(1));

export const metrics: Metric[] = [
  { icon: CalendarDays, value: "3+", label: "Years Experience" },
  { icon: FolderKanban, value: "8+", label: "Projects Delivered" },
  { icon: Blocks, value: "14+", label: "Technologies" },
  { icon: ShieldCheck, value: "100%", label: "Commitment" },
  { icon: Zap, value: "Status", label: "Casually Open to Work" },
];

export const experiences: Experience[] = [
  {
    role: "Freelance Backend Developer",
    company: "Vodjo, Bandung",
    period: "Nov 2025 – Apr 2026",
    highlights: ["Refactored code for better readability",
      "Developed APIs for front-end needs"],
  },
  {
    role: "Contract Fullstack Developer",
    company: "Eiger Adventure Land, Bandung",
    period: "Apr 2025 – Oct 2025",
    highlights: [
      "Developed an NFC-reading IoT device and an ERP feature",
      "Built a desktop application for the FnB system",
    ],
  },
  {
    role: "Contract Backend Developer",
    company: "Karpa Imaji Labs, Depok",
    period: "Jan 2025 – Mar 2025",
    highlights: [
      "Developed a boilerplate for future projects",
      "Developed a feature for authorization RBAC (Role-Based Access Control)",
      "Fix incorrect database queries and improve query quality",
      "Create APIs to meet the needs of mobile and front-end",
    ],
  },
  {
    role: "Full-Time Backend Developer",
    company: "Rolling Glory, Bandung",
    period: "Sep 2022 – Sep 2024",
    highlights: [
      "Developed a secure authentication system like jwt that met industry standards for data protection and privacy",
      "Created an API gateway that improved system performance and reduced latency",
      "Refactored legacy code to improve reliability, scalability and maintainability",
      "Optimized database queries to improve application performance and reduce response times"
    ],
  },
  {
    role: "Internship Backend Developer",
    company: "Rolling Glory, Bandung",
    period: "Jun 2022 – Sep 2022",
    highlights: [
      "Collaborated on digital product development with the team",
      "Implemented backend support and troubleshooting for mobile and web",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "DCI Indonesia Company Website",
    category: "Backend",
    icon: Building2,
    description:
      "Company profile platform presenting data center services and infrastructure capabilities.",
    technologies: "ExpressJS MySQL Sequelize",
    year: "2025",
  },
  {
    name: "FnB System For Eiger Adventure Land",
    category: "Fullstack",
    icon: Layers,
    description:
      "Integrated food and beverage platform for POS, reservations, payments, inventory, and NFC.",
    technologies: "ReactJS NFC ElectronJs RFID",
    year: "2025",
  },
  {
    name: "Eiger Adventure Land ERP",
    category: "Fullstack",
    icon: Wrench,
    description: "Company ERP covering ticketing, validation, customers, and transaction features.",
    technologies: "NestJS PostgreSQL Docker Kafka EC2",
    year: "2025",
  },
  {
    name: "Wristband IoT",
    category: "Fullstack",
    icon: HeartPulse,
    description: "NFC wristband reader integrated with RFID validation and server synchronization.",
    technologies: "ElectronJs ReactJS SQLite NFC RFID",
    year: "2025",
  },
  {
    name: "Mata Hati Apps",
    category: "Backend",
    icon: HeartPulse,
    description:
      "Foundation application supporting educational programs, book acquisition, and donations.",
    technologies: "NestJS PostgreSQL Flutter ReactJS",
    year: "2025",
  },
  {
    name: "Erha Buddy Apps",
    category: "Backend",
    icon: HeartPulse,
    description:
      "Skin-care application with product purchasing, appointments, and third-party integrations.",
    technologies: "NestJS MySQL Redis New Relic S3 EC2",
    year: "2024",
  },
  {
    name: "Morinaga Web",
    category: "Backend",
    icon: Building2,
    description: "Product landing website maintained and enhanced through client change requests.",
    technologies: "Yii2 MySQL Redis",
    year: "2023",
  },
  {
    name: "Elina Tools System",
    category: "Backend",
    icon: Wrench,
    description:
      "Member registration and transaction platform with CMS, authentication, and CASL permissions.",
    technologies: "NestJS PostgreSQL Redis New Relic EC2",
    year: "2022 – 2023",
  },
];

export const techStacks = [
  {
    name: "Backend",
    items: ["NestJS", "ExpressJS", "Laravel", "Go Fiber", ".NET Core", "Spring Boot"],
  },
  { name: "Languages", items: ["TypeScript", "JavaScript", "PHP", "Go", "Java"] },
  { name: "Database", items: ["PostgreSQL", "MySQL", "Redis"] },
  { name: "DevOps", items: ["VPS", "Docker", "Kafka", "New Relic", "Grafana", "Git", "CI/CD"] },
];
