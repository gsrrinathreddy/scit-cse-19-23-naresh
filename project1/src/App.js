import logo from './logo.svg';
import './App.css';
import IButton from './components/IButton';
import IAutocomplete from './components/IAutocomplete';
import INavbar from './components/INavbar';
import AboutMe from './pages/AboutMe';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="fswd-app">
      <INavbar/>
      <AboutMe/>
      <Qualification/>
      <Skills/>
    </div>
  );
}

export default App;
