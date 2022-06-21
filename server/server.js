const express = require("express");

const app = express(); //Now we can use express with this variable

//import routes
const authRoutes = require("./routes/auth");

//middlewares
app.use("/api", authRoutes);

//port where our node app will run
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`API is running on port ${port}`));
