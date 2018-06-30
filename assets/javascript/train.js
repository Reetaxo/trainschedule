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

// create a button for adding new train
$("#add-train").on("click", function(event) {
    console.log("hey");
    event.preventDefault();


// creating variables for grabbing the user input with 
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

database.ref().push({
   trainName,
    trainDestination,
    firstTrain,
    trainFrequency
    
});


database.ref().on("child_added", function(childData) {
console.log(childData.val());

var trainName = childData.val().trainName;
var trainDestination = childData.val().trainDestination;

});

});

