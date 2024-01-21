import './App.css';


import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills  from './components/Skills'
import Projects  from './components/Projects'
import Contact  from './components/Contact'


function App() {
    return (
        <div className='App'>
            <Banner/>
            <Navbar/>
            <div className="content-wrapper">
                <About/>
                <Education/>
                <Experience/>
                <Projects/>
                <Contact/>
            </div>
        </div>
        
    );
}

export default App;
