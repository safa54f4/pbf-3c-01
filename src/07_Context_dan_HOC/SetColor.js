import { withTheme } from "./ThemeContext/withTheme";
import "bootstrap/dist/css/bootstrap.min.css";

const SetColor = props => (
    <div className="container">
        <button type="button" className="btn btn-light" onClick={() => props.themeContext.setColor("plum")}>Plum</button>
        <button type="button" className="btn btn-light" onClick={() => props.themeContext.setColor("crimson")}>Crimson</button>
    </div>
);

export default withTheme(SetColor);