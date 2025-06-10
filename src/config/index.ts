import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jean-Baptiste Froehly — Développeur Full Stack",
  author: "Jean-Baptiste Froehly",
  description:
    "Jeune développeur étudiant, je suis en deuxième année de BUT Informatique à l'IUT de Belfort",
  lang: "fr",
  siteLogo: "/peepo.gif",
  navLinks: [
    { text: "Stage", href: "#stage" },
    { text: "Competences", href: "#competences" },
    { text: "Liens", href: "#liens" },
    { text: "A propos", href: "#hehe" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jean-baptiste-froehly/" },
    { text: "Github", href: "https://github.com/sirthirrygolooo/" },
    { text: "Youtube", href: "https://www.youtube.com/c/Ast%C3%A9rionlebon" },
    { text: "Twitter (gépas c'est pour la forme)", href: "http://www.staggeringbeauty.com/" },
  ],
  socialImage: "/og.png",
  canonicalURL: "https://portfolio-s4-gamma.vercel.app",
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
        "Stage de recherche",
        "Sujet centré sur l’apprentissage automatique (Machine Learning), et plus particulièrement sur la sécurisation de ces systèmes.",
        "L’objectif principal était de concevoir et simuler des attaques afin de comprendre leur fonctionnement, puis d’imaginer et d’implémenter des solutions pour les contrer ou en réduire l’impact.",
        "Cela impliquait notamment la mise en place de mécanismes de détection d’attaques, ainsi que, lorsque la détection n’était pas envisageable, le développement de techniques de prévention.",
        "J'ai principalement travaillé sur des images IRM (Imagerie par Résonance Magnétique) utilisées pour la détection précoce de la maladie d'Alzheimer. J'ai donc entrainé des modèles pour la détection.",
        "Une fois fois qu'un modèle a de bons résultats, on implémente alors une attaque que l'on cherche à rendre le plus efficace possible et le moins détectable possible, puis on cherche des solutions pour la contrer.",
        "On connait ainsi l'efficacité du modèle avant attaque, l'efficacité du modèle après attaque, et l'efficacité de la solution que l'on a implémentée pour contrer l'attaque.",
      ],
    },
    {
      summary: "Ce portfolio a pour but de présenter non seulement le sujet du stage, mais surtout de mettre en lumière les compétences que j’ai mobilisées pour y parvenir. Plus qu’une simple description d’activités, il s’agit ici d’analyser de manière critique la mise en œuvre des savoirs et savoir-faire acquis au cours de ma formation."
    },
    {
      company: "Compétences Abordées lors du Stage",
      position: "Introduction",
      summary:
          "Parmi les six domaines de compétences du programme, j’ai choisi de me concentrer sur deux d’entre eux, qui ont été particulièrement sollicités durant mon stage :"
    },
    {
      summary: "• C4 : Gérer des données de l'information "
    },
    {
      summary: "• C6 : Collaborer au sein d'une équipe informatique "
    },
    {
      summary: "En effet, le sujet étant basé sur de l'étude et de la compréhension de données, la compétence 4 a été particulièrement centrale. De plus l'organisation a fait que je devais travailler en collaboration avec d'autres personnes, renseignées sur le sujet ou non."+
          " Cela impliquait donc de tenir mon code documenté, de tenir des rapports hebdomadaires détaillés, faire des présentations pour vulgariser le sujet, etc... Ce qui illustre parfaitement but recherché par la compétence 6.",
    }
  ],
  projects: [
    {
      name: "ADNI Site",
      summary: "Faudra expliquer c'est quoi",
      linkSource: "https://adni.loni.usc.edu/data-samples/adni-data/",
      image: "/brain.png",
    },
    {
      name: "ADNI Dataset",
      summary: "Y'a plus faudra je reupload",
      linkSource: "https://onlyfeets.com",
      image: "/brain_dataset.jpg",
    },
    {
      name: "Github Repository",
      summary: "Le repository GitHub de mon stage",
      linkSource: "https://github.com/sirthirrygolooo/MLsecurity",
      image: "/github_repo2.png",
    },
  ],
  competences: [
    {
      competence: "C1 - Réaliser un développement d'application",
      couleur: "#4285F4",
      name: "Compétence 4 – Gestion des données de l'information",
      summary: "Travail sur des IRM pour détecter Alzheimer via des modèles ML.",
      competencyDetail: `Mise en œuvre d'un pipeline de traitement d'images IRM, anonymisation, et structuration des données pour apprentissage supervisé. Utilisation de bibliothèques comme nibabel, numpy et pandas.`,
      trace: "/pgd_attack.png",
      legend: "Traitement d'images IRM pour la détection d'Alzheimer",
    },
    {
      competence: "C2 - Les couilles a jules",
      couleur: "#34A853",
      name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
      summary: "Travail collaboratif dans une équipe de recherche appliquée.",
      competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
      trace: "/pgd_attack.png",
      legend: "Collaboration en équipe de recherche appliquée",
    },
        {
      competence: "C3 - hehe",
      couleur: "#FBBC05",
      name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
      summary: "Travail collaboratif dans une équipe de recherche appliquée.",
      competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
      trace: "/pgd_attack.png",
      legend: "Collaboration en équipe de recherche appliquée",
    },
      {
      competence: "C4",
      couleur: "#EA4335",
      name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
      summary: "Travail collaboratif dans une équipe de recherche appliquée.",
      competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
      trace: "/pgd_attack.png",
      legend: "Collaboration en équipe de recherche appliquée",
    },
      {
        competence: "C5",
        couleur: "#9C27B0",
        name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
        summary: "Travail collaboratif dans une équipe de recherche appliquée.",
        competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
        trace: "/pgd_attack.png",
        legend: "Collaboration en équipe de recherche appliquée",
    },
    {
      competence: "C5",
      couleur: "#9C27B0",
      name: "Compétence 6 – Collaboration au sein d'une équipe informatique",
      summary: "Travail collaboratif dans une équipe de recherche appliquée.",
      competencyDetail: `Utilisation de Git pour le versionnage, échanges réguliers avec encadrants pour valider les choix techniques, et documentation continue du code. Revue de code hebdomadaire avec l'équipe.`,
      trace: "/pgd_attack.png",
      legend: "Collaboration en équipe de recherche appliquée",
    },
  ],
  compList: [
    {
      name: "Réaliser un développement d'application",
      level: 1,
      color: "#4285F4",
    },
    {
      name: "Optimiser des applications",
      level: 2,
      color: "#34A853",
    },
    {
      name: "Administrer des systèmes informatiques communicants complexes",
      level: 3,
      color: "#FBBC05",
    },
    {
      name: "Gérer des données de l'information",
      level: 4,
      color: "#EA4335",
      focus: true,
    },
    {
      name: "Conduire un projet",
      level: 5,
      color: "#9C27B0",
    },
    {
      name: "Collaborer au sein d'une équipe informatique",
      level: 6,
      color: "#009688",
      focus: true,
    }
  ],
  about: {
    description: `
      Bonjour je suis Jean-Baptiste, faudra que j'en dise plus mais flemme j'ai des compétences à développer.
    `,
    image: "/cv_photo.jpg",
  }
};

// #5755ff
