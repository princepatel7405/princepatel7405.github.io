import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import './App.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Github from './Components/Github';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Skills/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;
