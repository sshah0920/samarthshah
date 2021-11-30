import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
} from "react-bootstrap";
import { NavLink, withRouter} from "react-router-dom";
import { HomeRounded } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Buttons/Button';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import './header.css';

const Header = (props) => {
    const pathName = props?.location?.pathName;

    return ( 
    <Navbar expand="lg" className='header'>
    <Nav.Link as={NavLink} to='/' className={'header_navlink'}>
        <Navbar.Brand className='header_home'> 
            <HomeRounded />
        </Navbar.Brand>
    </Nav.Link>
    <Navbar.Toggle />
    <Navbar.Collapse>
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
            { /*<a href='/pages/contact.js'>
            <CustomButton text={'Hire Me'} icon={<PriorityHighIcon />}> </CustomButton>
            </a> */}
        </div>
    </Navbar.Collapse>
  </Navbar>
)}

export default withRouter(Header);
