const projectDetails = {
    webtool: {
        title: "CMS Webtool",
        context: "Le projet consistait en une refonte complète du CMS interne Webtool afin de le rendre plus moderne, performant et adapté aux besoins des graphistes, dans un environnement Agile Scrum.",
        description: "Webtool est un outil interne à l'entreprise Local.fr utilisé par les graphistes pour créer des sites web en moins d’une journée sans compétences techniques avancées. Les développeurs interviennent non pas sur la création des sites, mais sur l’évolution et l’optimisation de cet outil central. J’ai participé à la refonte majeure de l’interface (version 4), avec pour objectif de la rendre plus intuitive, plus visuelle et plus rapide à utiliser. Cette refonte inclut une migration d’Angular Material vers PrimeNG afin d’améliorer l’ergonomie et les performances globales.",
        stack: [
            { name: "Angular", icon: "devicon-angularjs-plain" },
            { name: "Symfony", icon: "devicon-symfony-original" },
            { name: "TypeScript", icon: "devicon-typescript-plain" }
        ],
        technical: [
            "Refonte complète de l’interface utilisateur du CMS pour améliorer l’expérience utilisateur (UI/UX).",
            "Migration des composants d’Angular Material vers PrimeNG pour moderniser l’application.",
            "Optimisation des performances afin de réduire les temps de chargement et améliorer la fluidité.",
            "Développement et amélioration de la sidebar dynamique permettant la gestion de nombreux types de contenus (galeries, textes, boutons, etc.).",
            "Collaboration en méthodologie Agile Scrum avec l’équipe de développement.",
            "Participation à la mise en production et en préproduction de l’application.",
            "Détection, correction de bugs et maintenance continue pour garantir la stabilité de l’outil."
        ],
        image: "../images/webtool.png",
        github: "Le lien GitHub n'est pas disponible pour ce projet car il s'agit d'un projet d'entreprise avec du code propriétaire."
    },
    
    "3d": {
        title: "Modélisation 3D",
        context: "Projet scolaire réalisé individuellement. L'objectif était de créer une scène 3D immersive avec une ambiance rétro des années 80.",
        description: "J'ai modélisé une scène 3D complète avec Three.js, incluant un modèle 3D créé sur Blender. Le projet met en avant des effets de lumière néon, des textures rétro et une animation fluide pour recréer l'ambiance caractéristique des années 80.",
        stack: [
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Three.js", icon: "devicon-threejs-original" },
            { name: "Blender", icon: "devicon-blender-original" }
        ],
        technical: [
            "Création et exportation d'un modèle 3D depuis Blender vers Three.js.",
            "Mise en place d'une scène avec éclairages et caméras.",
            "Développement d'animations pour donner vie aux éléments 3D.",
            "Implémentation d'effets de particules pour l'ambiance rétro."
        ],
        video: "../videos/video3D.mp4",
        image: "../images/3d.png",
        github: "https://github.com/ton-repo"
    },
    
tuniv: {
    title: "Projet TUNIV",
    context: "Projet scolaire réalisé en équipe de 3. Nous devions reprendre une application existante de gestion de tournois sportifs pour un client réel et la rendre plus fiable et adaptée à ses besoins.",
    description: "Dans ce projet, nous avons repris une application existante dont le code était difficile à maintenir (mélange de conventions, structure peu claire). Avec mon équipe, nous avons fait le choix de repartir sur des bases plus saines : conserver le front-end en Vue.js, mais réécrire entièrement le back-end avec Spring Boot. J’ai particulièrement travaillé sur la qualité du code, la sécurité et les performances, tout en veillant à répondre aux attentes du client. Le fait d’être en équipe réduite nous a aussi poussés à mieux organiser notre travail et à prioriser efficacement les fonctionnalités.",
    stack: [
        { name: "Vue.js", icon: "devicon-vuejs-plain" },
        { name: "Spring Boot", icon: "devicon-spring-original" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" }
    ],
    technical: [
        "Reprise d’un projet existant avec une forte dette technique.",
        "Refonte complète du back-end avec Spring Boot.",
        "Travail sur la sécurisation globale de l’application.",
        "Optimisation des performances côté base de données (PostgreSQL).",
        "Amélioration continue de l’interface Vue.js.",
        "Organisation du travail et priorisation dans une équipe réduite."
    ],
    image: "../images/tuniv.png",
    video: "../videos/videoTUNIV.mp4",
    github: "https://iutbg-gitlab.iutbourg.univ-lyon1.fr/sae-but31/2025-26-web/gestion-championnats-et-tournois-multisports/backend_v2"
},

infirmiere: {
    title: "Site infirmière",
    context: "Projet scolaire réalisé en équipe de 4 avec un client réel. L’objectif était de proposer une application web pour faciliter la gestion des rendez-vous avec l’infirmière.",
    description: "Ce projet a été l’un de mes premiers vrais travaux en équipe avec un client. Nous avons conçu une application from scratch avec CakePHP pour permettre aux étudiants de prendre rendez-vous facilement. De son côté, l’infirmière peut consulter les demandes, les accepter ou les refuser, et ajouter des commentaires. Nous avons aussi ajouté des fonctionnalités comme un système d’articles et un espace administrateur pour gérer les utilisateurs. Au-delà de la technique, ce projet m’a beaucoup apporté sur le travail en équipe, la communication avec un client et l’adaptation aux contraintes réelles.",
    stack: [
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "CakePHP", icon: "devicon-cakephp-plain" },
        { name: "MariaDB", icon: "devicon-mariadb-original" }
    ],
    technical: [
        "Développement complet avec le framework CakePHP (architecture MVC).",
        "Mise en place d’un système de gestion des rendez-vous.",
        "Implémentation d’une authentification avec gestion des rôles.",
        "Conception et manipulation d’une base de données MariaDB.",
        "Ajout de fonctionnalités pour enrichir l’expérience utilisateur.",
        "Collaboration en équipe avec échanges réguliers avec le client."
    ],
    image: "../images/infirmerie.png",
    github: "https://iutbg-gitlab.iutbourg.univ-lyon1.fr/sae-but2/2024-25/rv-infirmerie-site-bourg"
},
smartwatch: {
    title: "Montre connectée",
    context: "Projet académique réalisé en équipe, visant à concevoir une montre connectée orientée santé capable de collecter et transmettre des données en temps réel.",
    description: "Ce projet consistait à développer une montre connectée basée sur Arduino, intégrant plusieurs capteurs pour surveiller l’état de santé de l’utilisateur. L’objectif était de détecter des situations à risque, comme une chute ou une anomalie du rythme cardiaque. La montre collecte les données via différents capteurs, puis les transmet à une application web permettant de visualiser les informations en temps réel.",
    stack: [
        { name: "Arduino", icon: "devicon-arduino-plain" },
        { name: "C++", icon: "devicon-cplusplus-plain" },
        { name: "Spring Boot", icon: "devicon-spring-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Réseau (IoT)", icon: "devicon-networkx-plain" }
    ],
    technical: [
        "Développement d’un système embarqué avec Arduino pour collecter des données via capteurs.",
        "Utilisation d’un accéléromètre pour détecter les mouvements rapides et les chutes (axes X, Y, Z).",
        "Intégration d’un capteur de fréquence cardiaque et d’un capteur de température corporelle.",
        "Mise en place d’une communication réseau pour transmettre les données vers une application.",
        "Développement d’un backend avec Spring Boot pour gérer les տվյալ en temps réel.",
        "Création d’une interface utilisateur avec React pour visualiser les données en direct.",
        "Gestion des cas critiques (chute + fréquence cardiaque faible) pour alerter sur l’état de l’utilisateur."
    ],
    image: "../images/smartwatch.png",
    github: "https://iutbg-gitlab.iutbourg.univ-lyon1.fr/IOT_BUT3_WEB_2026/groupe_09/backend"
},
    
    voitures: {
        title: "Projet Voitures",
        context: "Projet personnel réalisé en autonomie pour approfondir mes compétences en développement web. L'objectif était de créer un site autour de ma passion pour l'automobile.",
        description: "J'ai conçu un site web présentant différents modèles de voitures avec leurs caractéristiques. Le site comprend une page d'accueil, des fiches détaillées par véhicule, et un système de recherche par catégories.",
        stack: [
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "PHP", icon: "devicon-php-plain" },
            { name: "MariaDB", icon: "devicon-mariadb-original" }
        ],
        technical: [
            "Création de la structure HTML et du design CSS responsive.",
            "Développement des fonctionnalités back-end en PHP.",
            "Conception et implémentation de la base de données MariaDB.",
            "Mise en place d'un système de recherche et de filtrage des véhicules."
        ],
        image: "../images/voitures.png",
        github: "https://github.com/ton-repo"
    },
    
    figma: {
        title: "Projet Figma",
        context: "Projet scolaire individuel axé sur l'UX/UI design. L'objectif était de concevoir un site web accessible respectant les normes WCAG.",
        description: "J'ai conçu l'interface d'un site web en suivant les principes d'accessibilité numérique. Le projet inclut des maquettes, un prototype interactif et une documentation sur les choix d'accessibilité.",
        stack: [
            { name: "Figma", icon: "devicon-figma-plain" },
            { name: "Accessibilité", icon: "devicon-w3c-plain" }
        ],
        technical: [
            "Création de wireframes et de maquettes haute-fidélité sur Figma.",
            "Application des normes WCAG (contrastes, tailles de texte, navigation clavier).",
            "Conception d'un prototype interactif pour tester l'expérience utilisateur.",
            "Documentation des choix d'accessibilité et des tests réalisés."
        ],
        image: "../images/figma.png",
        github: "https://github.com/ton-repo"
    }
};


// const path = window.location.pathname;

// if (path.includes("webtool")) {

//     const data = projectDetails.webtool;

//     document.getElementById("projectTitle").textContent = data.title;
//     document.getElementById("projectContext").textContent = data.context;
//     document.getElementById("projectDescription").textContent = data.description;
//     document.getElementById("projectImage").src = data.image;
//     document.getElementById("projectVideo").src = data.video; 
//     document.getElementById("githubLink").href = data.github;


//     const stackContainer = document.getElementById("projectStack");

//     data.stack.forEach(tech => {

//         stackContainer.innerHTML += `
// <div class="stack-item">
// <i class="${tech.icon}"></i>
// <span>${tech.name}</span>
// </div>
// `;

//     });


//     const detailsContainer = document.getElementById("projectDetails");

//     data.technical.forEach(item => {

//         detailsContainer.innerHTML += `
// <div class="soft-item">
// <i class="fa-solid fa-code"></i>
// <p>${item}</p>
// </div>
// `;

//     });

// }