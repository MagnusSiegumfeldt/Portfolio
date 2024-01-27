import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../assets/data/data.json"


  
const Projects = () => {

    return (
        <div id="projects" className="section-outer">
            <div className="section-wrapper-narrow">
                <div className="flex-col-l">
                    <div className="section-title">Projects</div>
                    <div className="project-container">
                        {
                            data.projects.map((elem, idx) => (
                                <ProjectCard key={idx} project={elem}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects; 