import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jean-Baptiste Froehly — Développeur Full Stack",
  author: "Jean-Baptiste Froehly",
  description:
    "Développeur étudiant basé à Belfort, je suis en deuxième année de BUT Informatique à l'IUT de Belfort.",
  lang: "en",
  siteLogo: "/cv_photo.jpg",
  navLinks: [
    { text: "Stage", href: "#stage" },
    { text: "Competences", href: "#competences" },
    { text: "Liens", href: "#liens" },
    { text: "A propos", href: "#hehe" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jean-Baptiste Froehly",
    specialty: "Développeur Full Stack",
    summary:
      "Jeune développeur étudiant, je suis en deuxième année de BUT Informatique à l'IUT de Belfort",
    email: "jean-baptiste.froehly@protonmail.com",
    phone: "+337490888203",
    location: "Belfort, France",
    socialMedia: {github:"hehe", linkedin:"hehe"},
  },
  experience: [
    {
      company: "IUT Nord Franche-Comté",
      position: "La sécurisation des systèmes d’apprentissage automatique: analyse des menaces, détection et défense",
      startDate: "07 Avril 2025",
      endDate: "30 Mai 2025",
      summary: [
        "Stage de recherche ",
        "Sujet basé sur l'Apprentissage Automatique, avec un focus sur la sécurisation des systèmes d'apprentissage automatique.",
        "L'idée est de mettre en place des attaques pour comprendre leur fonctionnement, et imaginer et implémenter des solutions pour les contrer ou du moins limiter leur impact.",
        "Cela passe donc par de la détection d'attaques et, si la détection n'est pas possible, des techniques de prévention."
      ],
    },
    {
      company: "Introduction",
      position: "Frontend Developer",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "ADNI Dataset",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  competences: [
    {
      competence: "C1 - Développement",
      couleur: "#5755ff",
      name: "Compétence 4 – Gestion des données de l'information",
      summary: "Travail sur des IRM pour détecter Alzheimer via des modèles ML.",
      competencyDetail: `Mise en œuvre d'un pipeline de traitement d'images IRM, anonymisation, et structuration des données pour apprentissage supervisé. Utilisation de bibliothèques comme nibabel, numpy et pandas.`,
      trace: "/clone-ig.png",
      legend: "Traitement d'images IRM pour la détection d'Alzheimer",
    },
    {
      competence: "C2 - Les couilles a jules",
      couleur: "#5755ff",
      name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
      summary: "Travail collaboratif dans une équipe de recherche appliquée.",
      competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
      trace: "/clone-ig.png",
      legend: "Collaboration en équipe de recherche appliquée",
    },
        {
      competence: "B3 - hehe",
      couleur: "#ff0030",
      name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
      summary: "Travail collaboratif dans une équipe de recherche appliquée.",
      competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
      trace: "/clone-ig.png",
      legend: "Collaboration en équipe de recherche appliquée",
    },
      {
      competence: "C4",
      couleur: "#d70be5",
      name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
      summary: "Travail collaboratif dans une équipe de recherche appliquée.",
      competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
      trace: "/clone-ig.png",
      legend: "Collaboration en équipe de recherche appliquée",
    },
      {
        competence: "C5",
        couleur: "#036e46",
        name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
        summary: "Travail collaboratif dans une équipe de recherche appliquée.",
        competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
        trace: "/clone-ig.png",
        legend: "Collaboration en équipe de recherche appliquée",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/cv_photo.jpg",
  },
};

// #5755ff
