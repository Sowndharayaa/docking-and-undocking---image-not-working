const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  var spacecraft_1img, spacecraft_2img,spacecraft_3img, spacecraft_4img;
  var x,y,w,h;
  var backgroundimg;
  //without fire
  var spacecraft_1
  //with fire on both sides
  var spacecraft_2
  //with fire on left
  var spacecraft_3
  //with fire on right
  var spacecraft_4
  var iss,issimg;
  var spacecraft;
function preload(){
  spacecraft_1 = loadImage("spacecraft1.png")
  spacecraft_2img = loadImage("spacecraft2.png")
  spacecraft_3img = loadImage("spacecraft3.png")
  spacecraft_4img = loadImage("spacecraft4.png")
  backgroundimg = loadImage("spacebg.jpg" )
  issimg = loadImage("iss.png")

}
function setup(){
  
  createCanvas(1500,700);
 // rectMode(CENTER);
//	engine = Engine.create();
//	world = engine.world;

  spacecraft = createSprite(1000,500,0,0)
  spacecraft.addImage("spacecraft",spacecraft_1);
  spacecraft.scale = 0.2
  iss = createSprite(500,300,0,0)
  iss.addImage("iss",issimg);

  hasDocked = false;

}
function draw() {
  background(backgroundimg); 
  //Engine.update(engine)
  fill(255, 60, 100);
  text(" ("+ mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();

if(!hasDocked){
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
    spacecraft.addImage("up",spacecraft_2img);
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft_3img);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft_4img);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft_2img);
      spacecraft.y = spacecraft.y+2;
  }
}

  drawSprites();

  
}


