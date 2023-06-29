const admin = require("firebase-admin");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const User = require("../model/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const signUp = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { email, password, language, profilePicture } = req.body;
    // const file = req.file;
    //1. handle password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("my password - hashed", hashedPassword);

    // 2. Upload file to Firebase Storage and get the URL
    /* const imageUrl = await uploadFileToFirebaseStorage(file);*/
    //3. create user with imageUrl
    const newUser = await User.create({
      email,
      password: hashedPassword,
      language,
      profilePicture,
    });
    console.log("new user", newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1. find user
    const [user] = await User.find({ email });
    if (!user) {
      return res
        .status(404)
        .send("User with this email does not exist. Please sign up first");
    }
    //2. check password
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(404).send("Invalid password. Try again.");
    } else {
      //3. generate and send token as valid response
      const token = jwt.sign({ _id: user.id }, `${process.env.JWT_SECRET_KEY}`);
      return res.status(200).send({
        token,
        user,
        //ALTERNATIV ohne Passwort:
        // user: {
        //   email: user.email,
        //   language: user.language,
        //   firstName: user.firstName,
        //   age: user.age,
        //   gender: user.gender,
        //   motherLanguage: user.motherLanguage,
        //   profilePicture: user.profilePicture,
        //   nationality: user.nationality,
        //   country: user.country,
        //   description: user.description,
        // },
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const singleStudent = await Student.findById(_id);
    res.status(200).json(singleStudent);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const {
      email,
      password,
      language,
      firstName,
      lastName,
      userName,
      age,
      gender,
      motherLanguage,
      profilePicture,
      nationality,
      country,
      description,
    } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        email,
        password,
        language,
        firstName,
        lastName,
        userName,
        age,
        gender,
        motherLanguage,
        profilePicture,
        nationality,
        country,
        description,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedUser = await User.findByIdAndDelete(_id);
    res.status(200).send(`${deletedUser.firstName} has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const deletedUsers = await User.deleteMany();
    res.status(200).send(`All users have been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllUsers,
  signUp,
  signIn,
  getSingleUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
