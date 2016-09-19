var knex = require("../knex")

knex.select("recipes.name", 'steps.step')
    .from('recipes')
    .join('steps', 'steps.recipe_id', 'recipes.id')
    .then(function(rows){
        console.log(rows);
        return knex.destroy();
    });