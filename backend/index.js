const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const Controllers = require("./controllers/Users");
const app = express();
const PORT = 4000

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


//  API routes
app.post("/register", Controllers.registerUSer);
