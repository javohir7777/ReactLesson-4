import React, { Component } from "react";

export class PostCards extends Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <div className="alert alert-info">
        <h3>
          {id}. {title}
        </h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default PostCards;
