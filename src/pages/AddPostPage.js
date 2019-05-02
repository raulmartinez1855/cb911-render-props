import React from 'react';
import AddPost from '../components/AddPost';

const AddPostPage = props => (
  <AddPost>
    {({ handleChange, addPost, desc, title }) => (
      <form onSubmit={e => addPost(e)} className="add-post-form flex-center column">
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
          name="desc"
          className="text-area"
          required
          placeholder="Post Body..."
          value={desc}
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
