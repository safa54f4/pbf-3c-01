import ThemeProvider from "./ThemeContext/ThemeProvider";
import Menu from "./Menu";
import SetColor from "./SetColor";

import logo from './logo.svg';
import './App.css';

export default function App () {
  return (
    <ThemeProvider>
      <Menu />
      <br />
      <SetColor />
    </ThemeProvider>
  )
}