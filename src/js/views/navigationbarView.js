import React from 'react';
import '../../css/navigationbarView.css';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationbarView(props) {
    return (
        <Navbar className="navbar" bg="blue" sticky="top" variant="dark" expand="lg">
            <Navbar.Brand className="navbar-brand">
                <img src="images/logo.png" />
            </Navbar.Brand>

            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="nav">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Search</Nav.Link>
                    <Nav.Link href="#">Favourites</Nav.Link>
                    <Nav.Link href="#">Watchlist</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationbarView;