require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//const db = require("./db");

const PORT = process.env.PORT || 8080;

//db();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
