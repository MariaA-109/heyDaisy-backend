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
router.route("/users").delete(deleteAllUsers);
router.route("/users/:_id").put(updateUser).delete(deleteUser);
// get user by ID als controller erstellen und bei der route users/id 

// bei submit muss ein put request abgefeuert werden (edit function für weitere user daten)

router
  .route("/users/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// im use-effect muss 
module.exports = router;
