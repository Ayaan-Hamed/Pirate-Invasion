const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var boatimg
var boats, cb
  

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  boatimg = loadImage ("boat.png")
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
 // cannonBall = new CannonBall(cannon.x, cannon.y);
  imageMode(CENTER);
  boats = []
  cb = []
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
  for (var i = 0 ; i < cb.length ; i ++) {
    cb [i].display ()
  }
  //cannonBall.display();
}
function keyReleased () {
  if (keyCode == DOWN_ARROW) {
    cb [cb.length - 1].shoot ()
  }
  //cannonBall.shoot ()

}
function keyPressed () {
  if (keyCode == DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    cb.push (cannonBall)
  }
}
function showboats () {
if (boats.length > 0) {
if (boats [boats.length - 1] == undefined || boats [boats.length - 1].body.position.x < width - 200) {
  var p = [-20, -40, -60, -80]
  var bp = random (p)
  var b = new Boat (width , height - 50, 150, 150, bp)
  boats.push (b)
}
for (var i = 0 ; i < boats.length ; i ++) {
  if (boats [i]) {
    Matter.Body.setVelocity (boats [i].body, {x : -2, y : 0})
  }
  boats [i].display ()
}
}
else {
  var b = new Boat (width , height - 50, 150, 150, -50)
  boats.push (b)
}
}
