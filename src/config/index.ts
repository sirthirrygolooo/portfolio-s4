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
    { text: "Root-me", href: "https://www.root-me.org/Sir_thirrygolooo" },
    { text: "Lien GitHub de ce portfolio", href: "https://github.com/sirthirrygolooo/portfolio-s4" },
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
      name: "Mon dataset de travail",
      summary: "A upload, pas encore refait (dataset plus disponible sur Kaggle donc dataset local retravaillé)",
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
      trace: "/traces/kaggle.png",
      legend: "Capture d'écran de Kaggle.com, site regroupant de nombreux datasets publiés par une communauté de chercheurs et de développeurs.",
    },
    {
      competence: "C4 - Gérer des données de l'information",
      couleur: "#EA4335",
      name: "Savoir préparer des données",
      summary: "Préparation des données pour travailler efficacement avec",
      competencyDetail: `J'ai donc du dans un second temps préparer les données pour que celles ci soient utilisables aisément. J'avais donc un peu plus de 30 000 images qui étaient nommées selon leur diagnostic qui sont au nombre de 4. J'ai donc élaboré un script python qui venait automatiser le rangement de ces images.`+
      "Sur cette capture d'écran, on peut donc voir une fonction qui vient installer le dataset en local, déplacer les images dans des dossiers selon leur diagnostic, et créer un fichier CSV répertoriant les images et leurs diagnostics respectifs. Le tout en mettant en place une gestion de l'erreur. Ces opérations permet de faciliter l'accès aux données pour les étapes suivantes du projet.",
      trace: "/traces/setup.png",
      legend: "Capture d'écran du script de préparation des données",
    },
        {
      competence: "C6 - Collaborer au sein d'une équipe informatique",
      couleur: "#009688",
      name: "Tenir un code documenté et organisé",
      summary: "Explication du code par des commentaires et une structure claire",
      competencyDetail: `Comme on peut le voir sur l'image ci-jointe, j'ai codé en maintenant un maximum de clarté dans mon code pour faciliter la relecture et la compréhension de celui-ci, par l'ajouts de commentaires et de pratiques de codage claires. Ici par exemple, les commentaires permettent de comprendre l'utilité des lignes, leurs entrées et sorties et leur fonctionnement. Cela permet de comprendre la structure d'un réseau de neurone convolutionnel, les différentes couches appliqués, les méthodes d'activations utilisées, etc. `,
      trace: "/traces/comments.png",
      legend: "Capture d'écran de mon code python de réseau de neurone convulutionnel (CNN) expliqué, idéal pour la reconnaissance et la classification d'images.",
    },
    {
      competence: "C6 - Collaborer au sein d'une équipe informatique",
      couleur: "#009688",
      name: "Schématiser et expliquer des concepts techniques",
      summary: "Création de schémas explicatifs du Machine Learning et des attaques",
      competencyDetail: `Pour aider à la compréhension et documenter les différents types d'attaques, leurs modus operandi et leur niveau d'action, j'ai crée différents schémas, d'abord pour modéliser un cycle de Machine Learning classique puis plus poussé pour situer ou opèrent les différents attaques, à quelle famille elle appartiennent, leur niveau d'action, simplicité d'exécution etc... Ici sur cette capture d'écran, on peut voir une représentation d'un cycle de machine learning avec les 10 attaques les plus courantes sur ce cycle et à quel niveau elles opèrent. Cela permet de mieux comprendre les enjeux de sécurité dans le domaine du Machine Learning et de voir si certaines pourraient être traitées de manière similaire.`,
      trace: "/traces/schemas.png",
      legend: "Schéma représentant le Top 10 OWASP (Open Web Application Security Project) des attaques les plus courantes sur un cycle de Machine Learning.",
    },
      {
        competence: "C6 - Collaborer au sein d'une équipe informatique",
        couleur: "#009688",
        name: "Rendre compte de l'avancement du projet",
        summary: "Rédaction de rapports hebdomadaires en anglais",
        competencyDetail: `Au cours de mon stage, j'ai devais rendre compte de manière journalière de l'avancement du projet au travers de réunions pour discuter des résultats, réfléchir à d'autres angles d'investigations ou encore trouver de nouvelles idées. De plus, j'ai du rédiger des rapports hebdomadaires en anglais pour présenter l'avancement du projet, les techniques étudiées cette semaine, les résultats obtenus, les difficultés rencontrées, les solutions envisagées. Pour établir ces rapports, j'ai du mobiliser mes compétences en matière de synhtèse, d'analyse critique, de rédaction technique et d'expression dans une langue internationale. Ces rapports ont été essentiels pour assurer une bonne communication sur l'évolution des recherches et pour documenter le projet de manière formelle.`,
        trace: "/traces/report.png",
        legend: "Capture d'écran d'une page d'un rapport hebdomadaire, ici d'explication d'un type d'attaque, son fonctionnement et ses caractéristiques.",
    },
    {
      competence: "C2 - Optimiser des applications",
      couleur: "#34A853",
      name: "Optimiser un modèle de Machine Learning",
      summary: "Analyse des temps d'éxécution et des performances",
      competencyDetail: `En sécurité informatique, on retrouve toujours un combat entre efficacité et performances : en général, plus une solution de défense est efficace, plus elle demande des ressources. Il faut donc analyser pour trouver le bon compromis entre efficacité et performances. C'est pourquoi j'ai du mobiliser mes connaissances pour choisir au préalable les modèles les plus efficaces, pour un modèle donné, analyser les temps d'exécutions et l'efficacité et réadapter les paramètres en fonction pour trouver les bons équilibrages.`,
      trace: "/traces/defense_comparison.png",
      legend: "Mise en relation entre les performances de modèles propres, attaqués et défendus, la précision et le temps d'exécution.",
    },
    {
      competence: "C4 - Gérer des données de l'information",
      couleur: "#EA4335",
      name: "Visualiser les données",
      summary: "Tracé de courbes pour analyser l'apprentissage",
      competencyDetail: `Pour analyser l'apprentissage des modèles, j'ai utilisé des librairies telles que seaborn et matplotlib pour représenter visuellement les performances des modèles. Ces visualisations permettent de mieux comprendre comment les modèles apprennent, d'identifier les éventuels sur-apprentissages ou sous-apprentissages, et d'ajuster les paramètres en conséquence. Par exemple, on peut observer l'évolution de la précision du modèle au fil des itérations, ce qui aide à déterminer si le modèle est en train de converger vers une solution optimale.`,
      trace: "/traces/courbes.png",
      legend: "Courbes représentant, les pertes, la précision, l'AUC (Area Under the Curve) PR AUC (Precision-Recall Area Under the Curve) d'un modèle de Machine Learning au cours de son apprentissage (entrainement et validation). / 1 epoch = 1 itération sur l'ensemble des données d'entrainement.",
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
      Bonjour je suis Jean-Baptiste, faudra que j'en dise plus mais un peu la flemme et la c'est pas le but : j'ai des compétences à développer.
    `,
    image: "/cv_photo.jpg",
  }
};

// #5755ff
