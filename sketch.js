
var cat, catImg1, catImg1
var mouse, mouseImg1, mouseImg2
var bg, bgImg


function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,200,50,50)
    
    mouse= createSprite(100,200,50,50)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width- mouse.width)/2){
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catrunning")
        
    }

    drawSprites();
}


function keyPressed(){

if(keyPressed("left_arrow")){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25
}

  //For moving and changing animation write code here


}
