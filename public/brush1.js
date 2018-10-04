
var x;
var y;
//var socket;
function setup() {
  createCanvas(windowWidth,windowHeight);

  background (255);
  noStroke ();
  textSize(50);
  fill(230);
  text('CHEST', windowWidth/2, windowHeight/2);

}
  //---------------------------------------------------------------

function draw () {
  if (mouseIsPressed) {
    brush(mouseX,mouseY);
  }
}
//--------------------------------------------------------------
function brush (x,y) {
  //Tails of the shooting starts
//  fill(mouseX, mouseY, 190, 110);
//  triangle(mouseX, mouseY, 30, 5, 15, 5);

  //The stars
  fill(mouseX, mouseY, 140);
  //ellipse(mouseX, mouseY, 10, 50);

  ellipse(mouseX, mouseY, 50, 50);

}

//---------------------------------------------------------------
