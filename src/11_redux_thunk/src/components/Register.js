import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../reduxs/actions/auth";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFrom = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(registerUser(email, password));
  };

  const { isRegistering, registerError, isRegisterd } = props;

  if (isRegisterd) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <h1>Register</h1>
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
            Register With Google
          </button>
          <button type="submit">Register</button>
          <span>{registerError && "Ooops!!"}</span>
          <span>{isRegistering && "Registering ..."}</span>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRegistering: state.auth.isRegistering,
    registerError: state.auth.registerError,
    isRegisterd: state.auth.isRegisterd,
  };
}

export default connect(mapStateToProps)(Register);
