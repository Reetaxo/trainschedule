// Initialize Firebase


  var config = {
    apiKey: "AIzaSyCH1bANOdRYfxKT1N4sknqF92yZlI0Ysvk",
    authDomain: "train-9fb1f.firebaseapp.com",
    databaseURL: "https://train-9fb1f.firebaseio.com",
    projectId: "train-9fb1f",
    storageBucket: "",
    messagingSenderId: "475225936830"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

//   displaying current time in military
  setInterval(function(){
$(".current-time").html(moment().format("HH:mm:ss"))
  }, 1000);

// create a button for adding new train
$("#add-train").on("click", function(event) {
    console.log("hey");
    event.preventDefault();


// creating variables for grabbing the user input using jquery
var trainName = $("#trainName").val().trim()
var trainDestination = $("#trainDestination").val().trim()
var firstTrain = $("#firstTrain").val().trim()
var trainFrequency = $("#trainFrequency").val().trim()

// var user = {
//    trainName,
//     trainDestination,
//     firstTrain,
//     trainFrequency
    
// };
// uploads employee data to database using .psh method
database.ref().push({
   trainName,
    trainDestination,
    firstTrain,
    trainFrequency
    
});

// consolelog users input
console.log(trainName);
console.log(trainDestination);
console.log(firstTrain);
console.log(trainFrequency);

// alert users of added train
alert("Your train is on the way");

// clearing text-boxes
$("#trainName").val("");
$("#trainDestination").val("");
$("#firstTrain").val("");
$("#trainFrequency").val("");


// 
database.ref().on("child_added", function(childData) {
console.log(childData.val());

childData.val().trainName;
childData.val().trainDestination;
childData.val().firstTrain;
childData.val().trainFrequency;


// append new train data into table
$("#train-table > tbody").append("<tr><td>" + trainName + "<tr><td>" + trainDestination + "<tr><td>" + firstTrain + "<tr><td>" + trainFrequency);

});

});

