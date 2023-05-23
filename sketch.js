const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall, boats
var cbs = [], bjs, bimg, ba = [], bbjs, bbimg, bba = []
var wjs, wimg, wa = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  bjs = loadJSON("./assets/boat/boat.json")
  bimg = loadImage ("./assets/boat/boat.png")
  bbjs = loadJSON("./assets/boat/broken_boat.json")
  bbimg = loadImage ("./assets/boat/broken_boat.png")
  wjs = loadJSON ("./assets/waterSplash/waterSplash.json")
  wimg = loadImage ("./assets/waterSplash/waterSplash.png") 
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 0
  boats = []
  var  bf = bjs.frames
  for (var i = 0 ; i < bf.length ; i++) {
    var p = bf [i].position
    var img = bimg.get (p.x, p.y, p.w, p.h)
    ba.push (img) 
  }
  var  wf = wjs.frames
  for (var i = 0 ; i < wf.length ; i++) {
    var p = wf [i].position
    var img = wimg.get (p.x, p.y, p.w, p.h)
    wa.push (img) 
  } 
  var  bbf = bbjs.frames
  for (var i = 0 ; i < bbf.length ; i++) {
    var p = bbf [i].position
    var img = bbimg.get (p.x, p.y, p.w, p.h)
    bba.push (img) 
  }

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
 fill ("red")
 rect(ground.position.x, ground.position.y, width * 2, 1);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  //console.log (cannon.angle)
showboats ()
  text (mouseY, mouseX, mouseY)
 //cannonBall.display();
 for (var i = 0 ; i < cbs.length ; i ++) {
  if (cbs [i]) {

  
  showcbs (cbs [i], i)
  collision (i)
  if (cbs [i].body.position.y > 540) {
cbs [i].remove (i)
  }
  }
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
if (boats [boats.length - 1] == undefined || boats [boats.length - 1].body.position.x < 700) {
  var p = [-20, -40, -80, 0]
  var pt = random (p)
  var b = new Boat (width, height - 50, 100, 150, pt, ba)
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
    var b = new Boat (width, height - 50, 150, 150, -20, ba)
    boats.push (b)

  }
}

function collision (index) {
for (var i = 0; i < boats.length; i++) {
 if (boats [i]  && cbs[index]) {
  var c = Matter.SAT.collides (cbs [index].body, boats [i].body)
  if (c.collided) {
  // Matter.World.remove (world, cbs [index].body)
  // delete cbs [index] 
  boats [i].remove (i)
  cbs [index].remove (index)
   }
  }
 }
}



