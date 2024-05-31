import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { nameCapitals } from '../../Content/variable'
import './navbar.scss'

const NavbarComponent = () => {
  return (
    <Navbar className='navbar_container' collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#">{nameCapitals}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className='secLink' to="employment" smooth={true}>Employement</Link>
            <Link className='secLink' to="projects" smooth={true}>Projects</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent