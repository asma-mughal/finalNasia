import { useState, useRef, useEffect } from "react";
import { Container, Row, Col , Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import {useTranslation} from 'react-i18next'
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
 
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  const form = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      setMessage('')
      setStatus('')
    },1000)
  
  },[status])
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xqmgki6', 'template_1xxlwim', form.current, 'I9Q9zegtYOV0TPbl2')
    .then((result) => {
      setStatus('success')
      setMessage('Successfully Sent')
        console.log(result.text);
    }, (error) => {
      setStatus('error')
      setMessage('Oops! Some problem occured')
        console.log(error.text);
    });
    e.target.reset()
  };
  const {t} = useTranslation();
  return (
    <section className="contact" id="contact"
    style={{
      fontFamily:document.body.dir ==="ltr"? 'OpenSans':"Tajawal"
    }}
    >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{t("Get In Touch")}</h2>
                <Row>
            <Col lg={12} md={6} xl={5}>
              {status === 'sending' && <Alert>{t("Sending")}...</Alert>}
              {status === 'error' && <Alert variant="danger">{t(message)}</Alert>}
              {status === 'success' && <Alert variant="success">{t(message)}</Alert>}
            </Col>
            </Row>
                <form onSubmit={handleSubmit}  ref={form}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName}
                       placeholder={t("First Name")} 
                       name="first_name"
                       onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName}
                       placeholder={t("Last Name")}
                       name="last_name"
                       onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email}
                      name="user_email"
                       placeholder={t("Email Address")} onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone}
                       placeholder={t("Phone No")} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message}
                       placeholder={t("Message")} 
                       name="message"
                       onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{t(buttonText)}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
