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
}