import './App.css';
import NavBar from'./components/NavBar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import ExperienceList from './components/ExperienceList'
import Footer from'./components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="main-container">
        <Profile />
        <Projects />
        <ExperienceList />
      </div>
      <Footer />
    </div>
  );
}

export default App;


