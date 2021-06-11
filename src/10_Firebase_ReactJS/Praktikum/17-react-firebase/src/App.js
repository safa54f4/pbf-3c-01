import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import routes from './components/routes';
import './App.css';

import firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
    const [isLoggedin, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedin, setLoggedIn }}>
            Is logged in? {JSON.stringify(isLoggedin)}
            <div className="App">
                <Router>
                    <Header />

                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Switch>
                </Router>
            </div>
        </AuthContext.Provider>
    );
}

export default App;