import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from 'firebase/app';
import "firebase/analytics"
import "firebase/auth"
var googleProvider = new firebase.auth.GoogleAuthProvider();

function Login() {
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) Auth.setLoggedIn(true);
        setLoading(false);

      })
      .catch(e => {
        setErrors(e.message);
        setLoading(false);

      })
  };

  const handleOnClick = (provider) => {
    setLoadingGoogle(true);
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user) Auth.setLoggedIn(true);
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setLoadingGoogle(false);

        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
        />
        <hr />
        <button className="googleBtn" type="button" onClick={() => handleOnClick(googleProvider)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
              {loadingGoogle ? <Spinner animation="grow" role="status" /> : "Login With Google"}
            </button>
        <button type="submit">
          {loading ? <Spinner animation="border" role="status" /> : "Login"}
        </button>
        {/* <button type="button" onClick={e =>handleOnMetu(e)}>Metu</button> */}

        <span>{error}</span>
      </form>
    </div>
  );
} export default Login;