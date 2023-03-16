// add dependencies
const express = require("express");
const movieRoutes = require("./routes/movies");
const cors = require("cors");
// create an instance of express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//define routes
app.use("/movies", movieRoutes);

// bootstrap the server
app.listen(8080, function () {
  console.log("the server is running on port 8080");
});

//no code should go after listen (usually)
