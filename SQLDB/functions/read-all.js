var knex = require("../knex")

// Read all of the recipes
knex.select('name', 'description')
    .from('recipes')
    .then(function(recipes) {
    console.log(recipes)
    return knex.destroy();
    });