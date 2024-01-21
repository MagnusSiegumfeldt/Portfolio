import React, { Component } from "react";

class Navbar extends Component {
    
    constructor() {
        super();
        this.flocksize = 500;
        this.particles = [];
        this.state = {
            active: "home",
        }
    }

    handleScroll = () => {
        // Check for bottom
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            this.setState({
                active: "contact",
            });
            return;
        }

        let sections = document.getElementsByClassName("section")
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            
            if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
                this.setState({
                    active: current.getAttribute("id"),
                });
            }
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
       
    }
    render() {
        return (<div className="navbar-container">
        <div className={"navbar-item" + (this.state.active === "home" ? " active" : "")}><a href="#home">Home</a></div>
        <div className={"navbar-item" + (this.state.active === "about" ? " active" : "")}><a href="#about">About</a></div>
        <div className={"navbar-item" + (this.state.active === "education" ? " active" : "")}><a href="#education">Education</a></div>
        <div className={"navbar-item" + (this.state.active === "experience" ? " active" : "")}><a href="#experience">Experience</a></div>
        <div className={"navbar-item" + (this.state.active === "projects" ? " active" : "")}><a href="#projects">Projects</a></div>
        <div className={"navbar-item" + (this.state.active === "contact" ? " active" : "")}><a href="#contact">Contact</a></div>
    </div>)
    }
}

export default Navbar;





