require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const usersRouter = require("./routes/userRoute");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;

db();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.json());

// routing middlewares
app.use("/", usersRouter);
//
// Use the `upload` middleware to handle the file upload

app.get("/", (req, res) => {
  res.send("heyDaisy!");
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
