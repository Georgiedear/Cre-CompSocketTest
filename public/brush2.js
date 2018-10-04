function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
strokeWeight(10);

textSize(50);
fill(230);
text('TORSO', windowWidth/2, windowHeight/2);
}


  function draw () {

    if (mouseIsPressed) {
      brush();
    }

  }
  //--------------------------------------------------------------
  function brush () {

  strokeWeight(2);
  fill(mouseX,mouseY,pmouseX,212);
    rect(mouseX, mouseY, 20, 20);
    //ellipse(mouseX, mouseY,pmouseX, pmouseY);
  }
