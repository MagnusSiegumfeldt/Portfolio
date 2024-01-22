import React, { useState } from "react"; 

const About = () => { 
    return ( 
        <div id="about" className="content-container section"> 
            <div className="section-container">
                <div className="section-title center">Who am i?</div>
                <div className="section-content about-content">
                    <div className="about-text">
                    I'm a 23-year-old computer science student currently in my first year of master's studies. I find joy in exploring board games, spending time in my dorm kitchen, and staying active through sports. Passionate about technology and always eager to learn, I'm on a journey to blend my academic pursuits with my diverse interests.
                    </div>
                    <div className="about-img-container">
                        <div className="about-img"></div>
                    </div>
                </div>
            </div>
        </div>
    ) 
} 
  
export default About; 