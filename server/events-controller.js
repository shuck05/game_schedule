const knex = require("./db");

exports.eventsAll = async (req, res) => {
  knex
    .select("*")
    .from("events")
    .then((eventData) => {
      res.json(eventData);
    })
    .catch((err) => {
      res.json({ message: `There was an error retrieving events: ${err}` });
    });
};

exports.eventCreate = async (req, res) => {
  knex("events")
    .insert({
      eventName: req.body.eventName,
      teams: req.body.teams,
      trainers: req.body.trainers,
      participants: req.body.participants,
      admins: req.body.admins,
    })
    .then(() => {
      res.json({
        message: `Event \'${req.body.eventName}\' created.`,
      });
    })
    .catch((err) => {
      res.json({
        message: `There was an error creating ${req.body.eventName}: ${err}`,
      });
    });
};

exports.getEventsByUserId = async (req, res) => {
  knex
    .select("*")
    .from("events")
    .then((userData) => {
      let response = [];
      let id = req.body.userID;
      for (let i = 0; i < userData.length; i++) {
        let addResponse = false;
        let trainerArr = JSON.parse(userData[i].trainers);
        for (let j = 0; j < trainerArr.length; j++) {
          if (id == trainerArr[j]) {
            addResponse = true;
            break;
          }
        }
        let participantsArr = JSON.parse(userData[i].participants);
        for (let j = 0; j < participantsArr.length; j++) {
          if (id == participantsArr[j]) {
            addResponse = true;
            break;
          }
        }
        if (addResponse) {
          response.push(userData[i]);
        }
      }

      res.json(response);
    })
    .catch((err) => {
      res.json({
        message: `There was an error while getting Events in: ${err}`,
      });
    });
};
