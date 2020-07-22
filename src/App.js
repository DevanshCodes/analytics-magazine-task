import React from "react";
import logo from "./logo.svg";
import machineLogo from "./machineLogo.png";
import more from "./more.svg";
import loupe from "./loupe.svg";
import "./App.css";
import { Nav, Form, InputGroup } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import { FiSearch } from "react-icons/fi";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
