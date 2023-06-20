const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentsController");

const auth = require("../middlewares/auth");

router.route("/students").get(auth, getAllStudents).post(auth, createStudent);
//post auth??

router
  .route("/students/:id")
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
