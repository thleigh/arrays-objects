// string
var name = "Tanner";
console.log(name);

var myLocation = "Los Angeles";
console.log(myLocation);

// number
var favoriteNumber = 5;
console.log(favoriteNumber);

// array
var teams = ["Rockets", "Lakers", "Warrios", "Clippers", "Blazers", "Celtics", "Nets"];
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1;
while (otherNumber < number) {
    console.log(otherNumber);
    otherNumber += 1;
}

 var numberTwo = 20;
 var myOtherNumber = 10;
 while (myOtherNumber < numberTwo) {
     console.log(myOtherNumber);
     myOtherNumber += 1;
}

var numberThree = 30;
var myOtherNumberTwo = 20;
while (myOtherNumberTwo < numberThree) {
    console.log(myOtherNumberTwo);
    myOtherNumberTwo += 1;
}

// for loops
// print teams
for (var i = 0; i< teams.length; i++) {
    var eachTeam = teams[i];
    console.log(eachTeam);
}

// print soccer teams
var soccerTeams = ["Tottenham", "Arsenal", "Leicestar", "Liverpool", "Man City", "Man United"];
for (var i = 0; i < soccerTeams.length; i++) {
    console.log(soccerTeams[i]);
}

// Objects
// key: value pairs
const tanner = {
    fullName: "Tanner Leigh", 
    age: 32,
    myLocation: "Los Angeles",
    placesTraveled: ["Turkey", "South Korea", "New York", "Nevada"]
}
console.log(tanner);

// print myLocation
console.log(tanner.myLocation);

// print New York
console.log(tanner.placesTraveled[2]);

// social media post
const myReallyCoolPost = {
    username: "@tnrleigh",
    likes: "300",
    comments: ["great post", "nice", "javascript", "woah"],
    caption: "Day 3 of SEI",
    picture: "https://instgram.com/generalassembly/....",
    shares: 12
}
//likes, captions, shares, comments, username, picture
console.log(myReallyCoolPost);

myReallyCoolPost.myLocation = "San Fran";
console.log(myReallyCoolPost);


// functions

// standard
function sayHello() {
    //write my code
    //write your logic
    console.log("Hello");
}
sayHello();

// function expression
const sayHelloAgain = function() {
    console.log("Hello Again");
}
sayHelloAgain();

// arrow function
const sayHelloFinal = () => {
    console.log("Hello for the last time");
}
sayHelloFinal();

// adding parameters
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const otherNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function printNumbers(array) {
    for(let i = 0; i < array.length; i++) {
        let num = array[i];
        
        if (num < 50) {
            console.log("this number is less than 50: " + num);
        } else {
            console.log("this number is greater than 50: " + num);
        }
    }
}
printNumbers(otherNumbers);