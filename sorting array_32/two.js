
const students = [
    {id: 3, name: "Anu"},
    {id: 8, name: "Deepu"},
    {id: 1, name: "Sinta"},
];
students.sort ((a,b) => {
    //a<b=>-1
    if(a.id)return -1;
    //a>b=>1
    if(a.id>b.id)return 1;
    //a==b=>0
    return 0;

});
console.log (students)