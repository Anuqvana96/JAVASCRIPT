
const orders=[
    {id: 1, iteam: "Smartphone", quantity:  1},
    {id: 2, iteam: "A.C", quantity: 1},
    {id: 3, iteam: "Maagi", quantity: 3},

]
let result = orders.find( (order) => order.iteam === "Maagi")
console.log(result);