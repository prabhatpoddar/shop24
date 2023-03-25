// import  from 'node:cluster';
const express = require("express");
const cors = require("cors");

require("dotenv").config();


  
const connect = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const usersRoutes = require("./src/routes/users.routes");
const productRouter = require("./src/routes/product.routes");
const orderRouter = require("./src/routes/order.routes");
const cartRouter = require("./src/routes/cart.routes");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => [res.send("Home Page")]);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/cart", cartRouter);
app.listen(8080, () => {
  try {
    connect.then((res) => {
      console.log("db is connected");
    });
    console.log(`Server is running at port 8080`);
  } catch (error) {
    console.log("error:", error);
  }
});

