var knex = require("../knex")

// Create a new recipe
function insert(what, where) {
    return knex.insert(what)  
        .into(where)
        .then(function() {
            console.log("inserted");
            });
}            


// insert({"name":"mac n cheese"},"project_data");
// insert("steps": [
//             "Cook rice and lentils",
//             "Thicken yogurt with gram flour, cooking over a low heat",
//             "Add tadka to yogurt"
//         ], "project_data_steps")
        

module.exports = insert;