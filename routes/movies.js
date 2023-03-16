const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

router.get("/", function (request, response) {
  const moviesFile = fs.readFileSync("./data/movies.json");
  const movieArray = JSON.parse(moviesFile);
  response.json(movieArray);
});

router.post("/", function (req, res) {
  const newMovieTitle = req.body.title;
  const newMovieDescription = req.body.description;
  const newMovieId = uniqid();

  const moviesFile = fs.readFileSync("./data/movies.json");
  const movieArray = JSON.parse(moviesFile);
  movieArray.push({
    id: newMovieId,
    title: newMovieTitle,
    description: newMovieDescription,
  });

  fs.writeFileSync("./data/movies.json", JSON.stringify(movieArray));
  res.json(movieArray);
});

module.exports = router;
