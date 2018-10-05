function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
strokeWeight(10);

textSize(50);
fill(230);
text('LEGS', windowWidth/2, windowHeight/2);
}


  function draw () {

    if (mouseIsPressed) {
      brush();
    }

  }
  //--------------------------------------------------------------
  function brush () {
noStroke();
fill(random(mouseX), random(mouseY), 110);
  triangle(mouseX, mouseY, pmouseX+20, pmouseY, mouseX+25, mouseY);





  //  triangle(mouseX, mouseY, 30, 5, 15, 5);
  //  ellipse(mouseX, mouseY, 10, 50);
  //  line(mouseX, mouseY, pmouseX, pmouseY);
    //ellipse(mouseX, mouseY,pmouseX, pmouseY);

  }
