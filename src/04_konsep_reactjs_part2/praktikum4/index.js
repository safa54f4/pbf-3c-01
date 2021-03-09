import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function NumberList(props) {
  const nim = props.nim;
  const listItems = nim.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const nim = [1, 9, 4, 1, 7, 2, 3, 0, 1, 2]; // <-- Ubah sesuai NIM Anda
ReactDOM.render(
  <NumberList nim={nim} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();