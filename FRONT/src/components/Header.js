//import des icone panier et compte
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//import bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavDropdown from 'react-bootstrap/NavDropdown';

//import router pour lier les pages .
import { Link } from 'react-router-dom';

// Style bootstrap de Header
function Header() {
  return (

    <Navbar style={{backgroundColor:'#fff8f8'}}  >
    <Container>
      <Link to = "/"><Navbar.Brand><img src="img/logo/logo-transparent-svg.svg" alt="logo meubl&Co"/></Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">


          <NavDropdown title="Produits" id="collapsible-nav-dropdown" style={{marginLeft:"50px"}}>
            <NavDropdown.Item href="#action/3.1"><Link to = "/canapes"><img class="img-nav-link" src="../img/sofa.png" alt="Sofa from Flaticon"/> Canapés</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><Link to = "/tables"><img class="img-nav-link" src="../img/table.png" alt="Table from Flaticon"/> Tables</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><Link to = "/chaises"><img class="img-nav-link" src="../img/chair.png" alt="Chair from Flaticon"/> Chaises</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><Link to = "/rangements"><img class="img-nav-link" src="../img/wardrobe.png" alt="Wardrobe from Flaticon"/> Rangements</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><Link to = "/luminaires"><img class="img-nav-link" src="../img/lamp.png" alt="Lamp from Flaticon"/> Luminaires</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><Link to = "/decoration"><img class="img-nav-link" src="../img/plant.png" alt="Plant from Flaticon"/> Décoration</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><Link to = "/divers"><img class="img-nav-link" src="../img/3d.png" alt="3D from Flaticon"/> Divers</Link></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="">Concept</Nav.Link>

          
          <Form inline style={{marginLeft:"130px"}} >
            <Row>
              <Col s="auto">
                <Form.Control
                  type="text"
                  placeholder="Rechercher"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" style={{display:'none'}}></Button>
              </Col>
            </Row>
          </Form>
        </Nav>

        <Nav>
          <Nav.Link><Link to = "/Vendre"><button className="btn btn-primary" style={{backgroundColor:'#bb2d6b', borderColor: "#bb2d6b"}}>Vendre</button></Link></Nav.Link>
          <Nav.Link><Link to = "/panier"><FontAwesomeIcon icon={faShoppingCart} style={{color:'#bb2d6b'}}/></Link></Nav.Link>
          <Nav.Link><Link to = "/connexion"><FontAwesomeIcon icon={faUser} style={{color:'#bb2d6b'}} /></Link></Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>

    

  );
}

export default Header;
