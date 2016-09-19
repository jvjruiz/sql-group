var knex = require("../knex")

// Read one of the recipes
knex.select('name','description')
    .from('recipes')
    .where({name: 'Steak'})  
    .then(function(recipes) {
        console.log(recipes[0]);
        return knex.destroy();
        });