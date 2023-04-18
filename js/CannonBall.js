class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
    this.path = []
  }


  display() 
  {
    var pos = this.body.position;
    push ()
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop ()
    if (this.body.velocity.x > 0 && this.body.position.x > 240) {
      this.path.push ([this.body.position.x, this.body.position.y])
    }
    for (var i = 0 ; i < this.path.length ; i ++) {
      image(this.image, this.path [i] [0], this.path [i] [1], 5, 5); 
    }
  }
  shoot () {
var a = cannon.angle - 30
a *= (3.14/180)
var v = p5.Vector.fromAngle (a)
v.mult (0.5)
Matter.Body.setStatic (this.body, false)
Matter.Body.setVelocity (this.body, {x:v.x*(180/3.14),y:v.y*(180/3.14)})
  }
}
