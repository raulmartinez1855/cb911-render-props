import React from "react";
import ReactDOM from "react-dom";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePostPage from "./pages/SinglePostPage";
import AddPostPage from "./pages/AddPostPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./sass/App.scss";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={PostsPage} />
      <Route exact path="/posts" component={PostsPage} />
      <Route exact path="/posts/:id" component={SinglePostPage} />
      <Route exact path="/add" component={AddPostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
