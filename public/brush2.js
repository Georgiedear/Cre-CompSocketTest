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
    noStroke();

  fill(random(mouseX),random(mouseY),112);

    rect(mouseX, mouseY, 20, 20);
    //ellipse(mouseX, mouseY,pmouseX, pmouseY);
  }
