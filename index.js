require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const studentsRouter = require("./routes/studentsRoute");
const app = express();
const PORT = process.env.PORT || 8080;

db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", studentsRouter);

app.get("/", (req, res) => {
  res.send("heyDaisy!");
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
