import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import {useTranslation} from 'react-i18next'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const {t} = useTranslation();
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="demo"
    style={{
      fontFamily:document.body.dir ==="ltr"? 'OpenSans':"Tajawal"
    }}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{t("DEMO")}</h2>
                <p>{t("Frequently Asked Questions")}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 
                  justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey={document.body.dir === "ltr"? "first" :"third"}>{t("Tab 1")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{t("Tab 2")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey={document.body.dir === "ltr"? "third" :"first"}>{t("Tab 3")}</Nav.Link>
                      
                    </Nav.Item>
                    
                    
                  </Nav>
                  <Tab.Content id="slideInUp" 
                  className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h1>{t("How far along is this project?")}</h1>
                      <p> {t("We are in the productive stages of development, working from established research in applying RLHF to large AI models.")}</p>
<h1>{t("Will the training data also be released?")}</h1>
                      <p>
                      {t("Yes, under CC BY 4.0.")}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h1>{t("Who is behind NASIA?")}</h1>
                      <p>{t("NASIA is a project organized by ROBOTICS group and individuals around the world interested in bringing this technology to everyone.")}</p>
<h1>{t("Will NASIA be free?")}</h1>
                      <p>{t("Yes, NASIA will be free to use and modify for R&D only. We also provide annual subscription model for enterprise commercial use.")}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h1>{t("What license does NASIA use?")}</h1>
                      <p>{t("The code and models are licensed under the Apache 2.0 license, and we develop unique technologies to be patent filed soon.")}</p>
<h1>{t("What hardware will be required to run the models?")}
</h1>
                      <p>{t("There will be versions which will be runnable on consumer hardware")} </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
