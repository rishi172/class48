var robber;
//var security1,security2,security3;
var jewel,jewel1,jewel2,jewel3;
var laser,laser1,laser2,laser3,laser4,laser5,laser6,laser7i,laser7,laser8,laser9,laser10,laser11,laser12;
var atomBomb,atomBomb1,atomBomb2;
var thief1;
var gameState=0;
var score=0;



function preload(){
  thief1=loadImage("thiefRemoved.png");
  laser=loadImage("laserBeam.png");
  jewel1=loadImage("jewel.png");
  laser7i=loadImage("laserVert.png");
  atomBomb=loadImage("bullet.png");
}

function setup() {
  createCanvas(1500,825);
  //background("yellow")

  //LEVEL1
  
   robber=createSprite(100, 800, 50, 50);
   laser1=createSprite(400,700,900,30);
   laser2=createSprite(800,500,900,30);
   laser3=createSprite(1200,300,900,30);
   laser4=createSprite(600,600,900,30);
   laser5=createSprite(1000,400,900,30);
   jewel=createSprite(1400,200,50,50);
   
   robber.shapeColor=("black");
   laser1.shapeColor=("red");
   laser2.shapeColor=("red");
   laser3.shapeColor=("red");

    robber.addImage(thief1);
    laser1.addImage(laser);
    laser2.addImage(laser);
    laser3.addImage(laser);
    laser4.addImage(laser);
    laser5.addImage(laser);
    jewel.addImage(jewel1);
    
  laser1.scale=0.65;
  laser2.scale=0.65;
  laser3.scale=0.65;
  laser4.scale=0.65;
  laser5.scale=0.65;
  jewel.scale=0.65;
  robber.scale=0.25;
  
 
  robber.debug=true;
  laser1.debug=true;
  robber.setCollider("rectangle",0,0,robber.width-100,robber.height-30)
  laser1.setCollider("circle",50,-15,120);

  laser2.debug=true;
  laser2.setCollider("circle",50,-15,120);

  laser3.debug=true;
  laser3.setCollider("circle",50,-15,120);
  
  laser4.debug=true;
  laser4.setCollider("circle",50,-15,120);

  laser5.debug=true;
  laser5.setCollider("circle",50,-15,120);

  edges = createEdgeSprites();

  laser1.velocityX=10;
  laser2.velocityX=11;
  laser3.velocityX=12;
  laser4.velocityX=13;
  laser5.velocityX=14;


//LEVEL2
  laser6=createSprite(400,100,50,50);
  laser7=createSprite(700,100,50,50);
  laser8=createSprite(1000,100,50,50);
  laser9=createSprite(1400,100,150,150);
  //laser10=createSprite(800,100,50,50);

  laser6.addImage(laser7i);
  laser7.addImage(laser7i);
  laser8.addImage(laser7i);
  laser9.addImage(laser7i);
  //laser10.addImage(laser7i);

  laser6.scale=2;
  laser7.scale=2;
  laser8.scale=2;
  laser9.scale=2;
  //laser10.scale=2;

  laser6.velocityY=10;
  laser7.velocityY=11;
  laser8.velocityY=12;
  laser9.velocityY=13;
  //laser10.velocityY=10;

  laser6.debug=true;
  laser7.debug=true;
  laser8.debug=true;
  laser9.debug=true;
  laser6.setCollider("circle",10,10,30);
  laser7.setCollider("circle",10,10,30);
  laser8.setCollider("circle",10,10,30);
  laser9.setCollider("circle",10,10,30);

  atomBomb1=createSprite(900,0,50,100);
  atomBomb2=createSprite(1200,0,50,100);
  atomBomb3=createSprite(550,0,50,100);
  atomBomb1.addImage(atomBomb);
  atomBomb2.addImage(atomBomb);
  atomBomb3.addImage(atomBomb);

  atomBomb1.velocityY=10;
  atomBomb2.velocityY=10;
  atomBomb3.velocityY=10;
  atomBomb1.debug=true;
  atomBomb2.debug=true;
  atomBomb3.debug=true;



  jewel3=createSprite(1400,200,50,50);
  jewel3.addImage(jewel1);
  
  jewel2=createSprite(1400,700,50,50);
  jewel2.addImage(jewel1);
  jewel2.debug=true;
  jewel3.debug=true;
  jewel2.setCollider("circle",10,-130,90);
  jewel3.setCollider("circle",10,-130,90);
}

