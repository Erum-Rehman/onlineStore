import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { Navbar, Nav} from 'react-bootstrap';
import {CartContext} from './CartContext';
import { useHistory } from 'react-router-dom';
// import './App.css';

const MainNavbar = ({navTitle, homeText}) => {
  const {qty} = useContext(CartContext);
  const history = useHistory();
  const routePage = (route) =>{
    history.push(route)
  }
    return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img src={require("../Images/logo.png")} alt="" style={{width: 45, height: 30}}/>
  <Navbar.Brand href="#home">WINTER STORE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{textAlign:"center"}}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link onClick={()=>history.push("/")}>Home</Nav.Link>
      <Nav.Link eventKey={2} onClick={()=>history.push("/contact")}>
      Contact Us
      </Nav.Link>
      <Nav.Link onClick={()=>history.push("/login")}>Login</Nav.Link>
      <Nav.Link>
        <Link onClick={()=>history.push("/cart")}>
        <i className="fas fa-shopping-cart"></i>
    <div className="cartCount">
      <span >{qty}</span>
    </div>
        </Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>




    
   
    </>
    )
}

export default MainNavbar;