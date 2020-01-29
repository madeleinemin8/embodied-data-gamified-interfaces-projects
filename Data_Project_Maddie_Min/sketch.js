var rotation;
var friend;
var madfriend;
var button;
var hourglass;
var flame;
var smile;
var hundred;
var yellowheart;
var redheart;
var happy;
var phone;
var heartbitmoji;
var heartbitmoji2;
var seasonalbitmoji;
let capture;
let timecount = 0;
let timer = 24;
let daycount = 0;
let timerstop = false;
let bitmojichanged = false;
let avenir;

function preload() {
  avenir = loadFont('avenir.otf');
}

function setup() {
  createCanvas(600, 600);
  background(254,247,49);
  fill(0);
  textFont(avenir);
  friend = loadImage('friend.PNG');
  madfriend = loadImage('friendmad.PNG');
  heartbitmoji = loadImage('heartbitmoji.PNG');
  heartbitmoji2 = loadImage('heartbitmoji2.PNG');
  seasonalbitmoji = loadImage('seasonalbitmoji.PNG');
  button = loadImage('capture-button.png');
  hourglass = loadImage('hourglass.png');
  flame = loadImage('flame.png');
  smile = loadImage('smile.png');
  hundred = loadImage('hundred.png');
  yellowheart = loadImage('yellowheart.png');
  redheart = loadImage('redheart.png');
  phone = loadImage('phone.png');
  imageMode(CENTER);
  happy = true;
  capture = createCapture(VIDEO);
}

function draw() {
  background(254,247,49);
  if(happy == true && bitmojichanged == false){
    image(friend, 300, 140, 100, 100);
  }
  if(happy == false){
    image(madfriend, 300, 150, 100, 100);
    textSize(50);
    text("Streak broken.", 340, 50);
  }
  image(phone, 300, 395, 220, 380);
  if (capture.loadedmetadata) {
    let c = capture.get(0, 0, 180, 340);
    image(c, 300, 400);
  }
  image(button, 300, 545, 50, 50);
  
  if (frameCount % 60 == 0 && timer > 0 && timerstop == false) { 
    timer --; 
    timecount ++;
  }
  if(timer <= 4 && timer != 0){
    image(hourglass, 480, 500, 70, 90);
    image(hourglass, 120, 500, 70, 90);
    textSize(40);
    text("Don't lose your streak!", 340, 50);
  }
  if (timer == 0) {
    textSize(50);
    text("Streak broken.", 340, 50);
    if(timerstop == false){
      print("Length of video collected and sent to Snap Inc: %d", timecount);
    timerstop = true;
    }
    happy = false;
  }
  
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, 80, 70);
  
  if(happy == true){
    textSize(50);
    text(daycount, 450, 200);

    if(daycount >= 3 && daycount < 10){ //display flame emoji
      textSize(70);
      image(flame, 500, 200, 40, 40);
    }
    if(daycount >= 10 && daycount < 100){ //display smile emoji
      image(smile, 500, 200, 40, 40);
    }
    if(daycount >= 100 && daycount < 200){ //display one hundred emoji
      image(hundred, 530, 200, 40, 40);
      image(seasonalbitmoji, 300, 140, 100, 100);
      bitmojichanged = true;
    }
    if(daycount >= 200 && daycount < 365){ //display yellow heart emoji
      image(yellowheart, 530, 200, 40, 40);
    }
    if(daycount >= 365 && daycount < 400){ //display red heart emoji
      image(redheart, 530, 200, 40, 40);
      image(heartbitmoji, 300, 140, 100, 100);
    }
    if(daycount > 400){
      print("Length of video collected and sent to Snap Inc: %d", timecount);
      image(heartbitmoji2, 300, 140, 100, 100);
    }
  }
  
}

function mousePressed(){
  if((mouseX < 330 && mouseX > 270) && (mouseY < 575 && mouseY > 515)){
    print("Nice snap");
    happy = true;
    timer = 24;
    daycount++;
  }
}