console.log("Append");

const placesList = document.getElementById("places-list");

const li = document.createElement("li");
li.innerText = "Vantaa";

placesList.appendChild(li);

//1. Where to add
const mainContainer = document.getElementById("main-container");

//2. What to be added
const newSection = document.createElement("section");
const newH1 = document.createElement("h1");
newH1.innerText = "Game List";
newSection.appendChild(newH1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Football";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Cricket";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Base Ball";
ul.appendChild(li3);

newSection.appendChild(ul);
mainContainer.appendChild(newSection);

// set inner HTML directly
const sectionLanguage = document.createElement("section");
sectionLanguage.innerHTML = `<h1>Programming Languages</h1> <ul> <li>C++</li> <li>JavaScript</li> <li>Java</li> <li>Python</li>  <li>C</li>  </ul>`;
mainContainer.append(sectionLanguage);
