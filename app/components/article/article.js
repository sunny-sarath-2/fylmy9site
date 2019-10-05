import React from "react";
import Header from "./header";
import Content from "./content";
import FooterSocial from "./footerSocial";
import RelatedArticles from "./relatedArticles";
import Tags from "./tags";

const article = props => {
  const {
    title,
    image,
    created_date,
    review,
    movie_tags,
    tags,
    article
  } = props.news;
  return (
    <div className="col-12 col-md-7 col-lg-8">
      <article>
        <Header title={title} date={created_date} {...props} />
        {image ? (
          <section className="article-pic">
            <img src={image} />
          </section>
        ) : null}
        <Content review={review ? review : article} />
        <FooterSocial />
        <RelatedArticles />
        <Tags tags={movie_tags ? movie_tags : tags} />
        {props.children}
      </article>
    </div>
  );
};

export default article;
