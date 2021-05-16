const colors = [
    {
        name: 'red',
        motto: "Rose Red"
    },
    {
        name: 'blue',
        motto: "Ocean Blue"
    },
    {
        name: 'gray',
        motto: "Smoke Gray"
    },
    {
        name: 'green',
        motto: "Grass Green"
    },
    {
        name: 'purple',
        motto: "Deep Purple"
    },
];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton")

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);

function changeColors() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    console.log("randomIndex", randomIndex)
    document.querySelector("body").style.backgroundColor = colors[randomIndex].name;
    document.querySelector("#colorName").textContent = colors[randomIndex].name;
    document.querySelector("#colorDesc").textContent = colors[randomIndex].motto;
}

function addColor() {
    const userInput = document.querySelector(".colorInput");
    
    if(colors.indexOf(userInput.value) === -1) {
        document.querySelector("body").style.backgroundColor = userInput.value;
        colors.push(userInput.value);
        userInput.value = "";
        userInput.focus();
    } else {
        alert("There is already this color!");
    }
}