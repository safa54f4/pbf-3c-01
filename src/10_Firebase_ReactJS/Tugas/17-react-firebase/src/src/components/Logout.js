import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from 'firebase/app';
import "firebase/analytics"
import "firebase/auth"
var googleProvider = new firebase.auth.GoogleAuthProvider();

function Logout() {
    const [loading, setLoading] = useState(false);

    const [error, setErrors] = useState("");
    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        setLoading(true)
        firebase
            .auth()
            .then(res => {
                if (res.user) Auth.setLoggedIn(true);
                setLoading(false)
            })
            .catch(e => {
                setErrors(e.message);
            })
    };
    const handleOnMetu = e => {
        e.preventDefault();


        firebase
            .auth()
            .signOut()
            .then((result) => {
                Auth.setLoggedIn(false);
                // Sign-out successful.
            })
            .catch(e => {
                setLoading(false);
                setErrors(e.message);
            })
    };


    return (
        <div>
            <h1>Logout</h1>
            <form onSubmit={e => handleForm(e)}>

                <button type="submit" onClick={e => handleOnMetu(e)}>
                    {loading ? <Spinner animation="grow" role="status" /> : "Logout"}</button>
                {/* <button type="button" onClick={e =>handleOnMetu(e)}>Metu</button> */}

                <span>{error}</span>
            </form>
        </div>
    );
} export default Logout;