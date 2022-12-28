const grid = document.querySelector('#grid');
let rows = 16;
let cols = 16;
let gridArray = [];
grid.style.setProperty('--grid-rows', rows);
grid.style.setProperty('--grid-cols', cols);

createGrid =  () =>{
    for( let i = 0; i < rows*cols; i++){
            const div = document.createElement('div');
            div.textContent = "a";
            grid.appendChild(div);
            
    }
}

createGrid();