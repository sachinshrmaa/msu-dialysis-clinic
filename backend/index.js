import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import registerRoutes from "./src/routes/registerRoutes.js";
import { connect } from "./src/lib/db.js";

// config
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const db = mongoose.connection;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// database connection
connect();

// Routes
app.use("/api", registerRoutes);

// Listen
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
