import React from "react";
const Image = (props) => {
  return (
    <img className={props.classes} src={props.source} alt={props.altName} />
  );
};

export default Image;
