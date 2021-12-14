import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { login, getUsers, handleUserCreate } from "../api/api-users";
import "./styles/Login.css";
import { getEvents, handleEventCreate } from "./../api/api-events";

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
    // console.log("Button1");
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
    let emptyDB = true;
    getUsers().then((users) => {
      console.log(users.length);
      if (users.length > 0) emptyDB = false;
      if (emptyDB) {
        console.log("DB ist empty");
        handleUserCreate("admin", "admin");
        handleUserCreate("Schmuddelchris", "ChicksLoveFlowers");
        handleUserCreate("Wildschwein420", "Jaegermeister");
        handleUserCreate("ValentinoRossiFan98", "Feldor");
        handleUserCreate("iPhoneSE2020", "420Euros");
        handleUserCreate("Rene", "ichGoenneNix");
        handleEventCreate(
          "Beerpong",
          ["EisenLeber", "4 Linke Haende", "Trickshots", "BounceBalls"],
          [1, 2, 3, 4, 45, 96, 78, 151, 79, 321],
          [5, 6, 7, 32, 155, 687, 1564, 4894],
          [1]
        );
        handleEventCreate(
          "DBD",
          ["Old Guy", "The first Victim", "Survivor", "Hero"],
          [1, 2, 3, 4, 987, 4569, 56, 694, 123, 48],
          [5, 6, 7, 99, 88, 77, 44, 556, 665, 113],
          [2]
        );
        handleEventCreate(
          "Colours",
          ["Red", "Green", "Yellow", "Blue", "Purple", "Orange"],
          [3, 5, 7, 9, 4, 11, 465, 8741],
          [44, 556, 665, 113, 874, 6874, 687, 64684, 1384, 6876],
          [1]
        );
      }
    });
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
        <button onClick={button1}>FetchDataFromDatabase</button>
        <button onClick={button2}>DummyDataToDatabase</button>
      </div>
    </div>
  );
}

export default LoginPage;
