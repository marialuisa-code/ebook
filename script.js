const styles = [
"style/contact.css",
"style/timeline.css",
"style/skills.css"
];

styles.forEach(style => {

const link = document.createElement("link");

link.rel = "stylesheet";
link.href = style;

document.head.appendChild(link);

});

const nav = [
    { name: "Accueil", link: "index.html" },
    { name: "Parcours", link: "parcours.html" },
    { name: "Compétences", link: "competences.html" },
    { name: "Projets", link: "projets.html" },
    { name: "Contact", link: "contact.html" }
];

const skills = [

{
category:"Frontend",
items:[
{name:"Angular", icon:"devicon-angularjs-plain", level:60},
{name:"React", icon:"devicon-react-original", level:10},
{name:"Vue.js", icon:"devicon-vuejs-plain", level:40}
]
},

{
category:"Backend",
items:[
{name:"Symfony", icon:"devicon-symfony-original", level:60},
{name:"PHP", icon:"devicon-php-plain", level:85},
{name:"Spring Boot", icon:"devicon-java-plain", level:30}
]
},

{
category:"Database",
items:[
{name:"PostgreSQL", icon:"devicon-postgresql-plain", level:60},
{name:"MariaDB", icon:"devicon-mysql-plain", level:75},
{name:"Neo4j", icon:"devicon-neo4j-plain", level:35},
{name:"MongoDB", icon:"devicon-mongodb-plain", level:20}
]
},

{
category:"Tools",
items:[
{name:"Git", icon:"devicon-git-plain", level:70},
{name:"Figma", icon:"devicon-figma-plain", level:30}
]
}

];

const projects = [

    {
        id: "webtool",
        title: "CMS",
        description: "Travail sur un CMS existant avec Angular et Symfony. Mise en place de tests fonctionnels avec Playwright.",
        tech: ["Angular","Symfony","Twig","Playwright","Typescript"],
        tags: ["Entreprise","Equipe"],
        github: "",
    },
    {
        id: "3d",
        title: "Modélisation 3D",
        description: "Modélisation d'une scène avec une vibe des années '80 en 3D avec Three.js, comprenant un modèle Blender.",
        tech: ["JavaScript","Three.js"],
        tags: ["Scolaire","Individuel"],
        github: "",
    },
    {
        id: "tuniv",
        title: "Projet TUNIV",
        description: "Application pour organiser des tournois sportifs. Reprise d'un projet existant et amélioration de la sécurité.",
        tech: ["Vue.js","Spring Boot","PostgreSQL"],
        tags: ["Scolaire","Equipe"],
        github: "",
    },
    {
        id: "infirmiere",
        title: "Site infirmière",
        description: "Application permettant aux étudiants de contacter l'infirmière de l'IUT.",
        tech: ["PHP","CakePHP","MariaDB"],
        tags: ["Scolaire","Equipe"],
        github: "",
        fullProject: "/Users/haran/OneDrive/Documents/IUT/3eme%20ann%C3%A9e/portfolio/ebook/projets/infirmiere.html"
    },
    // {
    //     id: "voitures",
    //     title: "Projet Voitures",
    //     description: "Site web autour de l'automobile réalisé en HTML, CSS et PHP.",
    //     tech: ["HTML","CSS","PHP","MariaDB"],
    //     tags: ["Personnel","Individuel"],
    //     github: "",
    // },
    // {
    //     id: "figma",
    //     title: "Projet Figma",
    //     description: "Conception d'un site accessible respectant les normes d'accessibilité.",
    //     tech: ["Figma","Accessibilité"], 
    //     tags: ["Scolaire","Individuel"],  
    //     github: "",
    //     fullProject: "/Users/haran/OneDrive/Documents/IUT/3eme%20ann%C3%A9e/portfolio/ebook/projets/figma.html"
    // },
];

