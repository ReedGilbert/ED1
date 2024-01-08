function setup() { //runs one time
createCanvas(720,720);
  background(255, 0, 0);
  fill("yellow");
  strokeWeight(8);
}

function draw() { //runs in a loop

  translate(60,60); //resets orgin point
  
    quad(
      0,0,
      300,0,
      300,300,
      0,300
      );
    quad(
      300,0,
      600,0,
      600,300,
      300,300
      );//move 300 pixels in the x
    quad(
        0,300,
        300,300,
        300,600,
        0,600
        );
      quad(
        300,300,
        600,300,
        600,600,
        300,600
        );//move 300 pixels in the y
}