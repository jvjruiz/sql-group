var express = require('express');
var knex = require("./knex");
var recipeMaker = require('./BO/recipebo')
var app = express();


var givendata = {
    "name": "pizza",
    "steps": [
        "knead",
        "bake",
        ],
}


app.get('/recipes', function(req, res) {
    console.log('we out here')
    console.log(recipeMaker)
    recipeMaker.makeRecipe(givendata, 
    function(err, recipe) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(recipe);
    });
});

app.listen(8080)