import React from "react";
import SinglePost from "../components/SinglePost";

const SinglePostPage = props => (
  <SinglePost postId={props.match.params.id}>
    {info => {
      const {
        title,
        body,
        handleChange,
        updatePost,
        deletePost,
        loading
      } = info;

      if (loading) return <h1>Loading...</h1>;
      return (
        <form
          onSubmit={e => updatePost(e)}
          className="add-post-form flex-center column employee-adder"
        >
          <h1>Edit Your Post</h1>
          <input
            type="text"
            name="title"
            className="text-input"
            required
            onChange={handleChange}
            value={title}
            placeholder="Post Name"
          />
          <textarea
            name="body"
            className="text-area"
            required
            onChange={handleChange}
            value={body}
            placeholder="Post Body..."
          />

          <button className="form-button" type="submit">
            Update
          </button>
          <button className="form-button" onClick={e => deletePost(e)}>
            Delete
          </button>
        </form>
      );
    }}
  </SinglePost>
);

export default SinglePostPage;
