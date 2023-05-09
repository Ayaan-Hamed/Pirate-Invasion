class Boat {
    constructor(x, y, w, h, p) {
      this.h = h
      var options = {
        friction: 1, density: 1, restitution: 0.8
      };
      this.w = w;
      this.body = Bodies.rectangle(x, y, this.w, this.h, options);
      this.image = loadImage("./assets/boat.png");
      World.add(world, this.body);
      this.p = p
    }
  
  
    display() 
    {
      push ()
      var pos = this.body.position;
      translate (pos.x, pos.y)
      image(this.image, 0, this.p, this.w, this.h);
      pop ()
    }
  }
  
