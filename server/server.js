const express = require("express");

const app = express(); //Now we can use express with this variable

// A method in express(for receiving the request that ir coming from the client side )
//this endpoint will be handle by a function.
//This method takes 2 arguments, firs one is the endponint, second is se function.
app.get("/api/register", (req, res) => {
  res.json({
    data: "you hit register endpoint",
  });
});

//port where our node app will run
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`API is running on port ${port}`));
