import { useEffect,useState, useRef} from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

import {useTranslation} from 'react-i18next'
export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  useEffect(()=>{
    setTimeout(()=>{
      setMessage('')
      setStatus('')
    },1000)
  
  },[status])
  const form = useRef();
  const {t} = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending')
    emailjs.sendForm('service_2md4fzd', 'template_66vtqw6', form.current, '0tzZTSr5U_fBY4sSF')
    .then((result) => {
      setStatus('success')
      setMessage('Successfully Subscribe')
        console.log(result.text);
    }, (error) => {
      setStatus('error')
      setMessage('Oops! Some problem occured')
        console.log(error.text);
    });
   e.target.reset();
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>{t("Subscribe to our Newsletter")}<br></br> {t("& Never miss latest updates")}</h3>
              {status === 'sending' && <Alert>{t("Sending")}...</Alert>}
              {status === 'error' && <Alert variant="danger">{t(message)}</Alert>}
              {status === 'success' && <Alert variant="success">{t(message)}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}  ref={form}>
                <div className="new-email-bx">
                  <input value={email} type="email" 
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                   placeholder={t("Email Address")} />
                  <button type="submit">{t("Submit")}</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
