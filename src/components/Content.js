import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./content.css";
import contentData from "../utils/contentData";

const Content = () => {
  const { loginWithRedirect } = useAuth0();

  const handleGetStarted = () => {
    loginWithRedirect({
      screen_hint: "signup",
    });
  };

  return (
    <div className="next-steps my-5">
      <div className="text-center header">
        <h1>WELCOME TO CYBER WORLD!</h1>
        <p>
          A User-friendly learning platform. Come, let's solve complex
          challenges.
        </p>
        <div className="action-buttons">
          <Button color="danger" onClick={handleGetStarted}>
            Get started
          </Button>
          <Button color="link" className="text-white" href="/features">
            Learn more →
          </Button>
        </div>
      </div>
      <Row className="d-flex justify-content-between">
        {contentData.map((col, i) => (
          <Col key={i} md={5} className="mb-4">
            <h6 className="mb-3">
              <a href={col.link}>
                <FontAwesomeIcon icon="link" className="mr-2" />
                {col.title}
              </a>
            </h6>
            <p>{col.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Content;
