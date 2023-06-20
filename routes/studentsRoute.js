const express = require("express");

const { getAllStudents } = require("../controllers/studentsController");
const router = express.Router();

router.route("/students").get(getAllStudents);

module.exports = router;
