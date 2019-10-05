import React, { Component } from "react";
import Article from "../../components/article/article";
import SideBlock from "../../components/sideBlock";
import API from "../../../services/API";
import More from "../../components/more/more";

class Inner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id) {
      let result = await API.Single(this.props.match.params.id);
      this.setState({ data: result.data });
    } else this.props.history.push("/");
  }
  render() {
    const { data } = this.state;
    return (
      <section className="middle">
        <div className="container">
          {data.map((element, key) => {
            return element.reference ? (
              <div className="row" key={key}>
                <Article news={element.reference} {...this.props}>
                  <More />
                </Article>
                <SideBlock />
              </div>
            ) : null;
          })}
        </div>
      </section>
    );
  }
}

export default Inner;
