export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  competences: CompetencesProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  phone?: string;
  location?: string;
  socialMedia?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface CompetencesProps {
  competence: string;
  couleur: string;
  name: string;
  summary: string;
  competencyDetail: string;
  trace: string;
  legend: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
