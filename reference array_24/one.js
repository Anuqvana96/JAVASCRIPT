
const orders=[
    {id:1,item:"smartphone",quantity:1},
    {id:2,item:"maagi",quantity:3},
]

let result=orders.find(function(order){
    return order.item==="maagi"
})
console.log(result);
