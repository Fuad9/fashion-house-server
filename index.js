const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.send("Hello from DB");
   console.log("Hello for DB");
});

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
