import React from "react";
import EditProfileView from "../views/editProfileView";

function EditProfilePresenter(props) {
    const [name, setName] = React.useState(props.model.name);
    const [biography, setBiography] = React.useState(props.model.biography);
    const [image, setImage] = React.useState(props.model.image);

    React.useEffect(() => {
        const obs = () => {
            setName(props.model.name);
            setBiography(props.model.biography);
            setImage(props.model.image);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <EditProfileView
            name={name}
            biography={biography}
            image={image}
            updateProfile={() => {
                props.model.updateProfile(name, biography, image);
            }}
        />
    );
}

export default EditProfilePresenter;
