import { Card, Col, Row } from "react-bootstrap";

const Article = function () {
  return (
    <>
      <Card className="mb-3" >
        <Row className="no-gutters">
          <Col md={4}>
            <Card.Img src="..."  alt="..." />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Article;
