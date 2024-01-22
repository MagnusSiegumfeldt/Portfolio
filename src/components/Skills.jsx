import React, { useState } from "react";
import data from "../assets/data/data.json"
import SkillCard from "./SkillCard"


const Skills = () => {
    return (
        <div id="education" className="alt-background">
            <div className="section-title center">My Skills</div>
            <div className="skill-card-container">
                <SkillCard title={"Languages"} skills={data.skills.languages}/>
                <SkillCard title={"Tools"} skills={data.skills.tools}/>
                <SkillCard title={"Courses"} skills={data.skills.courses}/>
            </div>
        </div>
        
    )
}

export default Skills; 