import React from 'react'
import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/data-visualization-state-in-2021-blog-featured-1200x628-1.jpg";
import projImg2 from "../assets/img/project1.jpeg";
import projImg3 from "../assets/img/project3.png";
import {useTranslation} from 'react-i18next'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
const Models = () => {
  const {t} = useTranslation();
    const projects = [
        {
          title: "Nasia Models",
          description: "visualization technologies",
          imgUrl: projImg1,
        },
        {
          title: "Nasia Models",
          description: "Natural Language Processing",
          imgUrl: projImg2,
        },
        {
          title: "Nasia Models",
          description: "Smart procedures",
          imgUrl: projImg3,
        },
        {
          title: "Nasia Models",
          description: "visualization technologies",
          imgUrl: projImg1,
        },
        {
          title: "Nasia Models",
          description: "Natural Language Processing",
          imgUrl: projImg2,
        },
        {
          title: "Nasia Models",
          description: "Smart procedures",
          imgUrl: projImg3,
        },
      ];
  return (
    <section className="project" id="project"
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
              <h2>{t("Nasia Models")}</h2>
              <p>{t("Conversational interaction and visualization technologies are used by NASIA Models. The decision-making structure enables NASIA to respond and participate in Internet flow roundup. NASIA improves SMART procedures, refutes false assumptions, and denies improper requests for excellent results in real time.")}</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Models
