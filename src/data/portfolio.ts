export interface NavigationItem {
  label: string;
  href: string;
}

export interface ProfileData {
  monogram: string;
  name: string;
  tagline: string;
  headline: string;
  heroIntro: string;
  aboutParagraphs: string[];
  location: string;
  email: string;
  linkedin: string;
  portraitUrl: string;
  portraitAlt: string;
  cvUrl: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  isCurrent: boolean;
  /**
   * Optional verified responsibilities or achievements.
   * Keep empty until explicitly supplied and approved.
   */
  highlights?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  period: string;
}

export type WorkCategory =
  | "Research & Writing"
  | "Programme Activities"
  | "Reports & Documentation"
  | "Publications"
  | "Community Initiatives";

export interface SelectedWorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  year: string;
  summary: string;
  organization?: string;
  link?: string;
  imageUrl?: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills & Interests", href: "#skills" },
  { label: "Selected Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const profile: ProfileData = {
  monogram: "Khin Phyo Thu",
  name: "Khin Phyo Thu",
  tagline: "POLITICAL SCIENCE · SOCIAL RESEARCH",
  headline: "Understanding society. Supporting change.",
  heroIntro:
    "I'm Khin Phyo Thu, a Political Science graduate with a Certificate in Gender Studies and professional experience across programme support, information management, education, and healthcare claims. I have a strong interest in human rights, governance, conflict analysis, and social research.",
  aboutParagraphs: [
    "My academic journey in Political Science has shaped my interest in understanding social structures, governance, and the challenges facing communities.",
    "Through my professional experiences in programme work, education, information management, and healthcare claims, I have developed an interest in contributing to meaningful social and development initiatives.",
    "I am particularly interested in human rights, gender equality, transitional justice, conflict analysis, and social research, with a focus on Myanmar.",
  ],
  location: "Yangon, Myanmar",
  email: "khinphyothu.jm@gmail.com",
  linkedin: "https://www.linkedin.com/in/khin-phyo-thu-9689223ba/",
  portraitUrl: `${import.meta.env.BASE_URL}images/profile.webp`,
  portraitAlt: "Portrait of Khin Phyo Thu",
  cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
};

export const experiences: ExperienceItem[] = [
  {
    id: "mpg-claim-assistant",
    title: "Health Care Claim Assistant",
    organization: "Myanmar Positive Group (MPG)",
    period: "August 2026 – Present",
    location: "Yangon Region",
    isCurrent: true,
  },
  {
    id: "inya-information-management",
    title: "Digital Resources and Information Management",
    organization: "The Inya Institute",
    period: "June 2026 – Present",
    location: "Yangon",
    isCurrent: true,
  },
  {
    id: "yse-program-officer",
    title: "Program Officer",
    organization: "Youth Society for Education",
    period: "September 2024 – Present",
    location: "Yangon Region",
    isCurrent: true,
  },
  {
    id: "young-ni-teacher",
    title: "Teacher",
    organization: "Young Ni Federal School",
    period: "October 2022 – February 2023",
    location: "Magway Region",
    isCurrent: false,
  },
];

export const education: EducationItem[] = [
  {
    id: "ba-political-science",
    degree: "Bachelor of Arts",
    field: "Political Science",
    institution: "Mai Ja Yang College",
    period: "June 2021 – March 2025",
  },
  {
    id: "cert-gender-studies",
    degree: "Certificate in Gender Studies",
    institution: "Myanmar Institute of Theology University",
    period: "April 2026 – May 2026",
  },
  {
    id: "high-school-diploma",
    degree: "High School Diploma",
    institution: "Basic Education High School Mindon",
    period: "June 2018 – May 2020",
  },
];

export const skills: string[] = [
  "Analytical Skills",
  "Social Services",
  "Data Analysis",
];

export const interests: string[] = [
  "Human Rights",
  "Gender Studies",
  "Governance",
  "Transitional Justice",
  "Conflict Analysis",
  "Social Research",
  "Sustainable Development",
];

export const workCategories: WorkCategory[] = [
  "Research & Writing",
  "Programme Activities",
  "Reports & Documentation",
  "Publications",
  "Community Initiatives",
];

/**
 * Populate only after Khin Phyo Thu supplies verified work samples
 * and confirms they can be shared publicly.
 */
export const selectedWork: SelectedWorkItem[] = [];