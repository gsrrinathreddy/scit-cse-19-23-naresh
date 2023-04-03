import logo from './logo.svg';
import './App.css';
import IButton from './components/IButton';
import IAutocomplete from './components/IAutocomplete';
import INavbar from './components/INavbar';
import AboutMe from './pages/AboutMe';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import {Routes,Route, Link} from 'react-router-dom';
import ITimeline from './components/ITimeline';
import Grid from '@mui/material/Grid';
import IImage from './components/IImage';
import Contactme from './pages/Contactme';
import Projects from './pages/Projects';
import Workshops from './pages/Workshops';


function App() {
  return (
    <div className="fswd-app">  

      <INavbar/>
      
      <Routes>
        <Route path='/About Me' element={<AboutMe/>}/>
        <Route path='/Qualifications' element={<Qualifications/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Hobbies' element={<Hobbies/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Certifications' element={<Certifications/>}/>
        <Route path='/Contactme' element={<Contactme/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Workshops' element={<Workshops/>}/>
        
        
      </Routes>
        <Grid container spacing={{ xs:2, md:3}} columns={{ xs:4, sm:8, md:12}}>
            
            <Grid item xs={2} sm={4} md={11}>
              <ITimeline/>
            </Grid>
        </Grid>
        

    </div>
    
  );
}

export default App;
