import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainSection } from './components/navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import AboutUs from './components/About/about';
import i18next from "i18next"
function App() {
  const [dot, setDot] = React.useState(false);
  React.useEffect(()=>{
     const language = localStorage.getItem('dataKey')
     if((language)!='US'){
       i18next.changeLanguage('ko')
       document.body.dir = "rtl"
     }
     else{
      document.body.dir = "ltr"
      i18next.changeLanguage('en')
     }
   },[dot])
  return (
    <div className="App">
      <MainSection dot={dot} setDot={setDot} />
    
      <Banner />

     <AboutUs />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
