import logo from "./logo.svg";
import "./App.css";

function Komentar(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          width="77px"
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-asu">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
      <div className="Comment-text">{props.text}</div>
    </div>
  );
}

function App() {
  let me = { name: "A.SAFA DHIATA", avatarUrl: logo };
  return (
    <div>
      <Komentar
        asu="1941723012"
        date="02-11-1922"
        author={me}
        text="SEMANGAT ya jangan malas malas ya, 1941723012"
      />
    </div>
  );
}

export default App;
