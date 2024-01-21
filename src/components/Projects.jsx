import React, { useState } from "react";

const Projects = () => {
    return (
        <div id="projects" className="content-container alt-background section">
            <div className="section-container">
                <div className="section-title">Projects</div>
                <div className="project-container">
                    <div className="project-card">
                        <div className="project-img chess"></div>
                        <div className="project-content-container">
                            <div className="project-title">Chess AI</div>
                            <div className="project-content">
                            A Chess AI written in C++ using SDL2 for a graphical user interface. This project showcases advanced algorithms and efficient board evaluation techniques.
                            </div>
                        </div>
                        
                    </div>
                    <div className="project-card">
                        <div className="project-img wordle"></div>
                        <div className="project-content-container">
                            <div className="project-title">Wordle</div>
                            <div className="project-content">
                                In this React Wordle project I utilized React's components for efficient and responsive development, ensuring an intuitive user interface for an enjoyable experience.
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-img boids"></div>
                        <div className="project-content-container">
                            <div className="project-title">Boids</div>
                            <div className="project-content">
                                This projects is a Boids simulation in JavaScript using p5.js, emphasizing visual appeal and showcasing complex flocking behavior through simple rules.
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-img sorting"></div>
                        <div className="project-content-container">
                            <div className="project-title">Sorting Visualizer</div>
                            <div className="project-content">
                            I crafted a sorting visualizer in React, offering users an interactive showcase of sorting algorithms within the framework.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects; 