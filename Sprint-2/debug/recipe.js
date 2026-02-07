// Predict and explain first...
// Prediction: logs title and serves correctly, but ingredients show as "[object Object]".
// Explanation: ${recipe} coerces the whole object to a string, resulting in [object Object].
// Fix: use recipe.ingredients.join("\n") to print each ingredient on a new line.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);;
