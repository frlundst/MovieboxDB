import React from "react";
import NotificationView from "../views/notificationView";

function NotificationPresenter(props) {
    const [inWatchlist, setInWatchlist] = React.useState(props.model.inWatchlist);

    React.useEffect(() => {
        const obs = () => {
            setInWatchlist(props.model.inWatchlist);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <NotificationView
            inWatchlist={inWatchlist}
            close={() => {
                props.model.setInWatchlist(false)
            }}
        />
    );
}

export default NotificationPresenter;
