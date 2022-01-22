import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  props.handleName(props.fullName);

  return (
    <>
      <h2>Hello {props.fullName}</h2>
      <div style={{ width: 300, overflow: "hidden" }}>
        {props.children}
        <h2>Profession : {props.profession}</h2>
      </div>
    </>
  );
};
Profile.defaultProps = {
  fullName: "fullName",
  bio: "biographie",
  profession: "dev",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
};

export default Profile;
