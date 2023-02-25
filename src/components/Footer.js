import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {useTranslation} from 'react-i18next'
export const Footer = () => {
  const {t} = useTranslation();
  return (
  <>
  
  <footer id="footer" class="footer-1"
   style={{
    fontFamily:document.body.dir ==="ltr"? 'OpenSans':"Tajawal"
  }}
  >
     <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          </Row>
          </Container>
<div class="main-footer widgets-dark typo-light">
<div class="container">
<div class="row">
  
<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget subscribe no-box">
<h5 class="">{t("NASAIA")}<span></span></h5>
<p>{t("AI Engine for Decision Making.")} </p>
</div>
</div>

<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget no-box">
<h5 class="">{t("Quick Links")}<span></span></h5>
<ul class="thumbnail-widget">
<li>
<div class="thumb-content">{t("AboutUs")}</div> 
</li>
<li>
<div class="thumb-content">{t("Subscribe")}</div> 
</li>
<li>
<div class="thumb-content">{t("Privacy Policy")}</div> 
</li>
<li>
<div class="thumb-content">{t("Terms and Conditions")}</div> 
</li>
<li>
<div class="thumb-content">{t("Help")}</div> 
</li>
<li>
<div class="thumb-content">{t("Investment Request")}</div>  
</li>
<li>
<div class="thumb-content">{t("Team")}</div> 
</li>
</ul>
</div>
</div>

<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget no-box">
<h5 class="">{t("Contact Us")}<span></span></h5>
<h6>{t("Address")}</h6>
<p>{t("200 Shoreline Drive, CA 92122, United States")}</p>
<p>{t("222 Front Riyadh, Riyadh, Saudi Arabia")} </p>
<h6 class="">{t("Telephone")}<span></span></h6>
<p>{t("Phone")}: +1 (202) 656-5556</p>
<p>{t("Fax")}: +1 (202) 656-5556</p>
</div>
</div>

<div class="col-xs-12 col-sm-6 col-md-3">

<div class="widget no-box">
<h5 class="">{t("Social Network")}<span></span></h5>

<p><a href="mailto:info@nasia.ai" 
id="emailType">info@nasia.ai</a></p>
<ul class="social-footer2">
<div className="social-icon">
              <a href="instagram.com/NasiaAI"><img src={navIcon1} alt="Icon" /></a>
              <a href="facebook.com/NasiaAI"><img src={navIcon2} alt="Icon" /></a>
              <a href="linkedin.com/NasiaAI"><img src={navIcon3} alt="Icon" /></a>
            </div>
</ul>
</div>
</div>

</div>
</div>
</div>
  
<div class="footer-copyright">
<div class="container">
<div class="row">
<div class="col-md-12 text-center">
<p>{t("COPYRIGHT © 2023 NASIA - ALL RIGHTS RESERVED | Made with ❤ by NASIA AI")}</p>

</div>
</div>
</div>
</div>
</footer>

  </>
  )
}
