class Particle {
    constructor(p5) {
        this.p5 = p5;
        this.maxspeed = 2;
        this.maxforce = 0.05;
        this.maxangle = 90 / 2;
        this.range = 300;

        this.color = p5.color(p5.random(60, 80), p5.random(60, 80), p5.random(60, 80));
        this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height)); 
        this.vel = p5.createVector(p5.random(1), p5.random(1)).normalize();
        this.acc = p5.createVector(0, 0);
        this.r = 6;
    }
     
    edges() {
        if (this.pos.x > this.p5.width)
            this.pos.x -= this.p5.width;
        if (this.pos.x < 0)
            this.pos.x += this.p5.width;
        if (this.pos.y > this.p5.height)
            this.pos.y -= this.p5.height;
        if (this.pos.y < 0)
            this.pos.y += this.p5.height;
    }

    update() {
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
        if (this.vel.mag() > this.maxspeed) {
            this.vel.normalize().mult(this.maxspeed);
        }
        
        this.acc.x = 0;
        this.acc.y = 0;
        
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;


        if (this.p5.dist(this.pos.x, this.pos.y, this.p5.mouseX, this.p5.mouseY) < this.range) {
            this.acc.x = (this.p5.mouseX - this.pos.x);
            this.acc.y = (this.p5.mouseY - this.pos.y);
            this.acc.mult(0.2);
            if (this.acc.mag() > this.maxforce) {
                this.acc.normalize().mult(this.maxforce);
            }
            
        }
        this.edges();
    }

    show() {
        this.p5.push();
        this.p5.translate(this.pos.x, this.pos.y);
        let a = this.vel.heading();
        this.p5.noStroke();
        this.p5.rotate(a);
        this.p5.fill(this.color);
        this.p5.triangle(-this.r, -this.r * 3 / 4, -this.r, this.r * 3 / 4, this.r, 0);
        this.p5.pop();
    }
}
export default Particle