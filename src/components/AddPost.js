import React from "react";
import axios from "axios";

class AddPost extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  addPost = async event => {
    event.preventDefault();
    try {
      const postReq = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          ...this.state,
          userId: 1
        }
      );
      console.log(postReq);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { children } = this.props;
    return children({
      handleChange: this.handleChange,
      addPost: this.addPost,
      ...this.state
    });
  }
}

export default AddPost;
