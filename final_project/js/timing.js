// Drawing 1

function setup() {
    createCanvas(windowWidth, windowHeight);

}
var x = 0;
var speed = 8;

function draw() {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    stroke(r, g, b);
    fill(r, g, b);

    strokeWeight(15);
    ellipseMode(CENTER);

    ellipse(x, 17, 40, 30);
    ellipse(x, 50, 40, 30);
    ellipse(x, 80, 40, 30);
    ellipse(x, 110, 40, 30);

    x += speed;
    if ((x > width) || (x < 0)) {
        speed = speed * -1;

    }

}



