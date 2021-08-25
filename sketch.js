var snow_background, snow;
var santa, santa_1;
function preload(){
  snow_background = loadAnimation("background_snow.jpg")
  santa_1 = loadAnimation("santa_reindeers.png")
}

function setup() {
  createCanvas(1000,800);
  snow = createSprite(950, 300, 900, 100);
  snow.addAnimation("snowbg", snow_background)
santa = createSprite(700,500)
santa.addAnimation("santadeers", santa_1)
santa.velocityX = -3;
}

function draw() {
  //background(255,255,255);  
  drawSprites();
}