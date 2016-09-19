var knex = require("../knex")

// Delete one of the recipes
knex.del()
    .from('recipes')
    .where({name: 'Pork Chop'})
    .then(function() {
        console.log("deleted");
        return knex.destroy();
        });