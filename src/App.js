import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
