import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skill = () => {
  const { skill } = useContext(PortfolioContext);
  const { cta, btn, email } = skill;

  return (
    <section id="skill">
      <Container>
        <Title title="Skills" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="skill-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "Javascript"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "React"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "Node.js"}
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "Express"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "HelmetJS"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "Chai"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "Pug"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "Socket.IO"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "MonoDB"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "Mongoose"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "PostgreSQL"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "D3.js"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"

            >
              {btn || "AJAX"}
            </a>


          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Skill;
