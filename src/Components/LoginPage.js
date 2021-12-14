import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { login, getUsers, handleUserCreate } from "../api/api-users";
import "./styles/Login.css";
import {
  getEvents,
  handleEventCreate,
  getEventsByUserId,
} from "./../api/api-events";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameTextfieldChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordTextfieldChange(e) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    login(username, password).then((userID) => {
      if (userID === "Username or Password incorrect.") {
        alert("Username or Password incorrect");
      } else {
        props.setUserID(userID);
        setUsername("");
        setPassword("");
      }
    });
  }

  function button1() {
    console.log("Button1");
    getEvents().then((events) => {
      console.log("Events:");
      console.log(events);
    });
    getUsers().then((users) => {
      console.log("Users");
      console.log(users);
    });
  }

  function button2() {
    console.log("Button2");
    getEventsByUserId(1).then((events) => {
      console.log("Events for User: 1");
      console.log(events);
    });
    /*
    handleUserCreate("Schmuddelchris", "ChicksLoveFlowers");
    handleUserCreate("Wildschwein420", "Jaegermeister");
    handleUserCreate("ValentinoRossiFan98", "Feldor");
    handleUserCreate("iPhoneSE2020", "420Euros");
    handleUserCreate("Rene", "ichGoenneNix");
    handleEventCreate(
      "Event 1",
      ["Team 4", "Team 7", "Team 3"],
      [1, 9, 5],
      [2, 6, 8, 22],
      [4]
    );
    */
  }

  return (
    <div className="background">
      <div className="center">
        <h1>Login for great Sceduling</h1>
        <TextField
          className="loginContent"
          label="Username"
          onChange={handleUsernameTextfieldChange}
        ></TextField>
        <TextField
          className="loginContent"
          label="Password"
          type="password"
          onChange={handlePasswordTextfieldChange}
        ></TextField>
        <Button
          className="loginContent"
          variant="outlined"
          onClick={handleLogin}
        >
          Login
        </Button>
        <button onClick={button1}>Fetch</button>
        <button onClick={button2}>Erstellen</button>
      </div>
    </div>
  );
}

export default LoginPage;
