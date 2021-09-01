import React, { Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/Navbar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Friends/UsersContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp, catchedError } from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    this.props.catchedError(reason.reason);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillMount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <Switch>
          <div className="app-wrapper-content">
            {this.props.globalError && <div>Ошибка</div>}
            <Suspense fallback={<div>Загрузка...</div>}>
              <section>
                <Redirect from="/" to="/profile" />
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
              </section>
            </Suspense>
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, catchedError })
)(App);
