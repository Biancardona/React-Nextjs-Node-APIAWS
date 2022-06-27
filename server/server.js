const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
//.env file will be available here because we are using de dotnev package here
const app = express(); //Now we can use express with this variable

//import routes
const authRoutes = require("./routes/auth");

//app middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//middlewares
app.use("/api", authRoutes);

//port where our node app will run
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`API is running on port ${port}`));
