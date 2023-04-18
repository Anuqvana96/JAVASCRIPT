
//combining Arrays
const shopping_cart = ["Maagi","Beans","Masala"];
const additional_cart = ["Matchbox","Salt"];

//combine
let recipe = shopping_cart.concat (additional_cart);

//Extract
let extractedinfo = recipe.slice (1,3);

console.log (recipe);
console.log (extractedinfo);