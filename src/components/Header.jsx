import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand id='nav-brand' href="/">Lyla Guthrie</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title 
                 className="pop-out-brand"
                 id={`offcanvasNavbarLabel-expand-${expand}`}>
                Lyla Guthrie
                </Offcanvas.Title>
              </Offcanvas.Header>


              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  {/* <Nav.Link href="/aboutme">About Me</Nav.Link> */}
                  <Nav.Link href="/resume">Resume</Nav.Link>
                  <NavDropdown
                    title="Projects"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item  href="https://654c055c85c76655d8626473--weatherapp-lyla.netlify.app/" target="_blank">
                      Weather App</NavDropdown.Item>
                    <NavDropdown.Item href="#capstonelink">
                      Garage App
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;