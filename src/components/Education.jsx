import React, { useState } from "react";
import EducationCard from "./EducationCard";
import data from "../assets/data/data.json"

const Education = () => {
    return (
        <div id="education" className="alt-background">
            <div className="section-title center">My education</div>
            <div className="education-card-container">
                {
                    data.education.map((elem, idx) => (
                        <EducationCard key={idx} education={elem}/>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Education; 