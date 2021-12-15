import React from "react";
import "../../css/editProfile.css";

function EditProfileView(props) {
    return (
        <div className="edit-profile-container">
            <div className="edit-profile-image-container">
                {(props.profile === null || (Array.isArray(props.profile) ? props.profile[3] === undefined : true)) ? <img src="images/noProfileImage.jpg" alt="profile" /> : <img src={props.profile[3]} alt="profile" />}
            </div>
            <div className="edit-profile-form-container">
                <div className="edit-profile-name">
                    <h4>Name</h4>
                    <input
                        type="text"
                        value={props.biography}
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
                    <h4>Image Url</h4>
                    <input
                        type="text"
                        value={props.image}
                        onChange={(e) => {
                            props.setImage(e.target.value);
                        }}
                    />
                </div>
                <div className="edit-profile-button">
                    <button onClick={() => {props.updateProfile();}}>
                        Update Profile
                    </button>
                    <button onClick={() => {props.logout();}}>
                        Logout
                    </button>
                    <button onClick={() => {props.cancel();}}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditProfileView;
