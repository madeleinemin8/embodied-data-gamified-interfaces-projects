class WPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(){
    stroke('red');
    strokeWeight(9);
    point(this.x, this.y);
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
}
let map;
let imessage;
let snap;
let canvas;
let zoom;
let smoke;
let locations = [];
let w = 1000;
let h = 700;
let timer = 100;
let clickcount=0;
let m1, m2, m3, m4, m5, m6;
let c1, c2, c3, c4, c5, c6;
let smokeoff = false;
let mcount = 0;
let ccount = 0;
let capture;

function preload() {
  map = loadImage('worldmap.png');
  imessage = loadImage('imessage.png');
  snap = loadImage('snapchat.png');
  canvas = loadImage('canvas.jpg');
  zoom = loadImage('zoom.jpg');
  smoke = loadImage('smoke2.png')
  
  m1 = loadImage('m1.png');
  m2 = loadImage('m2.png');
  m3 = loadImage('m3.png');
  m4 = loadImage('m4.png');
  m5 = loadImage('m5.png');
  m6 = loadImage('m6.png');
  
  c1 = loadImage('c1.png');
  c2 = loadImage('c2.png');
  c3 = loadImage('c3.png');
  c4 = loadImage('c4.png');
  
  //North America
  locations[0] = new WPoint(w/7, h/3);
  locations[1] = new WPoint(w/7, h/3+h/12);
  locations[2] = new WPoint(w/8+w/100, h/3+h/24); //chicago?
  locations[3] = new WPoint(.23*w, .37*h); //chicago?
  locations[4] = new WPoint(.27*w, .38*h);
  locations[5] = new WPoint(.26*w, .39*h);
  locations[6] = new WPoint(.25*w, .46*h);
  locations[7] = new WPoint(.20*w, .50*h);
  locations[8] = new WPoint(.27*w, .35*h);
  locations[9] = new WPoint(.21*w, .40*h);
  locations[10] = new WPoint(.21*w, .445*h);
  
  //Europe
  locations[11] = new WPoint(.48*w, .325*h);
  locations[12] = new WPoint(.465*w, .30*h);
  locations[13] = new WPoint(.575*w, .27*h);
  locations[14] = new WPoint(.46*w, .38*h);
  locations[15] = new WPoint(.55*w, .38*h);
  
  //South America
  locations[16] = new WPoint(.27*w, .57*h);
  locations[17] = new WPoint(.26*w, .65*h);
  locations[18] = new WPoint(.31*w, .775*h);
  locations[19] = new WPoint(.35*w, .69*h);
  locations[20] = new WPoint(.375*w, .64*h);
  
  //Africa
  locations[21] = new WPoint(.51*w, .64*h);
  locations[22] = new WPoint(.48*w, .57*h);
  locations[23] = new WPoint(.58*w, .63*h);
  locations[24] = new WPoint(.56*w, .52*h);
  locations[25] = new WPoint(.555*w, .445*h);
  
  //Asia
  locations[26] = new WPoint(.66*w, .47*h);
  locations[27] = new WPoint(.67*w, .50*h);
  locations[28] = new WPoint(.69*w, .54*h);
  locations[29] = new WPoint(.79*w, .49*h);
  locations[30] = new WPoint(.81*w, .44*h);
  locations[31] = new WPoint(.79*w, .39*h);
  locations[32] = new WPoint(.85*w, .42*h);
  locations[33] = new WPoint(.82*w, .4*h);
  locations[34] = new WPoint(.805*w, .53*h);
  locations[35] = new WPoint(.75*w, .53*h);
  locations[36] = new WPoint(.77*w, .62*h);
  
  //Australia
  locations[37] = new WPoint(.87*w, .79*h);
  locations[38] = new WPoint(.85*w, .62*h);
}
function setup() {
  createCanvas(w, h);
  
  image(map, 0, 0, w, h);
  image(imessage, w/2 - w/4, h-w/10, w/15, w/15);
  image(snap, w/2 - w/12, h-w/10, w/15, w/15);
  image(canvas, w/2 + w/12, h-w/10, w/15, w/15);
  image(zoom, w/2 + w/4, h-w/10, w/15, w/15);
  
  for(let i=0; i<locations.length; i++){
    locations[i].draw();
  }
  
  capture = createCapture(VIDEO);
  capture.size(100, 100);
  capture.hide();
}

