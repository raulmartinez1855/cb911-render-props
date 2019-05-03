import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const deletePost = async postId => {
    try {
      const delReq = await axios.delete(
        `https://cb911-backend.herokuapp.com/posts/delete/${postId}`
      );
      console.log(delReq);
      const newPosts = posts.filter(p => p._id !== postId);
      await setPosts(newPosts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios
      .get("https://cb911-backend.herokuapp.com/posts")
      .then(res => setPosts(res.data.data))
      .then(() => setLoading(false));
  }, []);

  const { children } = props;

  if (loading) return null;
  return children({ deletePost, posts, loading });
}
