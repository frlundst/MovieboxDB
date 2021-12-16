import React from 'react';
import '../../css/navigationbar.css';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationbarView(props) {
    return (
        <Navbar className="navbar" bg="blue" fixed="top" variant="dark" expand="lg">
            <Nav.Link href="/">
                <Navbar.Brand className="navbar-brand" id="navigation-bar">
                    <img id="navigation-bar-img" alt="Logo" src="images/movieBoxDB Logo.png" />
                </Navbar.Brand>
            </Nav.Link>
           
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="nav">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/discover">Discover</Nav.Link>
                    <Nav.Link href="/login">Profile</Nav.Link>
                    <Nav.Link className='movie-matcher-link' href={props.isLoggedIn ?"/movieMatcher": "/login"}>MovieMatcher™</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationbarView;
