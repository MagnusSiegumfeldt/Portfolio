import React, { Component } from "react";

import { School } from '@mui/icons-material';


class EducationCard extends Component {
    render() {
        return (
            <div className="education-card-wrapper ">
                <div className="education-circle-wrapper"><div className="education-circle"><School/></div></div>
                
                <div className="education-card fade-in" style={{animationDelay: (`${this.props.idx * 50}ms`)}}>
                    <div className="education-arrow-wrapper"><div className="education-arrow"></div></div>
                    
                    
                    <div className="education-card-date">
                        {this.props.education.date}
                    </div>
                    <div className="card-title">
                        {this.props.education.institution}
                    </div>
                    <div className="card-subtitle">
                        {this.props.education.title}
                    </div>
                    <div className="card-description">
                        {this.props.education.description}  
                    </div>
                    <div className="card-grade">
                        {this.props.education.grade}  
                    </div>

                </div>
                
            
            </div>
            
        )
    }
}
export default EducationCard; 