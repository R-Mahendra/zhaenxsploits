/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Head = (props) => {
	document.title = "Zhaenx ➣ " + props.title;
	return <>{props.children}</>;
};

export default Head;
