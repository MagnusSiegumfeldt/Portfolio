import React from "react";
import { WorkOutline } from '@mui/icons-material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from "../assets/data/data.json"


const Experience = () => {
    return (
        <div id="experience" className="section-outer">
            <div className="section-wrapper-narrow">
                <div className="section-container">
                    <div className="section-title">Experience</div>
                    <VerticalTimeline lineColor="#e0e0e0">
                        {
                            data.experience.map((elem, idx) => (
                                <VerticalTimelineElement
                                    key={idx}
                                    date={elem.date}
                                    iconStyle={{ background: '#fff' }}
                                    icon={<WorkOutline />}
                                    textClassName="timeline-element"
                                >
                                    <div className="card-title">{elem.institution}</div>
                                    <div className="card-subtitle">{elem.title}</div>
                                    <div className="card-description">
                                    {elem.description}
                                    </div>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>

            </div>
        </div>
    )
}

export default Experience; 