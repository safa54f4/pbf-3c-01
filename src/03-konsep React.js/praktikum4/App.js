import logo from "./logo.svg";
import "./App.css";

function Kartu(props) {
  return (
    <h1>
      Halo, {props.nim} - {props.nama}
    </h1>
  );
}

function App() {
  return (
    <div>
      <Kartu nim="17562799" nama="Ahmad" />
      <Kartu nim="17255643" nama="Safa" />
      <Kartu nim="17653408" nama="Dhiata" />
      <Kartu nim="17653407" nama="KELAS" />
      <Kartu nim="17653409" nama="TI" />
      <Kartu nim="17653410" nama="3C" />
    </div>
  );
}

export default App;
