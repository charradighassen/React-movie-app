import React from "react";
import "./css/card.css";
import MovieRating from "./MovieRating";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-img-container">
          <img
            className="card-img"
            src={this.props.item.image}
            alt="MovieImage"
          />
        </div>
        <div className="card-content">
          <h3 className="card-title">{this.props.item.name}</h3>
          <p className="card-desc"> {this.props.item.desc}</p>
          <p className="card-date"> {this.props.item.year}</p>
          <p className="card-category"> {this.props.item.category}</p>
          <p className="card-rating">
            <MovieRating rating={this.props.item.rating} />
          </p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
