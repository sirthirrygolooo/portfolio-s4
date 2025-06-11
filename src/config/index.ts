import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Portfolio Jean-Baptiste Froehly — Développeur Full Stack",
  author: "Jean-Baptiste Froehly",
  description:
    "Jeune développeur Full Stack, je suis en deuxième année de BUT Informatique à l'IUT de Belfort",
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
  socialImage: "/social_pic.png",
  canonicalURL: "https://portfolio-s4-gamma.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jean-Baptiste Froehly",
    specialty: "Développeur Full Stack",
    summary:
      "Jeune développeur Full Stack, je suis en deuxième année de BUT Informatique à l'IUT de Belfort",
    email: "jean-baptiste.froehly@protonmail.com",
    phone: "+337490888203",
    location: "Belfort, France",
    socialMedia: {github:"https://github.com/sirthirrygolooo/", linkedin:"https://www.linkedin.com/in/jean-baptiste-froehly/"},
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
        "J'ai principalement travaillé sur des images IRM (Imagerie par Résonance Magnétique) utilisées pour la détection précoce de la maladie d'Alzheimer. J'ai donc entrainé des modèles pour la détection dans un premier temps.",
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
      summary: "En effet, le sujet étant basé sur de l'étude et de la compréhension de données, la compétence 4 a été particulièrement centrale. De plus l'organisation a fait que j'ai du parfois intéragir des personnes, renseignées sur le sujet ou non."+
          " Cela impliquait donc de tenir mon code documenté, de tenir des rapports hebdomadaires détaillés, faire des présentations pour vulgariser le sujet, etc... Ce qui illustre parfaitement but recherché par la compétence 6.",
    }
  ],
  projects: [
    {
      name: "Site de l'ADNI",
      summary: "ADNI, pour Alzheimer's Disease Neuroimaging Initiative, est un projet de recherche visant à étudier la maladie d'Alzheimer à travers l'imagerie cérébrale.",
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
      name: "Github du stage",
      summary: "Le repository GitHub de mon stage",
      linkSource: "https://github.com/sirthirrygolooo/MLsecurity",
      image: "/github_repo2.png",
    },
  ],
  competences: [
    {
      competence: "C4 - Gérer des données de l'information",
      couleur: "#EA4335",
      name: "Savoir collecter des données pertinentes pour une application",
      summary: "Collecte des données",
      competencyDetail: `Dans le cadre de ce stage, j’ai principalement travaillé sur des images IRM (Imagerie par Résonance Magnétique), et ce choix s’est imposé pour plusieurs raisons. Mon objectif étant de mener des attaques sur des systèmes d’apprentissage automatique, il était essentiel de disposer d’un jeu de données propre, structuré et de haute qualité pour garantir la fiabilité des expérimentations.

Il me fallait donc un dataset contenant un grand nombre d’images, déjà triées et peu affectées par des artefacts ou imperfections. Les images IRM répondent bien à ces critères : elles sont relativement faciles à trouver, souvent de bonne qualité, et présentent un format standardisé, ce qui facilite leur traitement. De plus, le domaine médical s’avère pertinent dans une optique de recherche sur les attaques, notamment en raison des enjeux éthiques et de confidentialité qu’il soulève.

Le choix du dataset n’a pas été fait au hasard. Il a nécessité une réflexion approfondie et une capacité à évaluer la pertinence et la qualité des données disponibles. Cette démarche illustre donc bien la mise en œuvre de compétences du domaine C4, car elle a impliqué à la fois une recherche méthodique, un tri rigoureux des sources, et une attention portée à la validité des données utilisées dans un contexte critique.`,
      trace: "/pgd_attack.png",
      legend: "Traitement d'images IRM pour la détection d'Alzheimer",
    },
    {
      competence: "C4 - Gérer des données de l'information",
      couleur: "#EA4335",
      name: "Savoir préparer des données",
      summary: "Préparation des données pour travailler efficacement avec",
      competencyDetail: `J'ai donc du dans un second temps préparer les données pour que celles ci soient utilisables aisément. J'avais donc un peu plus de 30 000 images qui étaient nommées selon leur diagnostic qui sont au nombre de 4. J'ai donc élaboré un script python qui venait automatiser le rangement de ces images.`+
      "Sur cette capture d'écran, on peut donc voir une fonction qui vient installer le dataset en local, déplacer les images dans des dossiers selon leur diagnostic, et créer un fichier CSV répertoriant les images et leurs diagnostics respectifs. Cela permet de faciliter l'accès aux données pour les étapes suivantes du projet.",
      trace: "/traces/setup.png",
      legend: "Capture d'écran du script de préparation des données",
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
