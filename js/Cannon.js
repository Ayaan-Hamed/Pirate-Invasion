class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  display() {
    if (this.angle >=-30 && this.angle <=45) {
    if (keyDown ("right") ) {
    this.angle += 1
    }
    if (keyDown ("left") ) {
      this.angle -=1
    } 
  }
  else if (this.angle <=-31){
    this.angle =-30
  }
  else {
    this.angle =45
  }
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base, 170, 140, 250, 180);
    noFill();

  }
}
