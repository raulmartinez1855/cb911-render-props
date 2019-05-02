import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to={`/`}>Posts</Link> <Link to={`/add`}>Add Post</Link>
  </nav>
);

export default Nav;
