import React, {Fragment, useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import '../../Assets/css/style.css';
import logo from '../../Assets/images/logo.png';
import { NavLink } from 'react-router-dom';


    const NavBars =() => {
            const [sticky, setSticky] = useState(false);
           useEffect(() =>{
                window.addEventListener('scroll', ()=>{
                    window.scrollY > 100 ? setSticky(true): setSticky(false);

                })

           });

        return (
           
                <Fragment>

                    <Navbar fixed='top' expand="lg" className={` ${sticky? 'navbgcolor': ''}`} >

                        <Container className='NavContainer' >
                            <Navbar.Brand  className='Logos' href="#"><img className='logo-image' src={logo} alt=''></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">

                                <Nav className=" navlist ms-auto">
                                    <ul>
                                   <li><NavLink  style={({ isActive, isPending  }) =>{ return{color:isActive ? "red" : "inherit"}}} to="/">HOME</NavLink></li>
                                   <li> <NavLink style={({ isActive, isPending  }) =>{ return{color:isActive ? "red" : "inherit"}}} to="/ServicesPage">SERVICES</NavLink></li>
                                   <li> <NavLink style={({ isActive, isPending  }) =>{ return{color:isActive ? "red" : "inherit"}}} to="/CourcesPage">COURCES</NavLink></li>
                                   <li> <NavLink style={({ isActive, isPending  }) =>{ return{color:isActive ? "red" : "inherit"}}} to="/PortfolioPage" >PROTFOLIO</NavLink></li>
                                   <li> <NavLink style={({ isActive, isPending  }) =>{ return{color:isActive ? "red" : "inherit"}}} to="/ContactPage">CONTACT</NavLink></li>
                                   <li> <NavLink style={({ isActive, isPending  }) =>{ return{color:isActive ? "red" : "inherit"}}} to="/AboutPage">ABOUT</NavLink></li>
                                    </ul>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Fragment>

           
        );
    }


export default NavBars;