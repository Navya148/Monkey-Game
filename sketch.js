var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup, ground
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 450);
  
monkey = createSprite(80,370,50,50)
monkey.addAnimation("monkey", monkey_running)
monkey.scale = 0.2
  
ground = createSprite(250,430,1000,10)
ground.x = ground.width /2;
  
}


function draw() {
  background("turquoise")
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 180, 50)
  
   ground.velocityX = -4;
 
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")) {
        monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(ground);
  
  spawnBanana()
  spawnObstacle()
  
  drawSprites()
}



function spawnBanana(){
 if (frameCount % 80 === 0){ 
   banana = createSprite(400,165,10,40)
   banana.y = Math.round(random(120,200))
   banana.addImage(bananaImage)
   banana.scale = 0.17
   banana.velocityX = -3
   banana.lifetime = 140
   
  // bananaGroup.add(banana)
 }
}

function spawnObstacle(){
  if (frameCount % 300 === 0){
   obstacle = createSprite(400,165,10,40)
   obstacle.y = Math.round(random(120,200))
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.2
   obstacle.velocityX = -3;
   obstacle.lifetime = 140;
    
   // obstacleGroup.add(obstacle) 
    
  }
}

  
  
  






