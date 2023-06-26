const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  signUp,
  signIn,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require("../controllers/usersController");
//const auth = require("../middlewares/auth");
const firebaseUploader = require("../middlewares/upload");

router.route("/users").get(getAllUsers);
router.route("/auth/signup").post(firebaseUploader.single("image"), signUp);
router.route("/auth/signin").post(signIn);
router.route("/users").delete(deleteAllUsers);
router.route("/users/:_id").put(updateUser).delete(deleteUser);

module.exports = router;
