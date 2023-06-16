const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controllers/users");

router.route("/auth/users").get(getAllUsers);

module.exports = router;
