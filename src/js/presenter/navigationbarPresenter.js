import React from 'react';
import NavigationbarView from "../views/navigationbarView";
import { useNavigate } from "react-router-dom";

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navigation-bar").style.height = "50px";;
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navigation-bar").style.height = "100px";
	}
}

window.onscroll = function () {
	scrollFunction();
};

window.onload = function () {
	scrollFunction();
};

function NavigationbarPresenter(props) {
	const [expanded, setExpanded] = React.useState(false);

	let navigate = useNavigate();
    return(
        <div>
            <NavigationbarView
				changePage={page => navigate(page)}
				expanded={expanded}
				setExpanded={value => setExpanded(value)}
			/>
        </div>
    );
}

export default NavigationbarPresenter;