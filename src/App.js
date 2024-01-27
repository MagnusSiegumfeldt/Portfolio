import React, { Component } from "react"; 

import './styles/general.css';
import './styles/content.css';
import './styles/cards.css';
import './styles/images.css';
import './styles/navigation.css';
import './styles/banner.css';

import Header from './components/navigation/Header'
import MobileHeader from './components/navigation/MobileHeader'
import MobileMenu from './components/navigation/MobileMenu'
import Banner from './components/Banner'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills  from './components/Skills'
import Projects  from './components/Projects'
import Contact  from './components/Contact'
import ContactPopup from './components/ContactPopup'



class App extends Component {
    constructor() {
        super();
        this.state = {
            active: "home",
            contactOpen: false,
            mobileMenuOpen: false,
            width: window.innerWidth,
        };
    }

    openContact = () => {
        console.log("yes")
        this.setState({
            contactOpen: true,
        });
    }
    closeContact = () => {
        this.setState({
            contactOpen: false,
        });
    }

    openMobileMenu = () => {
        this.setState({
            mobileMenuOpen: true,
        });
    }
    closeMobileMenu = () => {
        this.setState({
            mobileMenuOpen: false,
        });
    }
    handleResize = () => {
        this.setState({
            width: window.innerWidth,
        });
    }
    handleScroll = () => {
        let sections = document.getElementsByClassName("section-outer")
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            
            if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
                this.setState({
                    active: current.getAttribute("id"),
                });
            }
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
    }
    

    render() {
        return (
            <div className='App'>
                <Banner openContact={this.openContact}/>
                { this.state.width > 767 && <Header active={this.state.active} openContact={this.openContact}/> }
                { this.state.width <= 767 && <MobileHeader openMobileMenu={this.openMobileMenu}/> }
                { this.state.width <= 767 && <MobileMenu openContact={this.openContact} open={this.state.mobileMenuOpen} active={this.state.active} closeMobileMenu={this.closeMobileMenu}/> }
                <ContactPopup open={this.state.contactOpen} closeContact={this.closeContact} />
                <About/>
                <Education/>
                <Experience/>
                <Skills/>
                <Projects/>
                <Contact/>
            
            </div>  
        );
    }
}

export default App;
