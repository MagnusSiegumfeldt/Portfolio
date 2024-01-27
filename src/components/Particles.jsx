import React, { Component } from "react";
import Sketch from "react-p5";

import Particle from "../logic/Particle";

class Particles extends Component {
    
    constructor() {
        super();
        this.particles = [];
        this.laststage = -1;
    }
        

    createParticles(p5) {
        let rerender = false;
        if (p5.windowWidth < 1000 && this.laststage !== 0) {
            this.flocksize = 100;
            this.laststage = 0;
            rerender = true;
        } else if (p5.windowWidth > 1000 && p5.windowWidth < 1600 && this.laststage !== 1) {
            this.flocksize = 250;
            this.laststage = 1;
            rerender = true;
        } else if (p5.windowWidth >= 1600 && this.laststage !== 2){
            this.flocksize = 500;
            this.laststage = 2;
            rerender = true;
        }
        if (rerender) {
            this.particles = [];
            for (let i = 0; i < this.flocksize; i++) {
                this.particles.push(new Particle(p5));
            }
        }
    }


    update() {
        for (let i = 0; i < this.flocksize; i++) {
            this.particles[i].update();       
        }
    }

    show() {
        for (let i = 0; i < this.flocksize; i++) {
            this.particles[i].show();
        }
    }

    
    windowResized = (p5) => {
        var parent = document.getElementById("header-container");
        p5.resizeCanvas(parent.offsetWidth, this.props.height);
        if (p5.windowWidth < 1000) {
            this.createParticles(p5);
        } else {
            this.createParticles(p5);
        }
    }

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, this.props.height).parent(
            canvasParentRef
        );
        p5.frameRate(this.fr);
        // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
        
        this.createParticles(p5);
    };
    draw = p5 => {
        p5.background(26,32,43);
        this.update();
        this.show();
        p5.ellipse(p5.mouseX, p5.mouseY, 10, 10)
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized}/>;
    }
}

export default Particles;