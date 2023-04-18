
//Testing elements in Javascript Array Reference Types
const items = [
    {id: 1, name: "Mobiles", isDeliverable: true},
    {id: 2, name: "Accessories", isDeliverable: true},
    {id: 3, name: "T.V", isDeliverable: true},
];
let allDeliverables = items.every(function(value){
    return value.isDeliverable == false;

});
let notDeliverables = items.some(function(value){
        return value.isDeliverable == true;
    
});
console.log ("AllDeliverables", allDeliverables);
console.log ("NotDeliverables", notDeliverables);