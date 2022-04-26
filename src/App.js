import './App.css';
import NavBar from'./components/NavBar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import ExperienceList from './components/Experience'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from'./components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rachel Harris's portfolio</h1>
        <NavBar />
      </header>
      <div className="main-container">
        <Profile />
        <Projects />
        <ExperienceList />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;


