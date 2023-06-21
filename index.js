require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const studentsRouter = require("./routes/studentsRoute");
const usersRouter = require("./routes/userRoute");
const bodyParser = require("body-parser");

const app = express();

////////////////////////////Pedro Tech Start////////////////////////////////////////////////
const http = require("http");

const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

///////////////////////////////// Pedro Tech End ///////////////////////////////////////////
const PORT = process.env.PORT || 8080;

db();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.json());

// routing middlewares
app.use("/", studentsRouter, usersRouter);
//

app.get("/", (req, res) => {
  res.send("heyDaisy!");
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// Pedro Tech
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
// Pedro Tech
