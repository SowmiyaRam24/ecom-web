import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navibar.css';

function NavbarS() {
  return (
    <div>
     <Navbar bg="dark" variant="dark">
        <Container  >
          <div className='navbarMenu'>

          <Nav>

            <Nav.Link href="/Home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="/store" style={{paddingLeft:'15%',color:'white'}}>Store</Nav.Link>
            <Nav.Link href="/About" style={{paddingLeft:'15%',color:'white'}}>About</Nav.Link>
          
          </Nav>
          </div>
           
        </Container>
      </Navbar> 
      
    </div>
  )
}

export default NavbarS;