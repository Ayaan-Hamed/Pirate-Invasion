class Boat {
    constructor (x,y,w,h,p) {
        this.body = Matter.Bodies.rectangle (x,y,w,h, {friction : 5, density : 1, restitution : 0.8})
        Matter.World.add (world,this.body)
        this.w = w
        this.h = h
        this.p = p
    }
    display () {
push ()
translate (this.body.position.x, this.body.position.y)
image (boatimg, 0, 0, this.w, this.h) 
pop ()
    }
}