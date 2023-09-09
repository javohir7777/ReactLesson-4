import React, { Component } from "react";
import request from "../server";
import PostCards from "../cards/PostCards";
import ServerLoading from "../loading/ServerLoading";

export class PostsPage extends Component {
  state = {
    posts: [],
    loading: false,
  };
  async getPosts() {
    try {
      this.setState({ loading: true });
      let { data } = await request("posts");
      this.setState({ posts: data });
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { posts, loading } = this.state;
    return (
      <section>
        <h1>All Posts</h1>
        <div className="posts-row">
          {loading ? (
            <ServerLoading />
          ) : (
            posts.map((post, i) => <PostCards key={i} {...post} />)
          )}
        </div>
      </section>
    );
  }
}

export default PostsPage;
