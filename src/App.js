import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
// Pages
import HomePage from "./components/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";
import SignInPage from "./components/sign-in-register/sign-in-registration.components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />

          {/* <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  setCurrentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  //
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
