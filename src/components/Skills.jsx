import React from "react";
import data from "../assets/data/data.json"


const Skills = () => {
    return (
        <div id="skills" className="alt-bg section-outer">
            <div className="section-wrapper-narrow">
                <div className="flex-col-l">
                    <div className="section-title">My Skills</div>
                    <div className="flex-col-m">
                        <div className="flex-col-s">
                            <h2>Languages and Frameworks</h2>
                            <div className="skill-container">
                            {
                                data.skills.languages.map((elem, idx) => (
                                    <div key={idx} className="skill-box">
                                        <img alt="" height="30" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + elem.icon + "/" + elem.icon + "-original.svg"} />
                                        <div className="skill-box-content">
                                            <div>{elem.name}</div>
                                            <div className="skill-level-outer"><div className="skill-level-inner" style={{"width": elem.level + "%"}}></div></div>
                                        </div>
                                        

                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="flex-col-s">
                            <h2>Tools</h2>
                            <div className="skill-container">
                                {
                                    data.skills.tools.map((elem, idx) => (
                                        <div key={idx} className="skill-box">
                                            <img alt="" height="30" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + elem.icon + "/" + elem.icon + "-original.svg"} />
                                            <div className="skill-box-content">
                                                <div>{elem.name}</div>
                                                <div className="skill-level-outer"><div className="skill-level-inner" style={{"width": elem.level + "%"}}></div></div>
                                            </div>
                                            

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Skills; 