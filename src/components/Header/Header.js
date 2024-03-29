import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
} from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink, withRouter} from "react-router-dom";
import { HomeRounded } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Buttons/Button';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import './header.css';

const Header = (props) => {
    const pathName = props?.location?.pathName;

    return ( 
    <Navbar expand="lg" className='header' sticky = 'top'>
    
    <Nav.Link as={NavLink} to='/' className={'header_navlink'}>
        <Navbar.Brand className='header_home'> 
            <HomeRounded />
        </Navbar.Brand>
    </Nav.Link>
    
    <Navbar.Toggle />
    
    <NavbarCollapse>
        <Nav className="header_left"> 
            <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'}>
            Resume
            </Nav.Link>
        
            <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>
            Portfolio
            </Nav.Link>

            <Nav.Link as={NavLink} to='/certificate' className={pathName === '/certificate' ? 'header_link_active' : 'header_link'}>
            Certificates
            </Nav.Link>

            {/*<Nav.Link as={NavLink} to='/contact' className={pathName === '/contact' ? 'header_link_active' : 'header_link'}>
            Contact
            </Nav.Link>*/}
        </Nav>
       
        <div className='header_right'>
            {Object.keys(resumeData.socials).map(key => (
               <a href={resumeData.socials[key].link} target='_blank' rel='noreferrer'>{resumeData.socials[key].icon}</a> 
            ))}
        </div>
    </NavbarCollapse>
  
  </Navbar>
)}

export default withRouter(Header);
