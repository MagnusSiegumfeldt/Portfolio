import React, { Component } from "react";




class EducationCard extends Component {
    render() {
        return (
            <div className="education-card">
                    <div className="education-card-date">
                        {this.props.education.date}
                    </div>
                    <div className="education-card-title">
                        {this.props.education.institution}
                    </div>
                    <div className="education-card-subtitle">
                        {this.props.education.title}
                    </div>
                    <div className="education-card-content">
                        {this.props.education.description}  
                    </div>
            
            </div>
        )
    }
}
export default EducationCard; 