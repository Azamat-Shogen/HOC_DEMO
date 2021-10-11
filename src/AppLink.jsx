import React from "react";

const AppLink = (props) => {
  return (
    <NavLink to={props.to} activeClassName="active-link">
      {props.children}
    </NavLink>
  );
};

export default AppLink;
