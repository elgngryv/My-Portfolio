import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/book.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                  }}>
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "white" }}>
                      Flixor
                    </h5>
                    <img src={nyc} alt={nyc} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://intern-intelligence-movieapps.vercel.app/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}>
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        fontWeight: 600,
                      }}>
                      Flexor - A Modern TV Series Discovery Platform. This is a
                      modern platform designed for TV series enthusiasts. Making
                      it easy to discover popular and trending series. This
                      project aims to provide a seamless and user-friendly
                      experience. 🚀
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      fontWeight: 600,
                    }}>
                    Nextjs,TailwindCss, Typescript,Responsiv Tmdb api
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                  }}>
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "white" }}>
                      Opera & Ballet Theatre
                    </h5>
                    <img src={hd} alt={hd} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://final-project-opera-ballet.vercel.app/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}>
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        fontWeight: 600,
                      }}>
                      Opera & Ballet is a platform dedicated to showcasing the
                      beauty of classical performing arts. Discover breathtaking
                      opera and ballet performances, explore upcoming events,
                      and immerse yourself in a world of artistic excellence.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      fontWeight: 600,
                    }}>
                    NextJs,TailwindCss, TypeScript, Nodejs,
                    ExpressJs,MongoDB,Redux
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                  }}>
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "white" }}>
                      Portfolio
                    </h5>
                    <img src={ci} alt={ci} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/elgngryv/My-Portfolio"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}>
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        fontWeight: 600,
                      }}>
                      Welcome to my personal portfolio. Explore my work, skills,
                      and achievements in a concise and visually appealing
                      format. Get a glimpse of my expertise and creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      fontWeight: 600,
                    }}>
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                  }}>
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "white" }}>
                      Makina.az
                    </h5>
                    <img src={eco} alt={eco} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://makina-az.vercel.app/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}>
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        fontWeight: 600,
                      }}>
                      Makina.az is an innovative platform offering a wide range
                      of car wash equipment. Easily find modern and reliable
                      solutions for any car wash business with our user-friendly
                      search system.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      fontWeight: 600,
                    }}>
                    REACT, TAILWINDCSS, MongoDB, NodeJS, Express.js, Zustand
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
