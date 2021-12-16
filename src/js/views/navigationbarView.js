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
                    <Nav.Link className="nav-item" onClick={() => props.changePage("/")}>Home</Nav.Link>
                    <Nav.Link className="nav-item" onClick={() => props.changePage("/search")}>Search</Nav.Link>
                    <Nav.Link className="nav-item" onClick={() => props.changePage("/discover")}>Discover</Nav.Link>
                    <Nav.Link className="nav-item" onClick={() => props.changePage("/login")}>Profile</Nav.Link>
                    <Nav.Link className='movie-matcher-link' onClick={() => props.changePage("/movieMatcher")}>MovieMatcher™</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationbarView;
