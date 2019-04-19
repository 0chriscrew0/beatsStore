import React, { Component } from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

import DefaultImage from "../../resources/img/featured-image-01.jpg";

class ProductCard extends Component {
  state = {
    playing: false
  };

  handleIconClick = () => {
    this.setState({
      playing: !this.state.playing
    });
  };

  render() {
    const { _id, audio, images, name, price, artist } = this.props;

    return (
      <div className="card product-card bg-white border-0`">
        <div className="card-img-wrapper">
          <img
            className="card-img-top img-fluid product-card-img"
            src={images ? images[0].url : DefaultImage}
            alt="beat"
          />
          <div className="overlay" onClick={this.handleIconClick}>
            <i
              className={`product-card-icon ${
                this.state.playing ? "fas fa-square" : "fas fa-play"
              }`}
            />
          </div>
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="product-title">
            <div>{name}</div>
            <div>{`$${price}`}</div>
          </h5>

          <div className="product-card-buttons">
            <Link className="btn btn-info" to={`/product/${_id}`}>
              Details
            </Link>
            <Link className="btn btn-default" to={`/product/${_id}`}>
              <i className="fas fa-cart-plus" />
            </Link>
          </div>

          {this.state.playing ? (
            <div>
              <AudioPlayer
                className="audio-player"
                streamUrl={audio.url}
                trackTitle={name}
                preloadType="metadata"
                track={{ ...this.props }}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ProductCard;
