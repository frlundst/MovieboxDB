import React from 'react';
import NavigationbarView from "../views/navigationbarView"

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

function NavigationbarPresenter(props){
    return(
        <div>
            <NavigationbarView></NavigationbarView>
        </div>
    );
}

export default NavigationbarPresenter;