
var backgroundImage;

var cat, catImage1, catImage2, catImage3, catImage4;

var mouse, mouseImage1, mouseImage2, mouseImage3,mouseImage4;

function preload() {

    backgroundImage = loadImage("images/garden.png");

    catImage1 = loadAnimation("images/cat1.png");
    catApp = loadAnimation("images/cat2.png","images/cat3.png");
    catImage2 = loadAnimation("images/cat4.png");

    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseTease = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage2 = loadAnimation("images/mouse4.png");
    

}

function setup(){
    createCanvas(600,600);
    
 cat = createSprite(450,550);
 cat.addAnimation("restingCat",catImage1);
 cat.scale=0.1;

 cat.setCollider("circle",0,0,350);
 cat.debug=false;
 
 
 mouse = createSprite(100,550);
 mouse.addAnimation("standingMouse",mouseImage1);
 mouse.scale=0.1;

 mouse.setCollider("circle",0,0,350);
 mouse.debug=false;

}

function draw() {

    background(backgroundImage);
    
    if(cat.x - mouse.x < (cat.width- mouse.width)/2 ) 
        {

        mouse.addAnimation("endingMouse",mouseImage2);
        mouse.changeAnimation("endingMouse");

        cat.addAnimation("endingCat",catImage2);
        cat.changeAnimation("endingCat");

        cat.velocityX=0;
        cat.x=150;

      }

    drawSprites();
      
}

function keyPressed(){

  if(keyCode===LEFT_ARROW){
     mouse.addAnimation("mouseTease",mouseTease);
     mouse.changeAnimation("mouseTease");

     cat.addAnimation("catApp",catApp);
     cat.changeAnimation("catApp");
     cat.velocityX = -2;
     
 }

}
