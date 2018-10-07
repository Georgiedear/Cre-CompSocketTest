
var canvas;
function setup() {
canvas = createCanvas(windowWidth,windowHeight);
canvas.style('display', 'block');
canvas.position(0,0);
  background (255);

}
  //---------------------------------------------------------------


//--------------------------------------------------------------

function touchMoved () {
  noStroke();

  fill(113, random(mouseX), random(mouseY));

  ellipse(mouseX, mouseY, 30, 30);
  //ellipse(mouseX, mouseY,pmouseX, pmouseY);
  return false;
}

function windowResized() {

resizeCanvas(windowWidth, windowHeight);
}
//---------------------------------------------------------------
