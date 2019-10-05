import React, { Component } from "react";
import Article from "../../components/article/article";
import SideBlock from "../../components/sideBlock";
import API from "../../../services/API";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  async componentDidMount() {
    let result = await API.News();
    this.setState({ news: result.data });
  }
  render() {
    const { news } = this.state;
    return (
      <section className="middle">
        <div className="container">
          {news.map((element, key) => {
            return element.reference ? (
              <div className="row" key={key}>
                <Article news={element.reference} />
                <SideBlock />
              </div>
            ) : null;
          })}
        </div>
      </section>
    );
  }
}

export default News;
