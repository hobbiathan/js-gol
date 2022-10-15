// runner.js

function makeGrid(columns, rows) {
    // Array of arrays, cell position accessible via grid[x][y]
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
}

var grid;
var cols = 10;
var rows = 10;


function setup() {
    // Setup canvas size to render
    createCanvas(200, 200);
    grid = makeGrid(cols, rows)

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            // Initialize all positions as new cell
            grid[i][j] = new Cell(); 
        }
    }
}  

function draw() {
    background(0);

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}
