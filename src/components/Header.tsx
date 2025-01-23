import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = function () {
  
    const location = useLocation()

    return (

    <header>
      <Container>
        <Row className=" justify-content-center">
            <Col>
                <h1 className="fw-bold text-center">SPACEFLIGHT</h1>
                <ul className="d-flex justify-content-around list-unstyled">
                    <Link to={'/'} className={`fw-bold text-black${location.pathname === '/' ? '': ' text-decoration-none '}`}>
                    <li>Home</li>
                    
                    </Link>
                    <Link to={'/articles'} className={`fw-bold text-black${location.pathname === '/articles' ? '': ' text-decoration-none '}`}>
                    <li>Articles</li>
                    
                    </Link>
                    <Link to={'/aboutus'} className={`fw-bold text-black${location.pathname === '/aboutus' ? '': ' text-decoration-none '}`}>
                    <li>About Us</li>
                    
                    </Link>
                </ul>
            </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
