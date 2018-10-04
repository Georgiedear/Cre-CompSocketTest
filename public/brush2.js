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
    //Tails of the shooting starts
  //  fill(mouseX, mouseY, 190, 110);
  //  triangle(mouseX, mouseY, 30, 5, 15, 5);

    //The stars
  //  fill(mouseX, mouseY, 140);
  //  ellipse(mouseX, mouseY, 10, 50);
    line(mouseX, mouseY, pmouseX, pmouseY);
    //ellipse(mouseX, mouseY,pmouseX, pmouseY);

  }
