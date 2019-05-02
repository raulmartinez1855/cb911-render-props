import React from "react";
import Posts from "../components/Posts";
import { Link } from "react-router-dom";

const PostsPage = props => (
  <Posts>
    {({ posts, loading }) => {
      if (loading) return <h1>Loading...</h1>;
      return posts.map(post => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>edit</Link>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ));
    }}
  </Posts>
);

export default PostsPage;
