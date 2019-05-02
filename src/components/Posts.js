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
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );
      this.setState({ posts: res.data, loading: false });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { children } = this.props;
    return children({
      ...this.state
    });
  }
}

export default Posts;
