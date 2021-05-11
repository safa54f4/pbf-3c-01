import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home"
import Register from "./components/Register"
import ProtectedRoute from "./components/protectedRoute";

function Root(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}
export default connect(mapStateToProps)(Root);
