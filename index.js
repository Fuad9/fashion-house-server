const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = 5000;
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.send(__dirname + "/index.html");
});

io.on("connection", (socket) => {
   socket.on("chat message", (msg) => {
      console.log("message: " + msg);
   });
});

http.listen(PORT, () => console.log(`server is running at ${PORT}`));
