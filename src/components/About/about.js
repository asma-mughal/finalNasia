import React, { useState } from 'react'
import contactImg from "../../assets/img/about2.webp";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Opencv from '../../assets/img/opencv.png';
import Java from '../../assets/img/java.png';
import Scala from '../../assets/img/scala.png';
import {useTranslation} from 'react-i18next'
import {
    faGitAlt,
    faJsSquare,
    faPython,
  } from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'
import TrackVisibility from 'react-on-screen';
import './index.scss'
import Models from '../Models';
const AboutUs = () => {
    const {t} = useTranslation();
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // setButtonText("Sending...");
        // let response = await fetch("http://localhost:5000/contact", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json;charset=utf-8",
        //   },
        //   body: JSON.stringify(formDetails),
        // });
        // setButtonText("Send");
        // let result = await response.json();
        // setFormDetails(formInitialDetails);
        // if (result.code == 200) {
        //   setStatus({ succes: true, message: 'Message sent successfully'});
        // } else {
        //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        // }
      };
    
    
  return (
  <>
  <div className="sectionAbout" id="about"
   style={{
    fontFamily:document.body.dir ==="ltr"? 'OpenSans':"Tajawal"
  }}
  >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} >
            <TrackVisibility>
              {({ isVisible }) =>
              <>
            
               <div className="stage-cube-cont" >
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#183153" />
            </div>
            <div className="face2">
              <img src={Opencv} style={{
                width:'100px'
              }} 
              alt="opencv"
              />
            </div>
            <div className="face3">
            <img src={Scala} style={{
                width:'100px'
              }} 
              alt="scala"
              />
            </div>
            <div className="face4">
            <img src={Java} style={{
                width:'100px'
              }}
              alt="java"
              />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      <Loader type="pacman" />
          </>
              }
              
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 style={{
                fontWeight:'bold'
                }}>{t("Why Us")}</h1>
          <p>{t("NASIA in Arabic means the forelock, which is the center of the brain in making decisions. It is the largest lobe of the brain, located in the front of the head, which is involved in personality characteristics, decision-making, and movement.NASIA AI is the new engine for decision-making and API-driven solutions.")}
          </p>
          <div className='newMargin '>
          <h3 style={{
                fontWeight:'bold',
                }}>
          {t("NASIA Platform")}
          </h3>
          <p >{t("NASIA Platform for decsion making engines using top state of arts computer vision, speech, natural language processing(NLP) and machine learning to provide APIs for technological applications and enhance the AI experiences in the fields of game AI, digital human, content AI and social AI. NASIA technologies are promised applied in over 100 products, including social networks, and search engines. NASIA is for exploring innovative combinations of AI with sectors such as life sciences, healthcare, agriculture, and industry.")}
          </p>
          </div>
          
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     
      </div>
<Models />
      </>
     
  )
}

export default AboutUs
