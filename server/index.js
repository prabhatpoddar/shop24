const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connect = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const usersRoutes = require("./src/routes/users.routes");
const wishlistRouter = require("./src/routes/wishlist.routes");
const bagRouter = require("./src/routes/bag.routes");
const orderRouter = require("./src/routes/order.routes");
const productRouter = require("./src/routes/product.routes");
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
app.use("/wishlist", wishlistRouter);
app.use("/bag", bagRouter);
app.use("/order", orderRouter);
app.listen(process.env.PORT, () => {
  try {
    connect.then((res) => {
      console.log("db is connected");
    });
    console.log(`Server is running at port ${process.env.PORT}`);
  } catch (error) {
    console.log("error:", error);
  }
});
