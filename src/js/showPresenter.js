import React from 'react';
import '../css/show.css';

function Show(props) {
    const [hashState, setHashState] = React.useState(window.location.hash);
    
    React.useEffect(() => {
        const listener = function(){setHashState(window.location.hash);}
        window.addEventListener("hashchange", listener); //Subscribe
        return function(){window.removeEventListener("hashchange", listener)} //Unsubscribe
    }, []);

    return ( <span class={hashState === props.hash ? "" : "hidden"}> {props.children} </span> );
}

export default Show;