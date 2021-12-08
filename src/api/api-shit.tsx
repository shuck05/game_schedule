import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  username: string;
  password: string;
}

function APIshit() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("Dummyuser");
  const [pw, setPw] = useState("qwerty");

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    console.log("trying to get Users");
    axios
      .get("http://localhost:1337/users/all")
      .then((response) => {
        setUsers(response.data);
        console.log("Got the Data");
      })
      .catch((error) =>
        console.error(`There was an error retrieving the user list: ${error}`)
      );
  }

  const handleUserCreate = () => {
    axios
      .post("http://localhost:1337/users/create", {
        username: username,
        password: pw,
      })
      .then((res) => {
        console.log(res.data);
        getUsers();
      })
      .catch((error) =>
        console.error(`There was an error creating the User: ${username} `)
      );
  };

  function pushDummyUser() {
    handleUserCreate();
  }

  function logUsers() {
    console.log(users);
  }

  return (
    <div>
      <button onClick={logUsers}>get Users</button>
      <button onClick={pushDummyUser}>Click me Daddy</button>
    </div>
  );
}

export default APIshit;
