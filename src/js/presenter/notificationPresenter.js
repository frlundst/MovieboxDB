import React from "react";
import NotificationView from "../views/notificationView";

function NotificationPresenter(props) {
    const [inWatchlist, setInWatchlist] = React.useState(props.model.inWatchlist);
    const [notificationText, setNotificationText] = React.useState(props.model.notificationText);

    React.useEffect(() => {
        const obs = () => {
            setInWatchlist(props.model.inWatchlist);
            setNotificationText(props.model.notificationText);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <NotificationView
            inWatchlist={inWatchlist}
            notificationText={notificationText}
            close={() => {
                props.model.setInWatchlist(false, "")
            }}
        />
    );
}

export default NotificationPresenter;
