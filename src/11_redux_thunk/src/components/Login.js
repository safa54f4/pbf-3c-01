import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../reduxs/actions/auth";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFrom = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(loginUser(email, password));
  };
  const { isLoggingIn, loginError, isAuthenticated } = props;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(value) => handleFrom(value)}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="password"
          />
          <hr />
          <button className="googleBtn" type="button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="logo"
            />
            Login With Google
          </button>
          <button type="submit">Login</button>
          <span>{loginError && "Email atau Password Salah!"}</span>
          <span>{isLoggingIn && "Sedang login ..."}</span>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Login);
