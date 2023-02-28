const grid = document.querySelector("#grid");
let rows = 16;
let cols = 16;
let height = 34.0625;
let width = 34.0625;
let windowSize = 575;
let color = "black";
// const div = document.createElement('div');
grid.style.setProperty("--grid-rows", rows);
grid.style.setProperty("--grid-cols", cols);
grid.style.setProperty("--height", height + "px");
grid.style.setProperty("--width", width + "px");

let slider = document.getElementById("myRange");
let output = document.getElementById("value");

// Update the current slider value (each time you drag the slider handle)

function createGrid(rows, cols) {
	for (let i = 0; i < rows * cols; i++) {
		const div = document.createElement("div");
		div.classList.add("cell");
		// div.textContent = "a";
		grid.appendChild(div);
		div.addEventListener("mouseover", () => setColor(event));
	}
}
function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
function genHexColor() {
	return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}

function setColor(event) {
	if (color == "black") {
		event.target.style.backgroundColor = "black";
	}
	if (color == "rgb") {
		event.target.style.backgroundColor = genHexColor();
	}
}

const rgbButton = document.querySelector("#rgb");
rgbButton.addEventListener("click", function () {
	resetButton.classList.remove("active");
	blackButton.classList.remove("active");
	rgbButton.classList.add("active");
	color = "rgb";
	// let cell = grid.children;
	// for (let i = 0; i < rows*cols; i++) {
	//     cell[i].style.backgroundColor = '#e4e4e4';
	// }
});

const blackButton = document.querySelector("#black");
blackButton.classList.add("active");
blackButton.addEventListener("click", function () {
	rgbButton.classList.remove("active");
	resetButton.classList.remove("active");
	blackButton.classList.add("active");
	color = "black";
	// let cell = grid.children;
	// for (let i = 0; i < rows*cols; i++) {
	//     cell[i].style.backgroundColor = '#e4e4e4';
	// }
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
	resetButton.classList.add("active");
	let cell = grid.children;
	for (let i = 0; i < rows * cols; i++) {
		cell[i].style.backgroundColor = "#e4e4e4";
	}
	resetButton.classList.remove("active");
});
slider.oninput = function () {
	rows = this.value;
	cols = rows;
	output.innerHTML = this.value;
	removeAllChildNodes(grid);
	height = windowSize / rows;
	height = height - 2;
	width = height;
	grid.style.setProperty("--grid-rows", rows);
	grid.style.setProperty("--grid-cols", cols);
	createGrid(rows, cols);
	grid.style.setProperty("--height", height + "px");
	grid.style.setProperty("--width", width + "px");
};

createGrid(rows, cols);
