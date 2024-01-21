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
        let scrollY = window.scrollY;
  
        // Now we loop through sections to get height, top and ID values for each
        let sections = document.getElementsByClassName("section")
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute("id");
            
            /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            */
            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ){
                console.log(sectionId)
                this.setState({
                    active: sectionId,
                });
            } else {
                
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





