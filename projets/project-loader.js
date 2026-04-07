const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");

const data = projectDetails[projectId];

if(!data){
    document.body.innerHTML = "<h1>Projet introuvable</h1>";
}

// IMAGE
if (data.image) {
    document.getElementById("projectImage").src = data.image;
} else {
    document.querySelector(".project-image").style.display = "none";
}

// VIDEO
if (data.video) {
    document.querySelector("#projectVideo source").src = data.video;
    document.getElementById("projectVideo").load();
} else {
    document.querySelector(".project-video").style.display = "none";
}

document.getElementById("projectTitle").textContent = data.title;
document.getElementById("projectContext").textContent = data.context;
document.getElementById("projectDescription").textContent = data.description;
document.getElementById("projectImage").src = data.image;
document.getElementById("projectVideo").src = data.video;
document.getElementById("githubLink").href = data.github;


const stackContainer = document.getElementById("projectStack");

data.stack.forEach(tech=>{
stackContainer.innerHTML += `
<div class="stack-item">
<i class="${tech.icon}"></i>
<span>${tech.name}</span>
</div>
`;
});

const detailsContainer = document.getElementById("projectDetails");

data.technical.forEach(item=>{
detailsContainer.innerHTML += `
<div class="soft-item">
<i class="fa-solid fa-code"></i>
<p>${item}</p>
</div>
`;
});