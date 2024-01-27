import React from "react"; 
import data from "../assets/data/data.json"
const About = () => { 
    return ( 
        <div id="about" className="section-outer"> 
            <div className="section-wrapper-narrow">
                <div className="flex-col-l">
                    <div className="section-title">Who am i?</div>
                    <div className="flex-row-l flex-row-reverse-col">
                        <div className="about-text">
                        { 
                            data.about.map((elem, idx) => (
                                <div key={idx}>{ elem }</div>
                            )) 
                        }
                        </div>
                        <div className="about-img-container">
                            <div className="about-img"></div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    ) 
} 
  
export default About; 