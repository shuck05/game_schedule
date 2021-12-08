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
