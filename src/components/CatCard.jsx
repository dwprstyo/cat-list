import React, { Component } from "react";
import { Rating } from "react-simple-star-rating";

import "../css/cat-card.css";

class CatCard extends Component {
  state = {
    url: "",
  };

  componentDidMount() {
    let myObject = this.props.data.image;
    for (var index in myObject) {
      this.setState({
        url: myObject[index],
      });
    }
  }

  // handleSave = () => {
  //   console.log(this.props.data.id);
  // }

  render() {
    return (
      <div>
        <div className="catcard-wrapper">
          <div className="image-section"  onClick={this.props.clicked}>
            <img className="image" src={this.state.url} alt="" />
          </div>
          <div className="description-section"  onClick={this.props.clicked}>
            <span className="title">
              {this.props.data.name} <span className="from">from</span>{" "}
              <span>{this.props.data.origin}</span>{" "}
            </span>
            <span className="character">
              <span>Character : </span>
              {this.props.data.temperament}
            </span>
          </div>
          <div className="card-favorite-section">
            {/* <i className="bi bi-bookmark" onClick={this.handleSave}></i> */}
          </div>
        </div>
        {this.props.selected === this.props.number ? (
          <div className="detail-wrapper">
            <p className="content-description">{this.props.data.description}</p>
            <div className="content-rating">
              <div className="result-rating-wrap">
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.grooming}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Grooming
                </div>
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.energy_level}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Energy Level
                </div>
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.adaptability}
                    className="rating"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Adaptability
                </div>
              </div>
              <div className="result-rating-wrap">
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.affection_level}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Affection Level
                </div>
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.child_friendly}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Child Friendly
                </div>
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.health_issues}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Health Issues
                </div>
              </div>
              <div className="result-rating-wrap">
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.intelligence}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Intelligence
                </div>
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.stranger_friendly}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Stranger Friendly
                </div>
                <div className="result-rating">
                  <Rating
                    initialValue={this.props.data.social_needs}
                    className="mb-3"
                    fillColor={`#000000`}
                    size={15}
                    readonly={true}
                  />
                  Social Need
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CatCard;
