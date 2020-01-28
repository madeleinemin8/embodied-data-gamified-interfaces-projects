var rotation;
var friend;
let capture;

function setup() {
  createCanvas(600, 600);
  background(254,247,49);
  fill(255);
  friend = loadImage('friend.PNG');
  imageMode(CENTER);
  image(friend, 200, 200, 40, 40);
  capture = createCapture(VIDEO);
}

function draw() {
  if (capture.loadedmetadata) {
    let c = capture.get(0, 0, 120, 200);
    image(c, 300, 400);
  }
}

function mousePressed(){
}

function mouseReleased(){
}

function keyPressed(){
  if(key == 'r'){
  }
}