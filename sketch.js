const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world,starI,starBody;
var star_option;
var bg,bgI;
var star;
var gameSound;
var fairyI,fairy;
function preload()
{
  fairyI=loadAnimation("fairy1.png","fairy2.png");
  bgI=loadImage("starnight.png");
  starI=loadImage("star.png");
  gameSound=loadSound("JoyMusic.mp3");
   //preload the images here
}

function setup() {
  
 
  createCanvas(windowWidth,521);
    engine=Engine.create();
    world=engine.world;
    
     star_option={
      isStatic:true

    }



    starBody=Bodies.rectangle(width-150,50,50,50,star_option);
    
    World.add(world,starBody);
    
    
    

    bg=createSprite(width/2,height/2,50,50);
    bg.addImage(bgI);
    bg.scale=0.5;
    
    fairy=createSprite(40,height-80,50,50);
    fairy.addAnimation("run",fairyI);
    fairy.scale=0.125;
    
    s=createSprite(width/2,height/2,40,40);
    s.addImage(starI);
    s.scale=0.255;
}


function draw() {
  Engine.update(engine);
  background("black");
  s.x=starBody.position.x;
  s.y=starBody.position.y;
   if(keyDown("LEFT")&& fairy.x<starBody.position.x-80){
     fairy.x=fairy.x-5;
   }
   if(keyDown("RIGHT")&& fairy.x<starBody.position.x-80){
    fairy.x=fairy.x+5;
  }
   if(fairy.x>starBody.position.x-100&& keyDown("down")){
     Matter.Body.setStatic(starBody,false);
   }
   if(starBody.position.y>402){
    Matter.Body.setStatic(starBody,true);
   
  
    
  }
  drawSprites();

}
