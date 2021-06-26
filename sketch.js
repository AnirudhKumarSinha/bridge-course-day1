var timg1,timg2,tximg1,tximg2,cityimg;
var TAX=1
var START=0;
var END=2
var gameState;
var twsound;

function preload(){
  
  timg1=loadImage("t1.jpg")
  timg2=loadImage("t2.jpg")
  cityimg=loadImage("city.jpg")
  tximg1=loadImage("tx1.jpg")
  tximg2=loadImage("tx2.jpg")

 twsound=loadSound("twister.m4a")
 
}



function setup() {
  createCanvas(1000,600)
   score=0
  
   tiger1=createSprite(600,300,20,20)
   tiger1.addImage(timg1)
   tiger1.scale=0.5

   tiger2=createSprite(900,300,20,20)
   tiger2.addImage(timg2)
   tiger2.scale=0.5
   
   taxi1=createSprite(600,500,20,20)
   taxi1.addImage(tximg1)
   taxi1.scale=0.4

   taxi2=createSprite(850,500,20,20)
   taxi2.addImage(tximg2)
   taxi2.scale=0.4

    city=createSprite(100,500,20,20)
    city.addImage(cityimg)
    city.scale=0.5
 

  //using mouse click
   tap=createSprite(500,300,1000,600)
   tap.visible=false;

   
}


function draw() {
 background("white")
  
 
  
  
  //by clicking
  if(mousePressedOver(tap))
    {
       score=score+1
       twsound.play();
       gameState=START
    }
  
   
    if(gameState===START){
      

      tiger1.velocityY=2
      tiger2.velocityY=2

      if(tiger2.isTouching(taxi2)){
        gameState=TAX
        
      }
    }

    if(gameState===TAX){
      tiger1.velocityY=0
      tiger2.velocityY=0
      tiger1.visible=false
      tiger2.visible=false
      taxi2.velocityX=-2.5
      taxi1.velocityX=-2.5

      if(taxi1.isTouching(city)){
        gameState=END
        twsound.play();
      }
    }

    if(gameState===END){
      taxi1.velocityX=0
      taxi2.velocityX=0

      taxi1.visible=false
      taxi2.visible=false

      city.x=500
      city.y=300

      city.scale=1
      
    }
  drawSprites();
}

