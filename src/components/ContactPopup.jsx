import React, { Component } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import { LinkedIn, GitHub, SimCardDownload } from '@mui/icons-material';
class Banner extends Component {
    render() {
        return (
            <Modal
                open={this.props.open}
                onClose={this.props.closeContact}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={this.props.open}>
                    <Box className="modal">
                        <div className="modal-content">
                            <h2>Get in touch!</h2>
                            <div className="flex-row-m">
                                <div className="flex-col-xs flex-one">
                                    <p className="card-title">Contact Info</p>
                                    <div className="card-description flex-col-xs">
                                        <div>Magnus Kragh Siegumfeldt</div>
                                        <div><a className="light" href="mailto:m.ks@outlook.dk">m.ks@outlook.dk </a></div>
                                        <div><a className="light" href="tel:28943623">+45 28 94 36 23 </a></div>
                                    </div>
                                    

                                </div>
                                <div className="flex-col-xs flex-one">
                                    <p className="card-title">Location</p>
                                    <div className="card-description flex-col-xs">
                                        <div>Denmark</div>
                                        <div>Copenhagen Ø, 2100</div>

                                    </div>

                                </div>
                                <div className="flex-col-xs flex-one">
                                    <p className="card-title">Socials</p>
                                    <div className="card-description flex-col-xs">
                                        <div><a className="light" rel="noreferrer" target="_blank" href="https://dk.linkedin.com/in/magnus-siegumfeldt-997554190"><LinkedIn /> LinkedIn</a></div>
                                        <div><a className="light" rel="noreferrer" target="_blank" href="https://github.com/MagnusSiegumfeldt"><GitHub /> GitHub</a></div>
                                        <div><a className="light" href="/assets/MagnusSiegumfeldt.pdf" download="MagnusSiegumfeldt.pdf"><SimCardDownload /> Resume</a></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        )
    }
}

export default Banner;

