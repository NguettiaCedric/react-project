import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container fluid="md mt-4">
      <Row>
        <Col>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p>
        </Col>
        <Col>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p>
        </Col>
        <Col>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p>
        </Col>
        <Col lg="6">
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
