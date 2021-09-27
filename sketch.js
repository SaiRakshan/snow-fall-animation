var snow1_image, snowMan

function preload(){
  snow1_image = loadImage("snow1.jpg")
  snowMan = loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  snow = createSprite(400, 200, 50, 50);
  snow.addImage(snowMan);
  snow.scale = 0.10
}

function draw() {
  background(snow1_image);  
  if(keyDown("down")){
    snow.y = snow.y+4
  }
  if(keyDown("up")){
    snow.y = snow.y-4
  }
  if(keyDown("right")){
    snow.x = snow.x+4
  }
  if(keyDown("left")){
    snow.x = snow.x-4
  }
  drawSprites();
}






