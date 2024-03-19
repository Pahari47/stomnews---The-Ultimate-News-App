import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{disply: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
              <span className="badge rounded-pill bg-danger">
                {source}
              </span>
            </div>
          <img
            src={
              !imageUrl
                ? "https://www.hindustantimes.com/ht-img/img/2024/03/15/1600x900/INDIA-MARKETS-0_1651226937928_1710486937097.JPG"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
