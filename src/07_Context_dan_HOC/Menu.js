import { withTheme } from "./ThemeContext/withTheme";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = props => (
    <div className="container">
        <div className="card" style={{ width: '18rem' }}>
            <div style={{ backgroundColor: props.themeContext.color }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '20px' }}>Menu</h5>
                    <hr />
                    <p>testing</p>
                </div>
            </div>
        </div>
    </div>
);

export default withTheme(Menu);