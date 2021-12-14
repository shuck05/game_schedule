const express = require("express");

const eventsRoutes = require("./events-controller.js");

const router = express.Router();

router.get("/all", eventsRoutes.eventsAll);

router.post("/create", eventsRoutes.eventCreate);

router.post("/getEventsByUserId", eventsRoutes.getEventsByUserId);

// router.put("/delete", booksRoutes.booksDelete);

// router.put("/reset", booksRoutes.booksReset);

module.exports = router;
