import React from "react";
import Header from "./header";
import Content from "./content";
import FooterSocial from "./footerSocial";
import RelatedArticles from "./relatedArticles";
import Tags from "./tags";

const articke = props => {
  const { title, image, review_created_date, review, movie_tags } = props.news;
  console.log(image);
  return (
    <div className="col-12 col-md-7 col-lg-8">
      <article>
        <Header title={title} date={review_created_date} />
        {image ? (
          <section class="article-pic">
            <img src={image} />
          </section>
        ) : null}
        <Content review={review} />
        <FooterSocial />
        <RelatedArticles />
        <Tags tags={movie_tags} />
      </article>
    </div>
  );
};

export default articke;
