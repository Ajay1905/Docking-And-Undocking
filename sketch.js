var spaceBg;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var iss;
var hasDocked = false;


function preload() {
 spaceBg = loadImage("images/spacebg.jpg");
 spacecraft1Img = loadImage("images/spacecraft1.png");
 spacecraft2Img = loadImage("images/spacecraft2.png");
 spacecraft3Img = loadImage("images/spacecraft3.png");
 spacecraft4Img = loadImage("images/spacecraft4.png");
 issImg = loadImage("images/iss.png")
}



function setup() {
  createCanvas(windowWidth, windowHeight);
   spacecraft = createSprite(400,700,50,50)
   spacecraft.addImage(spacecraft1Img);
   spacecraft.scale = 0.5;
   iss = createSprite(400,400,50,50);
   iss.addImage(issImg);
   
}

function draw() {
  background(spaceBg);  

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y - 10;

  }
  if(spacecraft.isTouching(iss)){
    fill("Yellow")
    text("Docking Successful", 200, 200);
  }
  drawSprites();
}