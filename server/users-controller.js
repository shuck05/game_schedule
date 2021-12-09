const knex = require("./db");

exports.usersAll = async (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};

exports.usersCreate = async (req, res) => {
  knex("users")
    .insert({
      username: req.body.username,
      password: req.body.password,
    })
    .then(() => {
      res.json({
        message: `User \'${req.body.username}\' created.`,
      });
    })
    .catch((err) => {
      res.json({
        message: `There was an error creating ${req.body.username}: ${err}`,
      });
    });
};

exports.login = async (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((userData) => {
      let username = req.body.username;
      let password = req.body.password;
      let id = null;
      for (let i = 0; i < userData.length; i++) {
        if (
          username == userData[i].username &&
          password == userData[i].password
        ) {
          id = userData[i].id;
          break;
        }
      }
      if (id === null) {
        res.json("Username or Password incorrect.");
      } else {
        res.json(id);
      }
    })
    .catch((err) => {
      res.json({ message: `There was an error while logging in: ${err}` });
    });
};
