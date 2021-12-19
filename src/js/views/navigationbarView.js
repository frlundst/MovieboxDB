import React from 'react';
import '../../css/navigationbar.css';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationbarView(props) {
    return (
        <Navbar className="navbar" fixed="top" variant="dark" expand="lg" expanded={props.expanded}>
            <Nav.Link href="/">
                <Navbar.Brand className="navbar-brand" id="navigation-bar">
                    <img id="navigation-bar-img" alt="Logo" src="images/movieBoxDB Logo.png" />
                </Navbar.Brand>
            </Nav.Link>
           
            <Navbar.Toggle
                onClick={() => props.setExpanded(props.expanded ? false : "expanded")}
            />
            <Navbar.Collapse>
                <Nav className="nav">
                    <Nav.Link className="nav-item" onClick={() => {props.changePage("/"); props.setExpanded(false)}}>Home</Nav.Link>
                    <Nav.Link className="nav-item" onClick={() => {props.changePage("/search"); props.setExpanded(false)}}>Search</Nav.Link>
                    <Nav.Link className="nav-item" onClick={() => {props.changePage("/discover"); props.setExpanded(false)}}>Discover</Nav.Link>
                    <Nav.Link className="nav-item" onClick={() => {props.changePage("/login"); props.setExpanded(false)}}>Profile</Nav.Link>
                    <Nav.Link className='movie-matcher-link' onClick={() => {props.changePage("/movieMatcher"); props.setExpanded(false)}}>MovieMatcher™</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationbarView;
