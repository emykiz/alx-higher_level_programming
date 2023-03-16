#!/usr/bin/node
//  a script that prints all characters of a Star Wars movie
//  The first argument is the Movie ID - example: 3 = “Return of the Jedi”
//  Display one character name by line in the same order of the
//  list “characters” in the /films/ response
//  You must use the Star wars API
//  You must use the module request

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;
let characters = [];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  characters = data.characters;
  getCharacters(0);
});

const getCharacters = (index) => {
  if (index === characters.length) {
    return;
  }

  request(characters[index], (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const characterData = JSON.parse(body);
    console.log(characterData.name);
    getCharacters(index + 1);
  });
};
