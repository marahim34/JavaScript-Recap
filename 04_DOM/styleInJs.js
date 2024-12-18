const sections = document.querySelectorAll("section");
console.log(sections);

for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "20px";
  section.style.paddingLeft = "10px";
  section.style.backgroundColor = "lightgrey";
}

const placesContainer = document.getElementById("places-container");

// placesContainer.style.backgroundColor = "lightgreen";

placesContainer.classList.add("yellow-bg");
