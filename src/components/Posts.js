import React from "react";
import axios from "axios";

class Posts extends React.Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const res = await axios.get("https://cb911-backend.herokuapp.com/posts");
      this.setState({ posts: res.data.data }, () =>
        this.setState({ loading: false })
      );
    } catch (error) {
      console.error(error);
    }
  };

  deletePost = async postId => {
    try {
      const delReq = await axios.delete(
        `http://localhost:8000/posts/delete/${postId}`
      );
      console.log(delReq);
      await this.getPosts();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { children } = this.props;
    return children({
      ...this.state,
      deletePost: this.deletePost
    });
  }
}

export default Posts;
