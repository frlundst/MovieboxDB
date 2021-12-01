import React from 'react';
import '../../css/navigationbarView.css';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationbarView(props) {
    return (
        <Navbar className="navbar" bg="blue" fixed="top" variant="dark" expand="lg">
            <Navbar.Brand className="navbar-brand" href="#">
                <img alt="Logo" src="images/logo.png" />
            </Navbar.Brand>

            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="nav">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#search">Search</Nav.Link>
                    <Nav.Link href="#favourites">Favourites</Nav.Link>
                    <Nav.Link href="#watchlist">Watchlist</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationbarView;