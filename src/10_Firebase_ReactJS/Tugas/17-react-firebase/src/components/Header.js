import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => (
    <ul className="nav  nav-tabs">
        {routes.map((route, i) => (

            <li key={i} class="nav-item nav-link ">
                <Link to={route.path}>{route.name}</Link>
            </li>


        ))}
    </ul>
);

export default Header;