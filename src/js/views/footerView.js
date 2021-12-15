import React from 'react';
import '../../css/footer.css';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faAddressBook, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function FooterView(props) {
    return (
        <Footer
            className="footer"
            sticky="bottom"
            columns={[
                {
                    icon: (
                        <FontAwesomeIcon icon={faUsers}/>
                    ),
                    title: "About Us",
                    items: [
                        {
                            description:
                                "Who doesn't love movies? At MovieBoxDB we strive for the best and easiest movie discovering experience, with the help of TheMovieDB API. Our website offers multiple ways to find new movies. Join us today!",
                            className: "footer-about-text"
                        }        
                    ],
                    style: {
                        paddingRight: '30px',
                        paddingLeft: '30px',
                        width: "250%",
                    },
                    className: "footer-about-us"
                },
                {
                    icon: (
                        <FontAwesomeIcon icon={faAddressBook}/>
                    ),
                    title: "Contact Us",
                    items: [
                        {
                            title:
                                "If you have any questions, please feel free to contact us. We are always happy to help you.",
                            className: "footer-contact-text"
                        },
                        {
                            title: "Email: info@example.com",
                            url: "mailto:info@example.com"
                        },
                        {
                            title: "Phone: +1-123-456-7890",
                            url: "tel:+1-123-456-7890"
                        },                                 
                    ],
                    style: {
                        paddingRight: '30px',
                        paddingLeft: '30px',
                        width: "150%",
                    },
                    className: "footer-contact-us"
                },
                {
                    title: "Links",
                    icon: (
                        <FontAwesomeIcon icon={faLocationArrow}/>
                    ),
                    items: [
                        {
                            title: "Home",
                            url: "/#home"
                        },
                        {
                            title: "Search",
                            url: "/#search"
                        },
                        {
                            title: "Discover",
                            url: "/#discover"
                        },
                        {
                            title: "Favourites",
                            url: "/#favourites"
                        },
                        {
                            title: "Watchlist",
                            url: "/#watchlist"
                        },
                    ],
                    style: {
                        width: "100%",
                        paddingRight: '30px',
                        paddingLeft: '30px',
                    }
                },
                {
                    title: "Attribution",
                    items: [
                        {
                            title: "Powered by",
                            url: "https://www.themoviedb.org/",
                            openExternal: true
                        },
                        {
                            icon: (
                                <img src="./images/moviedb.svg" alt='themoviedb.org'/>
                            ),
                        },
                    ],

                    style: {
                        paddingRight: '30px',
                        paddingLeft: '30px',
                        width: "100%",
                    },
                    className: "footer-attribution"            
                }
            ]}
            bottom="Copyright © 2021 MovieBoxDB"
            columnLayout="space-around"
        />
    );
}

export default FooterView;