const timelineData = [
    {
    date: "2025",
    title: "Alternance en 3ème année de BUT Informatique",
    text: "Développeuse web en entreprise avec Angular et Symfony."
    },
    {
    date: "2023",
    title: "BUT Informatique",
    text: "Entrée en BUT Informatique à l'université Lyon 1."
    },
    {
    date: "2023",
    title: "Baccalauréat",
    text: "Obtention du bac avec spécialité NSI avec une note de 17 en informatique et 16 en anglais."
    },
    {
    date: "2020",
    title: "Spécialité NSI",
    text: "Découverte des bases de l’informatique : algorithmique, programmation et travail en équipe."
    },
    {
    date: "2019",
    title: "Premiers pas en informatique",
    text: "Création de mon premier site web personnel autour de la manucure en HTML et CSS."
    },
];


const softSkills = [

{
title:"Communication",
icon:"fa-solid fa-comments",
text:"Au cours de mes projets académiques et professionnels, j’ai développé une communication claire avec les développeurs et les Product Owners afin d’expliquer les contraintes techniques."
},

{
title:"Travail en équipe",
icon:"fa-solid fa-people-group",
text:"Les projets que j’ai réalisés m’ont permis de travailler avec des profils variés et de collaborer pour résoudre les problèmes et améliorer les solutions."
},

{
title:"Résolution de problèmes",
icon:"fa-solid fa-lightbulb",
text:"Le développement logiciel implique de nombreux défis techniques. J’analyse les problèmes, teste différentes approches et persévère jusqu’à trouver une solution fiable et maintenable."
},

{
title:"Autonomie",
icon:"fa-solid fa-anchor",
text:"Je suis capable de travailler de manière autonome tout en sachant demander de l’aide lorsque cela est nécessaire afin de ne pas bloquer l’avancement du projet."
}

];

const timelineContainer = document.getElementById("timeline");
const navContainer = document.getElementById("navContainer");
const skillsContainer = document.getElementById("skillsContainer");
const container = document.getElementById("projectContainer");
const softContainer = document.getElementById("softSkillsContainer");

if(navContainer){
    nav.forEach(item => {
        navContainer.innerHTML += `<a href="${item.link}">${item.name}</a>`;
    });
}

if(container){
    projects.forEach(project => {
        container.innerHTML += `
            <a class="project-card" href="projets/project.html?project=${project.id}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech">
                    ${project.tech.join(" • ")}
                </div>
            </a>
        `;
    });
}

if(timelineContainer){
    timelineData.forEach((item, index) => {

    const side = index % 2 === 0 ? "left" : "right";

    timelineContainer.innerHTML += `

    <div class="timeline-item ${side}">

    <div class="timeline-content">

    <span class="timeline-date">${item.date}</span>

    <h3>${item.title}</h3>

    <p>${item.text}</p>

    </div>

    </div>

    `;

    });
}


if(softContainer){

softSkills.forEach(skill => {

softContainer.innerHTML += `

<div class="soft-item">

<i class="${skill.icon}"></i>

<h3>${skill.title}</h3>

<p>${skill.text}</p>

</div>

`;

});

}

if(skillsContainer){
    skills.forEach(cat=>{

    let html=`<div class="skill-category">
    <h3>${cat.category}</h3>
    `;

    cat.items.forEach(skill=>{

    html+=`

    <div class="skill">

    <div class="skill-header">
    <i class="${skill.icon}"></i>
    <span>${skill.name}</span>
    </div>

    <div class="skill-bar">
    <div class="skill-progress" data-level="${skill.level}"></div>
    </div>

    </div>

    `;

    });

    html+=`</div>`;

    skillsContainer.innerHTML+=html;

    });
}

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bars = entry.target.querySelectorAll(".skill-progress");

bars.forEach(bar=>{
bar.style.width = bar.dataset.level + "%";
});

}

});

},{threshold:0.3});


document.querySelectorAll(".skill-category").forEach(el=>{
observer.observe(el);
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
},{threshold:0.25});

document.querySelectorAll(".reveal").forEach(el => {
    revealObserver.observe(el);
});