const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connect = require("./src/config/db");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.listen(process.env.PORT, () => {
  try {
    connect.then((res) => {
      console.log("db is connected");
    });
    console.log("Server is running at port 8080");
  } catch (error) {
    console.log("error:", error);
  }
});
