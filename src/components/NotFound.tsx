import { Alert, Col, Container, Row } from "react-bootstrap"

const NotFound = function (){
    return (
        <>
            <Container>
                <Row className=" justify-content-center">
                    <Col>
                        <Alert variant="danger" className="text-center">
                            <h1>404</h1>
                            <p>Page Not Found</p>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </>

    )


}
export default NotFound