function mouseClicked() {
  //imessage clicked
  clickcount++;
  let random1 = int(random(0, 38));
  let random2 = int(random(0, 38));
  let random3 = int(random(0, 38));
  let random4 = int(random(0, 38));
  
  strokeWeight(2);
  if ((mouseX > (w/2 - w/4)) && (mouseX < (w/2 - w/4 + w/15)) && (mouseY > (h - w/10)) && (mouseY < (h - w/10 + w/15))) {
    stroke(125,243,125);
    line(locations[random1].x, locations[random1].y, locations[random2].x, locations[random2].y);
    mcount++;
  } 
  
  if ((mouseX > (w/2 - w/12)) && (mouseX < (w/2 - w/12 + w/15)) && (mouseY > (h - w/10)) && (mouseY < (h - w/10 + w/15))) {
    stroke(254,247,49);
    line(locations[random1].x, locations[random1].y, locations[random2].x, locations[random2].y);
    image(capture, 10, 0.6*h, 200, 140);
  } 
  
  if ((mouseX > (w/2 + w/12)) && (mouseX < (w/2 + w/12 + w/15)) && (mouseY > (h - w/10)) && (mouseY < (h - w/10 + w/15))) {
    stroke(227,62,50);
    line(locations[random1].x, locations[random1].y, locations[random2].x, locations[random2].y);
    ccount++;
  } 
  
  if ((mouseX > (w/2 + w/4)) && (mouseX < (w/2 + w/4 + w/15)) && (mouseY > (h - w/10)) && (mouseY < (h - w/10 + w/15))) {
    stroke(83,182,251);
    line(locations[3].x, locations[3].y, locations[random1].x, locations[random1].y);
    line(locations[3].x, locations[3].y, locations[random2].x, locations[random2].y);
    line(locations[3].x, locations[3].y, locations[random3].x, locations[random3].y);
    line(locations[3].x, locations[3].y, locations[random4].x, locations[random4].y);
  } 
  
}

function draw() {
  fill(255);
  stroke(255);
  strokeWeight(1);
  rect(0.055*w, 0.045*h, 0.13*w, 0.11*h)
  textAlign(CENTER, CENTER);
  textSize(70);
  stroke(0);
  fill(0);
  text(timer, width/9, height/9);
  if (frameCount % 60 == 0 && timer > 0 && clickcount < 250) { 
    timer --;
  }
  if(timer == 0){
    image(map, 0, 0, w, h);
    textSize(100);
    stroke(0);
    fill(0);
    text("GAME OVER", w/2, h/2);
  }
  

  if(clickcount == 50){
    image(smoke, 0, 0, w, h);
  }
  else if(clickcount == 100){
    image(smoke, 0, 0, w, h);
  }
  else if(clickcount == 200){
    image(smoke, 0, 0, w, h);
  }
  else if(clickcount == 250){
    image(smoke, 0, 0, w, h);
    image(map, 0, 0, w, h);
    textSize(100);
    stroke(0);
    fill(0);
    text("YOU WIN!", w/2, h/2);
  }
  
  if(mcount == 15){
    image(m1, 10, h-160, w/6, 45);
  }
  if(mcount == 30){
    image(m2, 10, h-160, w/6, 45);
  }
  if(mcount == 45){
    image(m3, 10, h-160, w/6, 45);
  }
  if(mcount == 60){
    image(m4, 10, h-160, w/6, 45);
  }
  if(mcount == 75){
    image(m5, 10, h-160, w/6, 45);
  }
  if(mcount == 90){
    image(m6, 10, h-160, w/6, 45);
  }
  
  if(ccount == 15){
    image(c1, 10, h-160, w/5, 40);
  }
  if(ccount == 30){
    image(c2, 10, h-160, w/5, 40);
  }
  if(ccount == 45){
    image(c3, 10, h-160, w/5, 40);
  }
  if(ccount == 60){
    image(c4, 10, h-160, w/5, 40);
  }
}