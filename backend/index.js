import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import registerRoutes from "./src/routes/registerRoutes.js";
import { connect } from "./src/lib/db.js";

// config
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const db = mongoose.connection;

app.use(express.json());

// CORS middleware
const allowedOrigins = ["http://localhost:5173"];

// CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

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
