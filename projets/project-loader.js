const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");

console.log("projectId:", projectId);
console.log("projectDetails:", projectDetails);

const data = projectDetails[projectId];
console.log("data:", data);


if(!data){
    document.body.innerHTML = "<h1>Projet introuvable</h1>";
}

document.getElementById("projectTitle").textContent = data.title;
document.getElementById("projectContext").textContent = data.context;
document.getElementById("projectDescription").textContent = data.description;
document.getElementById("projectImage").src = data.image;
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