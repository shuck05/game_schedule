const express = require("express");

const usersRoutes = require("./users-controller.js");

const router = express.Router();

router.get("/all", usersRoutes.usersAll);

router.post("/create", usersRoutes.usersCreate);

router.post("/login", usersRoutes.login);

// router.put("/delete", booksRoutes.booksDelete);

// router.put("/reset", booksRoutes.booksReset);

module.exports = router;
