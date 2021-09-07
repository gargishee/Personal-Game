const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backg, bgImg;
var enemy, bunny, mouse, unicorn;
var player, PF;
var invisibleGround;

function preload() {
    bgImg = loadImage("backgroundImg.png");
    bunnyImg = loadImage("bunny.png");
    coinImg = loadImage("coin.png");
    enemyImg = loadImage("enemy.png");
    PF = loadImage("PF.png");
    playerRunning = loadAnimation("P1.PNG", "P2.PNG", "P3.PNG");
    loser = loadImage("L1.png");
    grassImg = loadImage("grass.png");
}

function setup() {
    createCanvas(displayWidth,displayHeight);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new ground(250,250,20,20);

    //backg = createSprite(500,190);
    //backg.addImage("bground",bgImg);
    //backg.scale = 0.27;
    //backg.x = backg.width/2;
    //backg.velocityX = -4;

    gro = createSprite(width/2,height,width,2);
    gro.addImage("ground",grassImg);
    gro.x = width/2
    gro.velocityX = -6;

    player = createSprite(50,290,30,30);
    player.addAnimation("running", playerRunning);
    player.scale = 0.5;

    enemy = createSprite(1050,255,30,30);
    enemy.addImage(enemyImg);
    enemy.scale = 0.6;

    bunny = createSprite(1230,285,30,30);
    bunny.addImage(bunnyImg);
    bunny.scale = 0.3;

    invisibleGround = createSprite(10,700,2500,15);
    invisibleGround.visible = false;
}

function draw() {
    background(bgImg);

    ground.display();

    player.collide(invisibleGround);
    enemy.collide(invisibleGround);
    bunny.collide(invisibleGround);

    if(gro.x < 0) {
       gro.x = gro.width/2;
    }

    if(keyDown("up_arrow")) {
        player.velocityY = -15;
      }
      player.velocityY = player.velocityY + 0.8;
      
      if(keyDown("left_arrow")) {
        player.x = player.x - 5;
      }
      
      if(keyDown("right_arrow")) {
        player.x = player.x + 5;
      }
    
    //add gravity
    player.velocityY = player.velocityY + 0.8

    drawSprites();
}

