import React from 'react';
import PropTypes from 'prop-types';

// import Ben from './Ben.jpg'
// import Benlogo from './MyComponents/bentley_logo.png'
import Benlogo from './bl.png'
import {Navbar, Nav, NavItem, NavDropdown, Container} from 'react-bootstrap';
function Header(props) {
  return (
    <div>
      <Navbar className="App2" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img className='App3' src={Benlogo}  alt="logo" /></Navbar.Brand>
    {/* <Navbar.Brand href="#home">{props.title}</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    {

    
    props.searchBar?< form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>: " "}
  </Container>
</Navbar>
    </div>
  );
}

export default Header;

Header.defaultProps ={
  title: "Your Title Here",
  
}

Header.propTypes= {
  title: PropTypes.string 
}