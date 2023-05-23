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
    this.flag = false
    this.ani = [this.image]
    this.speed = 0.05
  }


  display() 
  {
    push ()
    var pos = this.body.position;
    var index = floor (this.speed% this.ani.length)
    image(this.ani [index], pos.x, pos.y, this.r, this.r);
    pop ()

    if (this.body.velocity.x > 0 && this.body.position.x > 220 && ! this.flag) {
      this.path.push ([this.body.position.x, this.body.position.y])
    }
    for (var i = 0 ; i < this.path.length ; i ++) {
      image (this.image, this.path [i] [0], this.path [i] [1], 5, 5)
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
  remove (i) {
    console.log (42, cbs, i)
    this.flag = true
    Matter.Body.setVelocity (this.body, {x: 0, y:0})
    this.ani = wa
    this.path = []
    this.r = 60
    setTimeout (()=>{ Matter.World.remove (world, cbs [i].body)
       delete cbs [i] ;}, 1000)

    
  }
}
