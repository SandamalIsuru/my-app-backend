const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const app = express();
const userRoutes = require("./routes/userRoutes");


// Connect to the MongoDB database
connectDB();

// Event listener for Mongoose connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");

  // Middleware and routes setup
  app.use(express.json());
  app.use(cors());

  // User routes
  app.use("/api/user", userRoutes);

  // Start the server
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
