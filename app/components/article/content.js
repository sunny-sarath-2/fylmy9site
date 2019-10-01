import React from "react";

const Content = props => {
  return (
    <section
      className="article-content"
      dangerouslySetInnerHTML={{ __html: props.review }}
    ></section>
  );
};

export default Content;
