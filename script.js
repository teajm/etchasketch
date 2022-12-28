const grid = document.querySelector('#grid');
let rows = 16;
let cols = 16;
let gridArray = [];
const div = document.createElement('div');
grid.style.setProperty('--grid-rows', rows);
grid.style.setProperty('--grid-cols', cols);

createGrid =  () =>{
    for( let i = 0; i < rows*cols; i++){
            const div = document.createElement('div');
            // div.textContent = "a";
            grid.appendChild(div);
            div.addEventListener('mouseover', () => setColor(event));
    }
}


function setColor(event){
    event.target.style.backgroundColor = 'black';
    // console.log(e);
}
createGrid();