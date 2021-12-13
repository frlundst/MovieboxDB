import React from "react";
import ProfileView from "../views/profileView.js";

function ProfilePresenter(props) {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        if (props.user) {
            setUser(props.user);
        }
    }, [props.user]);

    return (
        <ProfileView
            user={user}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
            onDelete={props.onDelete}
        />
    );    
}

export default ProfilePresenter;
