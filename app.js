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

//instagram post object