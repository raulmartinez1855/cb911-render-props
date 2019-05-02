import React from "react";
import AddPost from "../components/AddPost";

const AddPostPage = props => (
  <AddPost>
    {({ handleChange, addPost, body, title }) => (
      <form
        onSubmit={e => addPost(e)}
        className="add-post-form flex-center column employee-adder"
      >
        <input
          type="text"
          name="title"
          className="text-input"
          required
          placeholder="Post Name"
          value={title}
          onChange={handleChange}
        />
        <textarea
          name="body"
          className="text-area"
          required
          placeholder="Post Body..."
          value={body}
          onChange={handleChange}
        />
        <button className="form-button" type="submit">
          Add
        </button>
      </form>
    )}
  </AddPost>
);

export default AddPostPage;
