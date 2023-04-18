//Reference Type
//combining Arrays
const shopping_cart = [{item: "Maagi"}];
const additional_cart = ["Beans","Masala","Matchbox","Salt"];

//combine
let recipe = shopping_cart.concat (additional_cart);
shopping_cart[0].item = "Noodles";

//Extract
let extractedinfo = recipe.slice (1,3);

console.log (recipe);
console.log (extractedinfo);