
//var socket;
function setup() {
  createCanvas(windowWidth,windowHeight);
  var x;
  var y
  background (0);
  noStroke ();

  //socket = socket.io.connect('http://localhost:3000');
}
  //---------------------------------------------------------------

function draw () {
  if (mouseIsPressed || (mouseButton===LEFT)) {
    brush(mouseX, mouseY);
  }
}
//--------------------------------------------------------------
function brush (x, y) {
  //Tails of the shooting starts
  fill(mouseX, mouseY, 190, 110);
  triangle(mouseX, mouseY, 30, 5, 15, 5);

  //The stars
  fill(mouseX, mouseY, 140, 110);
  ellipse(mouseX, mouseY, 10, 50);
  ellipse(mouseX, mouseY, 50, 10);
}

//---------------------------------------------------------------
function keyPressed() {
  saveFrame ("screenshot.jpg");
}
