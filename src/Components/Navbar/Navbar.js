import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-scroll'
import './navbar.scss'




const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#">EESHAN DUTTA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <nav className="ml-auto">
          <Link className='secLink' to="employment" smooth={true}>Employement</Link>
          <Link className='secLink' to="projects" smooth={true}>Projects</Link>
        </nav>
        </Navbar.Collapse>
    </Navbar>
  )
}




        



export default NavbarComponent