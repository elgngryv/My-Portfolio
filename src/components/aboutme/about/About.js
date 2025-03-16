import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple"> Elgun Garayev </b> and I am a{" "}
                <b className="purple"> Full Stack Developer</b>.
                <br />
                <br />
                Tools I have good knowledge of: &nbsp;
                <b className="purple"> Visual Studio Code, Postman.</b>
                <br />
                <br />
                Experience working with: &nbsp;
                <b className="purple">
                  Bootstrap, Material UI, Ant Design, Chakra UI, Tailwind CSS.{" "}
                </b>
                <br />
                <br />
                Databases and state management: &nbsp;
                <b className="purple">
                  Firebase, MongoDB, Mongoose, Redux Toolkit, Context API.{" "}
                </b>
                <br />
                <br />
                Technologies I actively use and have worked on projects with:
                &nbsp;
                <b className="purple">
                  React.js, Node.js, Next.js, Express.js, JavaScript,
                  TypeScript, HTML5, CSS3, SASS.{" "}
                </b>
                <br />
                <br />
                Whenever possible, I am passionate about{" "}
                <b className="purple">
                  applying modern JavaScript libraries and frameworks.
                </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">
                  {" "}
                  building new web technologies and products.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
