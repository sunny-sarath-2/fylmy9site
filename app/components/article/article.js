import React from "react";
import Header from "./header";
import Content from "./content";
import FooterSocial from "./footerSocial";
import RelatedArticles from "./relatedArticles";
import Tags from "./tags";

const articke = props => {
  console.log(props);
  const { title, review_created_date, review, movie_tags } = props.news;
  return (
    <div className="col-12 col-md-7 col-lg-8">
      <article>
        <Header title={title} date={review_created_date} />
        <Content review={review} />
        <FooterSocial />
        <RelatedArticles />
        <Tags tags={movie_tags} />
      </article>
    </div>
  );
};

export default articke;
