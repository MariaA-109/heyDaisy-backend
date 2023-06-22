const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  signUp,
  signIn,
  deleteAllUsers,
} = require("../controllers/usersController");
//const auth = require("../middlewares/auth");

router.route("/users").get(getAllUsers);
router.route("/auth/signup").post(signUp);
router.route("/auth/signin").post(signIn);
router.route("/users").delete(deleteAllUsers);

module.exports = router;
