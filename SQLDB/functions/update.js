var knex = require("../knex")

// Update one of the recipes
knex('recipes')
    .update({description: "Man's Meal"})
    .where({name: 'Steak'})
    .then(function() {
        console.log("updated");
        return knex.destroy();
        });