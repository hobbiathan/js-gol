// runner.js

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function makeGrid(columns, rows) {
    // Array of arrays, cell position accessible via grid[x][y]
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;
var cols;
var rows;

// cell size in pixels
var w = 20;


function setup() {
    var canvas = createCanvas(120, 260);
    canvas.parent('sketch-holder'); 
    // Setup canvas size to render
     // Calculate # of columns and rows, make sure it's an integer
    cols = floor(width / w);
    rows = floor(height / w);

    grid = makeGrid(cols, rows);

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            // Initialize all positions as new cell
            // Calculate pixel location
            grid[i][j] = new Cell(i * w, j * w, w); 
            
        }
    }
}  

function draw() {
    background(0);
    regenerate();
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
    sleep(2000);
}

function regenerate() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            // Randomly kill and revive different cells
            // This logic is just ripped out of the cell initialization
            // Also egreigious inefficient
            if (random(1) < 0.31415) {
                grid[i][j].alive = true; 
            } else {
                grid[i][j].alive = false;
            }
        }
    }
}
