const container = document.querySelector(".container");


for(let j = 0; j < 400; j++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.style.width = `${698 / 20}px`;
    newDiv.style.height = `${698 / 20}px`;
}


