import { Col } from "react-bootstrap";

import {useTranslation} from 'react-i18next'
export const ProjectCard = ({ title, description, imgUrl }) => {
  const {t} = useTranslation();
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx"
       style={{
        fontFamily:document.body.dir ==="ltr"? 'OpenSans':"Tajawal"
      }}
      >
        <img src={imgUrl} style={{
          height:'200px'
        }}
        alt="projectImg"
        />
        <div className="proj-txtx">
          <h4>{t(title)}</h4>
          <span>{t(description)}</span>
        </div>
      </div>
    </Col>
  )
}
