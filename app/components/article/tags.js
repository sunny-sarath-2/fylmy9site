import React from "react";
import { NavLink } from "react-router-dom";

const Tags = props => {
  return (
    <section className="tags">
      {props.tags.map((element, key) => {
        return (
          <NavLink key={key} to={`${element}`}>
            {element}
          </NavLink>
        );
      })}
    </section>
  );
};

export default Tags;
