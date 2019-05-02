import React from "react";
import axios from "axios";

class AddPost extends React.Component {
  state = {
    title: "",
    desc: ""
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  addPost = async event => {
    event.preventDefault();
    try {
      const postReq = await axios.post(
        "https://cb911-backend.herokuapp.com/posts/new",
        {
          ...this.state,
          userId: 1
        }
      );
      console.log(postReq);
      await this.setState({ title: "", desc: "" });
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
