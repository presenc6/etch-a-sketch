const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh")

const gridSize = prompt("Pick a Grid Size (Maximum: 100)");
const color = prompt("Pick a Color");

if(gridSize > 100) {
    location.reload();
}

for(let j = 0; j < gridSize * gridSize; j++) {
    const newDiv = document.createElement("div");
    newDiv.className = "divs";
    container.appendChild(newDiv);
    newDiv.style.width = `${698 / gridSize}px`;
    newDiv.style.height = `${698 / gridSize}px`;
}

const divs = document.querySelectorAll(".divs");

divs.forEach(div => {
    div.addEventListener("mousemove", (e) => {
        e.target.style.backgroundColor = `${color}`;
    })
})

refreshBtn.addEventListener("click", (e) => {
    location.reload();
})


