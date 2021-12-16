import React from "react";
import EditProfileView from "../views/editProfileView";
import { useNavigate } from "react-router-dom";

function EditProfilePresenter(props) {
    const [profile, setProfile] = React.useState(props.model.profile);
    let navigate = useNavigate();
    var name;
    var biography;
    var image;

    React.useEffect(() => {
        const obs = () => {
            setProfile(props.model.profile);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <EditProfileView
            profile={profile}
            updateProfile={() => {
                props.model.updateProfile(name, biography, image);
                navigate(`/login`);
            }}
            setName={(name_set) => {
                name = name_set;
            }}
            setBiography={(biography_set) => {
                biography = biography_set;
            }}
            setImage={(image_set) => {
                image = image_set;
            }}
            logout={() => {
                props.model.signOutUser();
                navigate(`/`);
            }}
            cancel={() => {
                navigate(`/login`);
            }}
        />
    );
}

export default EditProfilePresenter;
