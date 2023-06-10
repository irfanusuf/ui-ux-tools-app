const User = require ("../models/User")
const bcrypt = require('bcrypt');




exports.registerUSer = async (req, res) => {
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

      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user object
      const newUser = new User({
        email,
        password : hashedPassword
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
  }
  