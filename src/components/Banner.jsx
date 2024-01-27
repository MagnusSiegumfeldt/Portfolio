import React from "react"; 
import Particles from "./Particles";

const Banner = (props) => {
        return ( 
            <div id="home" className="section-outer">
                <div id="header-container" className="header-container">
                    <div className="title-container">
                        <div className="title">Magnus Siegumfeldt</div>
                        <div className="subtitle">A <span className="theme-color">Curious</span> Computer Science Student</div>
                        <div className="cta-container">
                            <button className="theme-button banner-btn" onClick={props.openContact}>Get in touch</button>
                            <button className="transparent-button banner-btn">Resume</button>
                        </div>
                    </div>
                    <Particles height={600} flocksize={250}/>
                </div>
                
            </div>
        ) 
    
} 
  
export default Banner; 