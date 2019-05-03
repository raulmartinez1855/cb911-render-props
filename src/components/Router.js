import React from "react";
import Nav from "./Nav";
import PostsPage from "../pages/PostsPage";
import NotFoundPage from "../pages/NotFoundPage";
import EditPostPage from "../pages/EditPostPage";
import AddPostPage from "../pages/AddPostPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={PostsPage} />
      <Route exact path="/posts" component={PostsPage} />
      <Route exact path="/posts/:id" component={EditPostPage} />
      <Route exact path="/add" component={AddPostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
