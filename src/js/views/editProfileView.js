import React from "react";
import "../../css/editProfile.css";

function EditProfileView(props) {
    return (
        <div className="edit-profile-container">
            <div className="edit-profile-image-container">
            </div>
            <div className="edit-profile-form-container">
                <div className="edit-profile-name">
                    <h4>Name</h4>
                    <input
                        type="text"
                        value={props.name}
                        onChange={(e) => {
                            props.setName(e.target.value);
                        }}
                    />
                </div>
                <div className="edit-profile-biography">
                    <h4>Biography</h4>
                    <textarea
                        value={props.biography}
                        onChange={(e) => {
                            props.setBiography(e.target.value);
                        }}
                    />
                </div>
                <div className="edit-profile-image">
                    <h4>Image</h4>
                    <input
                        type="text"
                        value={props.image}
                        onChange={(e) => {
                            props.setImage(e.target.value);
                        }}
                    />
                </div>
                <div className="edit-profile-button">
                    <button
                        onClick={() => {
                            props.updateProfile();
                        }}
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditProfileView;
