const express = require("express");

const connect = require("./src/config/db");

const app = express();

app.listen(8080, () => {
  try {
    connect.then((res) => {
      console.log("db is connected");
    });
    console.log("Server is running at port 8080");
  } catch (error) {
    console.log("error:", error);
  }
});
