import React, { useState } from "react"; 
import Particles from "./Particles";

const Banner = () => { 
    return ( 
        <div id="home" className="section">
            <div id="header-container" className="header-container">
                <div className="title-container">
                    <div className="title">Magnus Siegumfeldt</div>
                    <div className="subtitle">A <span className="theme-color">Curious</span> Computer Science Student</div>
                    <div className="cta-container">
                        <button className="cta-button theme-background">Get in contact!</button>
                        <button className="cta-button no-background">Resume</button>
                    </div>
                </div>
                <Particles height={600}/>
              </div>
        </div>
    ) 
} 
  
export default Banner; 