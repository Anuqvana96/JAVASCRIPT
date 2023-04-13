
//switch case

let marks=0;

switch(true){
    case(marks > 50):
        console.log("pass");
        break;
    
    case(marks > 90):
        console.log("super grade");
        break;
    
    case(marks < 50):
        console.log("failed!");
        break;

    default:
        console.log("unknown grade");
    
}