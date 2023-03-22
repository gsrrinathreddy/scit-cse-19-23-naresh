import logo from './logo.svg';
import './App.css';
import IButton from './components/IButton';
import IAutocomplete from './components/IAutocomplete';
import INavbar from './components/INavbar';
import AboutMe from './pages/AboutMe';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import {Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="fswd-app">
      <INavbar/>
      <Routes>
        <Route path='/About Me' element={<AboutMe/>}/>
        <Route path='/Qualification' element={<Qualification/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        </Routes>
    </div>
  );
}

export default App;
