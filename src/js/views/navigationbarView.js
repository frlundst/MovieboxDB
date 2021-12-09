import React from 'react';
import '../../css/navigationbarView.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavigationbarView(props) {
    return (
        <Navbar className="navbar" bg="blue" fixed="top" variant="dark" expand="lg">
            <Nav.Link href="#home">
                <Navbar.Brand className="navbar-brand">
                    <img alt="Logo" src="images/movieBoxDB Logo.png" />
                </Navbar.Brand>
            </Nav.Link>
            
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="nav">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#search">Search</Nav.Link>
                    <Nav.Link href="#discover">Discover</Nav.Link>
                    <Nav.Link href="#favourites">Favourites</Nav.Link>
                    <Nav.Link href="#watchlist">Watchlist</Nav.Link>
                    <Nav.Link className='movie-matcher-link' href="#moviematcher">MovieMatcher™</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationbarView;