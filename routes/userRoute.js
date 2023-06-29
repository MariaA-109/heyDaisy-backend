const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  signUp,
  signIn,
  getSingleUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require("../controllers/usersController");
const auth = require("../middlewares/auth");
const firebaseUploader = require("../middlewares/upload");

router.route("/users").get(getAllUsers).delete(deleteAllUsers);
router.route("/auth/signup").post(firebaseUploader.single("image"), signUp);
router.route("/auth/signin").post(signIn);

router
  .route("/users/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
