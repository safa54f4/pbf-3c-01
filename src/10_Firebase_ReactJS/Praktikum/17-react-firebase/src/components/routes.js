import Register from './Register';
import Login from './Login';

const routes = [
    { name: "Register", path: "/", exact: true, main: () => <Register /> },
    { name: "Login", path: "/login", exact: true, main: () => <Login /> }
];

export default routes;