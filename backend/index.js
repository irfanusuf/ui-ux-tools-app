const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const User = require('./models/User'); // Assuming the User model is in a separate file
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// Using Middlewares
app.use (cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Connecting to the database
mongoose
  .connect('mongodb://127.0.0.1:27017/toolsApp')
  .then((con) => console.log(`Database Connected: ${con.connection.host}`))
  .catch((err) => console.log(err));

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Register API route
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        sucess: false,
        message: "Email already exists"
      });
    }

    // Create a new user object
    const newUser = new User({
      email,
      password
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message
    });
  }
});
