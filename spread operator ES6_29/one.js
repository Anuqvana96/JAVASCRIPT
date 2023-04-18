
//combining Arrays
const shopping_cart = ["Maagi","Beans","Masala"];
const additional_cart = ["Matchbox","Salt"];

//spread operator
let recipe =[... shopping_cart, ...additional_cart];

console.log (recipe)