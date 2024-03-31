import React, { Component } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import { GitHub, OpenInNew, SimCardDownload } from '@mui/icons-material';

class ProjectCard extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
    }
    
    handleOpen = () => {
        this.setState({
            open: true,
        });
    }
    handleClose = () => {
        this.setState({
            open: false,
        });
    }
    handleLinkClick = (url) => {
        window.open(url, '_blank', 'noreferrer');
    }

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
            <div>
                <div className="project-card" onClick={this.handleOpen}>
                    <div className={"project-img " + this.props.project.imageClass}></div>
                    <div className="modal-content">
                        <div className="card-title">
                            {this.props.project.title}
                        </div>
                        <div className="card-description">
                            {this.props.project.excerpt}
                        </div>
                        <div className="project-button-container">
                            <button className="theme-button">Read more</button>
                            {this.props.project.demo && <button className="theme-button" onClick={(e) => {e.stopPropagation(); this.handleLinkClick(this.props.project.demo)}}>Demo <OpenInNew fontSize="small"/></button>}
                            {this.props.project.download && <button className="theme-button" onClick={(e) => {e.stopPropagation(); this.handleDownloadClick(this.props.project.download)}}>Download <SimCardDownload fontSize="small"/></button>}
                            <button className="transparent-button" onClick={(e) => {e.stopPropagation(); this.handleLinkClick(this.props.project.github)}}>GitHub <GitHub fontSize="small"/></button>
                        </div>
                    </div>
                    
                
                </div>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    
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
                    <Fade in={this.state.open}>
                        <Box className="modal">
                            <div className={"project-img " + this.props.project.imageClass}></div>
                            <div className="modal-content">
                                <div className="card-title">
                                    {this.props.project.title}
                                </div>
                                <div className="stack-container">
                                    {
                                        
                                        this.props.project.stack.map((elem, idx) => (
                                            // get picture name from https://devicon.dev/
                                            <img key={idx} height="24" alt="" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + elem + "/" + elem + "-original.svg"} />
                                        ))
                                    }
                                    
                                </div>
                                <div className="project-card-description">
                                    {this.props.project.description}
                                </div>
                                <div className="project-button-container">
                                    {this.props.project.demo && <button className="theme-button" onClick={(e) => {e.stopPropagation(); this.handleLinkClick(this.props.project.demo)}}>Demo <OpenInNew fontSize="small"/></button>}
                                    {this.props.project.download && <button className="theme-button" onClick={(e) => {e.stopPropagation(); this.handleDownloadClick(this.props.project.download)}}>Download <SimCardDownload fontSize="small"/></button>}
                                    <button className="transparent-button" onClick={(e) => {e.stopPropagation(); this.handleLinkClick(this.props.project.github)}}>GitHub <GitHub fontSize="small"/></button>
                                </div>

                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        )
    }
    
    
}
export default ProjectCard; 