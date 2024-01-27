import React from "react";
import { LinkedIn, GitHub, SimCardDownload, Phone, Mail, Person, Public, Place } from '@mui/icons-material';
const Contact = () => {
    return (
        <div id="contact" className="dark-bg section-outer">
            <div className="section-wrapper-narrow">
                <div className="flex-row-l">

                    <div className="flex-col-xs flex-one">
                        <p className="card-title">Contact Info</p>
                        <div className="card-description flex-col-xs">
                            <div className="level"> <Person /> Magnus Kragh Siegumfeldt</div>
                            <div className="level"><a className="dark" href="mailto:m.ks@outlook.dk"><Mail />m.ks@outlook.dk </a></div>
                            <div className="level"><a className="dark" href="tel:28943623"><Phone /> +45 28 94 36 23 </a></div>
                        </div>
                    </div>
                    <div className="flex-col-xs flex-one">
                        <p className="card-title">Location</p>
                        <div className="card-description flex-col-xs">
                            <div className="level"><Public />Denmark</div>
                            <div className="level"><Place /> Copenhagen Ø, 2100</div>
                        </div>
                    </div>
                    <div className="flex-col-xs flex-one">
                        <p className="card-title">Socials</p>
                        <div className="card-description flex-col-xs">
                            <div><a className="dark" rel="noreferrer" target="_blank" href="https://dk.linkedin.com/in/magnus-siegumfeldt-997554190"><LinkedIn /> LinkedIn</a></div>
                            <div><a className="dark" rel="noreferrer" target="_blank" href="https://github.com/MagnusSiegumfeldt"><GitHub /> GitHub</a></div>
                            <div><a className="dark" rel="noreferrer" target="_blank" href="https://github.com/MagnusSiegumfeldt"><SimCardDownload /> Resume</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact; 