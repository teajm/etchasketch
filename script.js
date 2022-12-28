const grid = document.querySelector('#grid');
let rows = 16;
let cols = 16;
let gridArray = [];
const div = document.createElement('div');
grid.style.setProperty('--grid-rows', rows);
grid.style.setProperty('--grid-cols', cols);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  rows = this.value;
  cols = rows;
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
}

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