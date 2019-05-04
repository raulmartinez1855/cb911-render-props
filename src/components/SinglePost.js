import React from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

class SinglePost extends React.Component {
  state = {
    title: "",
    body: "",
    loading: true,
    redirect: false
  };

  componentDidMount() {
    if (this.props.postId) this.getSinglePost();
    if (this.props.noFetch) this.setState({ loading: false });
  }

  addPost = async event => {
    event.preventDefault();
    try {
      const postReq = await axios.post(
        "https://cb911-backend.herokuapp.com/posts/new",
        {
          ...this.state
        }
      );
      console.log(postReq);
      await this.setState({ title: "", desc: "", redirect: true });
    } catch (err) {
      console.log(err);
    }
  };

  getSinglePost = async () => {
    try {
      const { postId } = this.props;
      const getReq = await axios.get(
        `https://cb911-backend.herokuapp.com/posts/${postId}`
      );
      const reqData = getReq.data;
      this.setState({ ...reqData }, () => this.setState({ loading: false }));
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
        `https://cb911-backend.herokuapp.com/posts/edit/${postId}`,
        {
          ...this.state
        }
      );
      console.log(putReq);
      this.setState({ redirect: true });
    } catch (err) {
      console.log(err);
    }
  };

  deletePost = async e => {
    e.preventDefault();
    try {
      const { postId } = this.props;
      const delReq = await axios.delete(
        `https://cb911-backend.herokuapp.com/posts/delete/${postId}`
      );
      console.log(delReq);
      this.setState({ redirect: true });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { loading, redirect } = this.state;
    const { children } = this.props;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/" />;
    return children({
      addPost: this.addPost,
      deletePost: this.deletePost,
      handleChange: this.handleChange,
      updatePost: this.updatePost,
      ...this.state
    });
  }
}

export default SinglePost;
