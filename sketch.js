function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);

  box1 = new Box(120,235,30,40);
  box2 = new Box(150,235,30,40);
  box3 = new Box(180,235,30,40);
  box4 = new Box(210,235,30,40);
  box5 = new Box(240,235,30,40);
  box6 = new Box(270,235,30,40);
  box7 = new Box(300,235,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(480,235,30,40);
  box14 = new Box(510,235,30,40);
  box15 = new Box(540,235,30,40);
  box16 = new Box(570,235,30,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}