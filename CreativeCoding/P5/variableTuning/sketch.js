function setup() {
  //runs one time
  createCanvas(windowWidth, windowHeight);
  fill("red");
  strokeWeight(1);
}

function draw() {
  //runs in a loop

  var num = 10; //num squares
  var sideLen = windowWidth / num; //side length of each square

  for (var y = 0; y < windowHeight; y += sideLen) {
    for (var x = 0; x < windowWidth; x += sideLen) {
      quad(x, y, x + sideLen, y, x + sideLen, y + sideLen, x, y + sideLen);
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}