import React, { Component } from "react";




class SkillCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="skill-card">
                    <div className="skill-card-title">
                        {
                            this.props.title
                        }
                    </div>
                    <div className="skill-card-content">
                        {
                            this.props.skills.map((elem, idx) => (
                                <div key={idx}>{elem}</div>
                            ))
                        }
                    </div>
            
            </div>
        );
    }
}
export default SkillCard; 