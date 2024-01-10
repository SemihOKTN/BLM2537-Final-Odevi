const listView = document.querySelector("#list-view");
const gridView = document.querySelector("#grid-view");

const projectsSection = document.querySelector("#projects .items");
const projects = document.querySelectorAll("#projects .item");

listView.addEventListener("click", function() {
    projectsSection.classList.remove("grid-view");
    projectsSection.classList.add("list-view");
    for (let x of projects) {
        x.classList.add("listview");
    }
})

gridView.addEventListener("click", function() {
    projectsSection.classList.remove("list-view");
    projectsSection.classList.add("grid-view");
    for (let x of projects) {
        x.classList.remove("listview");
    }
})