function draw() {
  background("yellow")
  fill(0);
  textSize(30);
 text("score "+score,100,100);
 score=score+Math.round(getFrameRate()/60);
 console.log(frameRate);
 
  //level1
  if(gameState===0){

    //background("grey"); 
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  laser5.bounceOff(edges);
  laser6.bounceOff(edges);
  laser7.bounceOff(edges);
  laser8.bounceOff(edges);
  laser9.bounceOff(edges);
  atomBomb1.bounceOff(edges);
  atomBomb2.bounceOff(edges);
  atomBomb3.bounceOff(edges);
 
 
  move();

    laser6.visible=false;
    laser7.visible=false;
    laser8.visible=false;
    laser9.visible=false;
   atomBomb1.visible=false;
   atomBomb2.visible=false;
   atomBomb3.visible=false;
   jewel2.visible=false;
   jewel3.visible=false;


  if(robber.isTouching(laser1)||robber.isTouching(laser2)||robber.isTouching(laser3)||robber.isTouching(laser4)||robber.isTouching(laser5)){
      gameState=1;
      
    }

    if(robber.isTouching(jewel)){
      gameState=2;
      robber.x=100;
      robber.y=800;
     
    }
}
//end state
  if(gameState===1){
    background("blue")
    stroke(0);
    fill(0);
    textSize(30);
    text("Thief is Caught",750,400);
    text("Press R to Restart!",50,50);

   laser1.velocityX=0;
   laser2.velocityX=0;
   laser3.velocityX=0;
   laser4.velocityX=0;
   laser5.velocityX=0;
   robber.velocityX=0;
   robber.velocityY=0;
   
   
  }
  // level 2 scond screen
  if(gameState===2){
   
    level2();
  }
  if(keyDown("r") && gameState===1){
    gameState=0;
    
    
      }
   

  
  
  drawSprites();
}


function level2(){
  //background("yellow");
 
  edges=createEdgeSprites();
   
  laser1.destroy();
  laser2.destroy();
  laser3.destroy();
  laser4.destroy();
  laser5.destroy();
 
  jewel.destroy();
  
  move();
  



 
  laser6.visible=true;
  laser7.visible=true;
  laser8.visible=true;
  laser9.visible=true;
  atomBomb1.visible=true;
   atomBomb2.visible=true;
   atomBomb3.visible=true;
 
 jewel2.visible=true;
 jewel3.visible=true;



  laser6.bounceOff(edges);
  laser7.bounceOff(edges);
  laser8.bounceOff(edges);
  laser9.bounceOff(edges);
 

 

  atomBomb1.bounceOff(edges);
  atomBomb2.bounceOff(edges);
  atomBomb3.bounceOff(edges);
 

    //laser6.velocityY=10;
    //laser7.velocityY=11;
    //laser8.velocityY=12;
    //laser9.velocityY=13;


    if(keyDown("R")){
      gameState=0;
      
      
        }
   
    
     if(robber.isTouching(laser6)||robber.isTouching(laser7)||robber.isTouching(laser8)||robber.isTouching(laser9)||robber.isTouching(atomBomb1)||robber.isTouching(atomBomb2)||robber.isTouching(atomBomb1)){
      gameState=1;

     }

     if(robber.isTouching(jewel2)){
      
     jewel2.destroy();
    }
    
    if(robber.isTouching(jewel3)){
     
     
     gameState=4;

     
    }
    

if(gameState===4){
  
  textSize(30);
      fill("red");
     text("All jewels are stolen, You need a strong security system", 200,200);
  
  laser6.velocityY=0;
     laser7.velocityY=0;
     laser8.velocityY=0;
     laser9.velocityY=0;
     atomBomb1.velocityY=0;
  atomBomb2.velocityY=0;
  atomBomb3.velocityY=0;
     
     //robber.velocityX=0;
     //robber.velocityY=0;
     
     
}
  
}

function move(){
  if(keyDown(UP_ARROW)){
    robber.y-=10;
  }
  if(keyDown(DOWN_ARROW)){
    robber.y+=10;
  }
  if(keyDown(RIGHT_ARROW)) {
    robber.x+=10
  }
  if(keyDown(LEFT_ARROW)){
    robber.x-=10
  }
}