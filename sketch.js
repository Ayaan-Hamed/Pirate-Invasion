const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 0

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 130, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
  imageMode(CENTER);
}

function draw() {
  background(189);
  image(backgroundImg, width / 2, height / 2, width, height);

  Engine.update(engine);
  cannon.display();
  rect(ground.position.x, ground.position.y, width * 2, 1);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  //console.log (cannon.angle)

  
  cannonBall.display();
}
function keyReleased () {
  if (keyCode == DOWN_ARROW)
  cannonBall.shoot ()
}

