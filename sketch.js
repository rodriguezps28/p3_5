var textarea=document.getElementById("text_area")
var textarea2=document.getElementById("text_area_2") 
var textarea3=document.getElementById("text_area_3") 

var myFont;

function preload(){
  myFont=loadFont("font/Panchang-Bold.otf");
}

function setup() {
  var c=createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() { 
  textFont(myFont);
  background("rgba(255, 120, 120, 1)");
  textSize(15); 

  noStroke();
  fill(0);
  //estilo h1  
  textAlign(LEFT, CENTER);
  text(textarea.value,10,height/2-100);

  //estilo main
  noFill();
  stroke(0);
  strokeWeight(0.5);
  textAlign(RIGHT, CENTER); 
  text(textarea2.value,390,height/2);

  //estilo h2
  fill(0);
  noStroke();
  textAlign(RIGHT, CENTER); 
  text(textarea3.value,390,height/2+100);
}
