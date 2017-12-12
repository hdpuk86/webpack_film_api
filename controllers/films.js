//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

//get all films
filmRouter.get('/', function(req, res){
  res.json(films);
});

//add a film
filmRouter.post('/', function(req, res){
  var newFilm = new Film(req.body.film);
  films.push(newFilm);
  res.json(films);
});

//get a film
filmRouter.get('/:id', function(req, res){
  res.json(films[req.params.id]);
});

//update a film
filmRouter.put('/:id', function(req, res){
  var newFilm = new Film(req.body.film);
  films[req.params.id] = newFilm;
  res.json(films);
});

//delete a film
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
});

//add a review to a film
filmRouter.patch('/review/:id', function(req, res){
  var review = new Review(req.body.review);
  films[req.params.id].addReview(review);
  res.json(films);
});

module.exports = filmRouter;
