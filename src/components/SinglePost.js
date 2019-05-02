import React from "react";
import axios from "axios";

class SinglePost extends React.Component {
  state = {
    title: "",
    body: "",
    loading: true
  };

  componentDidMount() {
    this.getSinglePost();
  }

  getSinglePost = async () => {
    try {
      const { postId } = this.props;
      const getReq = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const [reqData] = getReq.data;
      this.setState({ ...reqData, loading: false });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  updatePost = async event => {
    event.preventDefault();
    try {
      const { postId } = this.props;
      const putReq = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          ...this.state
        }
      );
      console.log(putReq);
    } catch (err) {
      console.log(err);
    }
  };

  deletePost = async e => {
    e.preventDefault();
    try {
      const { postId } = this.props;
      const delReq = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          ...this.state
        }
      );
      console.log(delReq);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { children } = this.props;
    return children({
      deletePost: this.deletePost,
      handleChange: this.handleChange,
      updatePost: this.updatePost,
      ...this.state
    });
  }
}

export default SinglePost;
