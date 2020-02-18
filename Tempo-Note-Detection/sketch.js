// Global variable to store the classifier
let classifier;

// Label (start by showing listening)
let label = "listening";

// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/hR-Z1i8s/';


function preload() {
  classifier = ml5.soundClassifier(soundModelURL + 'model.json');
  half = loadImage('half.png');
  quarter = loadImage('quarter.png');
  eighth = loadImage('eighth.png');
}

function setup() {
  createCanvas(1000, 900);
  classifier.classify(gotResult);
  imageMode(CENTER);
}

function draw() {
  background(255);
  fill(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height - 100);
  if(label == "half note"){
    image(half, width / 2, height / 2, 140, 300);
  }
  if(label == "quarter note"){
    image(quarter, width / 2, height / 2, 140, 300);
  }
  if(label == "eighth note"){
    image(eighth, width / 2, height / 2, 250, 250);
  }
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}