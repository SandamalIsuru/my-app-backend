const express = require("express");
const connectDB = require("./config/database");
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Connect to the MongoDB database
connectDB();

// Routes
app.use('/api/users', userRoutes);

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
