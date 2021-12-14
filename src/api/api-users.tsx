import axios from "axios";

interface User {
  id: number;
  username: string;
  password: string;
}

const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get("http://localhost:1337/users/all");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (username: string, password: string): Promise<void> => {
  try {
    const response = await axios.post("http://localhost:1337/users/login", {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleUserCreate = (username: string, password: string) => {
  axios
    .post("http://localhost:1337/users/create", {
      username: username,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      getUsers();
    })
    .catch((error) =>
      console.error(`There was an error creating the User: ${username} `)
    );
};

export { getUsers, login, handleUserCreate };
