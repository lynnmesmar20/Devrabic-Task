import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
const CustomNavbar =()=>{
    return(
<Navbar  className="navbar">
<Container>
 
  <Nav className="me-auto links">
    <Nav.Link href="/users">Users</Nav.Link>
    <Nav.Link href="/products">Products</Nav.Link>
    
  </Nav>
</Container>
</Navbar>
    )}
export default CustomNavbar;