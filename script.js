const containerMain = document.querySelector("#containerMain");
const width = 500;
const height = 500;
let xAxis = 50;
let yAxis = 50;
const createGrid = document.querySelector("#createGrid");
const rainbowButton = document.querySelector("#rainbowButton");
let toggle = false;

function createArea(xAxis,yAxis) {

    for (let i = 1; i <= (xAxis * yAxis); i++ ) {
        //creates an individual box
        const singleGrid = document.createElement("div");
        singleGrid.style.width = `${width/xAxis}px`;
        singleGrid.style.height = `${height/yAxis}px`;
        singleGrid.classList.add("white");

        //puts it into the box 
        containerMain.appendChild(singleGrid);
    };
};
console.log(createArea(xAxis,yAxis));  //activate function createArea()



function addEventToGrids() {
    let grids = document.querySelectorAll('div');
    console.log(grids.length);
    for (let a = 0; a < grids.length; a++) {
        grids[a].addEventListener('mouseover',changeColor);
    }
}

function changeColor() {
    this.style.backgroundColor = 'black';
}

addEventToGrids();  //put Event listeners to newly created divs.

function deleteGrids() {
    let grids = document.querySelectorAll('div');
    for (let a = 0; a < grids.length; a++) {
        grids[a].remove();
    }
}

function newGrid(newGridSize) {
    deleteGrids();
    newGridSize = parseInt(prompt("Choose a new grid size (max: 100)"));
    while (!(newGridSize >= 1 && newGridSize <= 100) && newGridSize !== null) {
        newGridSize = prompt("Error : choose smaller grid size (max: 100)");
    }


    createArea(newGridSize,newGridSize);
    addEventToGrids();
}

createGrid.addEventListener('click', newGrid);

function changeColorRainbow(){
    let r = Math.floor((Math.random() * 255)+1); //random number 1 to 255
    let g = Math.floor((Math.random() * 255)+1);
    let b = Math.floor((Math.random() * 255)+1);
    console.log(`background-color:rgb(${r},${g},${b})`);
    this.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function activateRainbowMode() {
    if (toggle === false) {
        let grids = document.querySelectorAll('div');
        for (let a = 0; a < grids.length; a++) {
            grids[a].removeEventListener('mouseover',changeColor);
            grids[a].addEventListener('mouseover',changeColorRainbow);
        }
        toggle = true;
        rainbowButton.textContent = 'Rainbow Mode : ON';
        return;
    }
    if (toggle === true) {
        let grids = document.querySelectorAll('div');
        for (let a = 0; a < grids.length; a++) {
            grids[a].removeEventListener('mouseover',changeColorRainbow);
            grids[a].addEventListener('mouseover',changeColor);
        }
        toggle = false;
        rainbowButton.textContent = 'Rainbow Mode';
        return;
    }

    
}

rainbowButton.addEventListener('click', activateRainbowMode);



