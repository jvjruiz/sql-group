var insert = require("../functions/insert")

function makeRecipe(recipe) {
    var name = recipe.name;
    var steps = recipe.steps;
    var tags = recipe.tags;
    
    insert({
        name: 'Pork Chop',
        description: 'dry ass pork'}, 'recipes')
        .then(function(id){
            for(var x = 0 ; x<steps.length;x++) {
            insert({"recipe_id": id, "step": steps[x]}, 'steps'); 
            }
        })
}


// var recipebotest = new recipeBO()

// recipebotest.makeRecipe(
//     {
//         "name": "Khichidi Kadhi",
//         "steps": [
//             "Cook rice and lentils",
//             "Thicken yogurt with gram flour, cooking over a low heat",
//             "Add tadka to yogurt"
//         ]
//     })



exports.makeRecipe = makeRecipe