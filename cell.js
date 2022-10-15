function Cell(x, y, w) {

    // Cell coords
    this.x = x;
    this.y = y;

    // Cell width
    this.w = w;

}

Cell.prototype.show = function() {
    stroke(5);

    
    if (this.alive) {
        fill(0);
    } else {
        fill(255);
    }
    // Make square
    rect(this.x, this.y, this.w, this.w)


}

