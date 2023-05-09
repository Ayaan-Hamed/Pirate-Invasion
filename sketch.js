const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall, boats
var cbs = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 0
  boats = []

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 130, 130, 100, angle);
  
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
showboats ()
  
 //cannonBall.display();
 for (var i = 0 ; i < cbs.length ; i ++) {
  showcbs (cbs [i], i)
 }
}
function keyPressed () {
  if (keyCode == DOWN_ARROW) {
  //cannonBall.shoot ()
  cannonBall = new CannonBall(cannon.x, cannon.y);
  cbs.push (cannonBall)
  }
}

function keyReleased () {
  if (keyCode == DOWN_ARROW)
  //cannonBall.shoot ()
  cbs [cbs.length - 1].shoot ()
}

function showcbs (ball, i) {
if (ball) {
  ball.display()
}
}

function showboats () {
  if (boats.length > 0) {
if (boats [boats.length - 1] == undefined || boats [boats.length - 1].body.position.x > width) {
  var p = [-20, -40, -80, 0]
  var pt = random (p)
  var b = new Boat (width, height - 50, 100, 150, pt)
  boats.push (b)

}
for (var i = 0; i < boats.length; i++) {
  if (boats[i]) {
    Matter.Body.setVelocity (boats [i].body, {x: - 3, y: 0})
    boats [i].display ()
   // console.log (i, boats [i].body.position)
  }
}
  }
  else {
    var b = new Boat (width, height - 50, 150, 150, -20)
    boats.push (b)

  }
}
