
// If hour is between 12AM(0) to 1PM(13) -> Good Morning

//Else if hour is between 1PM(13) to 5PM(17) -> Good Afternoon

//Else hour is between 5PM(17) TO 12AM(0) -> Good Evening

let hour=18;

if (hour >= 0 && hour <= 13) {
    console.log("Good Morning");
}
else if (hour >= 13 && hour <= 17) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}