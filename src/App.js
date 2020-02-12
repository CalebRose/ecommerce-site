import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/homepage/homepage.component";

const Argyle = () => (
  <div>
    <h1>ARGYLE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/argyle" component={Argyle} />
          {/* <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
