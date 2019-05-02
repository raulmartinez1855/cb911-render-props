import React from 'react';
import Posts from '../components/Posts';
import { Link } from 'react-router-dom';

const PostsPage = props => (
  <Posts>
    {({ posts, loading, deletePost }) => {
      if (loading) return null;
      return (
        <div className="post-wrapper">
          {posts.map(post => (
            <div className="post" key={post._id}>
              <div className="post-title">
                <p>Title:</p>
                <p>{post.title}</p>
              </div>
              <div className="post-body">
                <p>Body:</p>
                <p>{post.desc}</p>
              </div>
              <Link to={`/posts/${post._id}`}>
                <button className="form-button">EDIT</button>
              </Link>
              <button className="form-button" onClick={() => deletePost(post._id)}>
                DEL
              </button>
            </div>
          ))}
        </div>
      );
    }}
  </Posts>
);

export default PostsPage;
