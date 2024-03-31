import React, { Component } from "react";
import Particles from "./Particles";



class Banner extends Component {
    handleDownloadClick = (file_name) => {
        const element = document.createElement("a");
        element.href = file_name;
        element.download = file_name.split("/")[1];
    
        document.body.appendChild(element); 
        element.click();
        document.body.removeChild(element);
    }
    render() {
        return (
            <div id="home" className="section-outer">
                <div id="header-container" className="header-container">
                    <div className="title-container">
                        <div className="title">Magnus Siegumfeldt</div>
                        <div className="subtitle">A <span className="theme-color">Curious</span> Computer Science Student</div>
                        <div className="cta-container">
                            <button className="theme-button banner-btn" onClick={this.props.openContact}>Get in touch</button>
                            <button className="transparent-button banner-btn" onClick={() => this.handleDownloadClick("assets/MagnusSiegumfeldt.pdf")}>Resume</button>
                        </div>
                    </div>
                    <Particles height={600} flocksize={250}/>
                </div>
                
            </div>
        ) 
    }
    
} 
  
export default Banner; 