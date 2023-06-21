const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  signUp,
  signIn,
} = require("../controllers/usersController");
//const auth = require("../middlewares/auth");

router.route("/users").get(getAllUsers);
router.route("/auth/signup").post(signUp);
router.route("/auth/signin").post(signIn);

module.exports = router;
