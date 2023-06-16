const express = require("express");
const router = express.Router();

const { getAllStudents } = require("../controllers/studentsController");

router.route("/students").get(getAllStudents);

module.exports = router;
