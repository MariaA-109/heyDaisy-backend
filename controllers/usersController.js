const User = require("./model/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    const { email, password, language } = req.body;
    //1. handle password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("my password - hashed", hashedPassword);

    //2. create user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      language,
    });
    res
      .status(201)
      .send(`${newUser.name} has been created! You can log in now.`);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1. find user
    const [user] = await User.find({ email });
    if (!user)
      return res
        .status(404)
        .send("User with this email does not exist. Please sign up first");
    //2. check password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(404).send("Invalid password. Try again.");
    } else {
      //3. generate and send token as valid response
      const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
      return res.status(200).send(token);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

module.exports = { getAllUsers };
