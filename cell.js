function Cell(x, y, w) {

    // Cell coords
    this.x = x;
    this.y = y;

    // Cell width
    this.w = w;

    // Random cells will be dead and alive on load
    if (random(1) < 0.31417) {
        this.alive = true;
    } else {
        this.alive = false;
    }
}

Cell.prototype.show = function() {
    stroke(5);

    
    if (this.alive) {
        fill(random(255), random(255), random(255));
    } else {
        fill(255);
    }
    // Make square
    rect(this.x, this.y, this.w, this.w)


}

