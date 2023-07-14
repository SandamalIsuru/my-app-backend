const express = require("express");
const connectDB = require("./config/database");
const app = express();
const userRoutes = require("./routes/userRoutes");

const admin = require("firebase-admin");
const credentials = require("../my-app-fb285-firebase-adminsdk-ftwpj-b1fdb9fcdb.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const userResponse = await admin.auth().createUser({
    email: email,
    password: password,
    emailVerified: true,
    disabled: false,
  });
  res.json(userResponse);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().getUserByEmail(email);

    console.log('Login successful');
    res.json(user);
    // Perform additional operations after successful login
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Connect to the MongoDB database
connectDB();

// Routes
app.use("/api/users", userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
