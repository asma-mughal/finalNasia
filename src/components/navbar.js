import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo2.png';
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import ReactFlagsSelect from "react-flags-select";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Language from '../assets/img/world.png';
export const MainSection = ({dot,setDot}) => {
  const {t} = useTranslation();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState("");
  // useEffect(() => {
  //   if (localStorage.getItem("i18nextLng")?.length > 2) {
  //     i18next.changeLanguage("en"); 
  //   }
  // }, []);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
   const handleSelect = (code) =>{
   if(code === 'SA'){
    localStorage.setItem('dataKey', code);
    document.body.dir = 'rtl';
    setDot(true);
    i18next.changeLanguage('ko')
    
   }
   if(code === 'US'){
    localStorage.setItem('dataKey', code);
    document.body.dir = 'ltr';
    setDot(false);
    i18next.changeLanguage('en')
   }
   }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}
      style={{
        fontFamily:document.body.dir ==="ltr"? 'OpenSans':"Tajawal"
      }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo"
            style={{
              width:'150%',
              paddingLeft : document.body.dir === "rtl" && '25%'
            }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}>{t("home")}</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 
              'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('about')}>{t("About")}</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('services')}>{t("Services")}</Nav.Link>
                <Nav.Link href="#demo" className={activeLink === 'demo' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('demo')}>{t("Demo")}</Nav.Link>
               <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('contact')}>{t("ContactUs")}</Nav.Link>
              <Nav.Link  >
               
              <div style={{
                  alignItems:'center',
                  display:'flex',
                  justifyContent:'center',
                  marginTop:'-0.9rem'
                }}>
 <ReactFlagsSelect
            placeholder={<img src={Language} 
            alt="Language"
            />}
 id="flags-select"
 className="innerClass"
 selectedSize={26}
 optionsSize={20}
selected={selected}
showOptionLabel={false}
    onSelect={handleSelect}
    countries={["SA", "US"]}
    
  />
  </div>
              </Nav.Link>
 
            </Nav>
       
            <span className="navbar-text">
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </Router>
  )
}