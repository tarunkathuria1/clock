var h,m,s;
function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
push();
rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)

  arc(200, 200, 10, 10, stop)
}
