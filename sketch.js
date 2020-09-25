var covidbg;
var covidpic1;
var covidpic2;
var playerCount;
var allPlayers;
var database;
var form, player,game;

function preload(){
covidbg = loadImage("coronafighters1.png");
  covidpic = loadImage("covidpic.jpg");
  covidpic2 = loadImage("covidpic2.jpeg");
}

function setup() {
  canvas = createCanvas(1500,1200);
  database = firebase.database();
  
  covid = createSprite(750,120,1500,1500);
  covid.addImage(covidbg);
  covid.scale=1;

  pic1 = createSprite(1300,120,1400,1200);
  pic1.addImage(covidpic);
  pic1.scale=1.5;

  pic2 = createSprite(120,120,1400,1200);
  pic2.addImage(covidpic2);
  pic2.scale=0.5;
  
}

function draw() {
  background("white"); 
 
  drawSprites();
}