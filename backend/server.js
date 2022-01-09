import express from "express";
import mongoose from "mongoose";
import productRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";
import dotenv from "dotenv";
import orderRouter from "./router/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/E-commerce", {
  useNewUrlParser: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/", (req, res) => {
  res.send("O server está pronto");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server em : http://localhost:${port}`);
});
