import React from "react";
import EducationCard from "./EducationCard";
import data from "../assets/data/data.json"

const Education = () => {
    return (
        <div id="education" className="alt-bg section-outer">
            <div className="section-wrapper-wide">
                <div className="flex-col-l">

                    <div className="section-title">My education</div>
                    
                    <div className="flex-row-s">
                        {
                            data.education.map((elem, idx) => (
                                <EducationCard key={idx} education={elem}/>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Education; 