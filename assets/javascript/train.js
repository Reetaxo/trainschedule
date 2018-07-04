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

if(trainName === ""){
  return alert("please enter train name")
} else if (trainDestination === ""){
  return alert("please enter a destination")
} else if(firstTrain === "") {
  return alert("please enter train time")
}
else if (trainFrequency===""){
  return alert ("please enter frequency")
}

console.log("train added")
// make an alert so users can't leave it blank
// if(trainName !== "" && trainDestination !== ""){
  database.ref().push({
    trainName,
     trainDestination,
     firstTrain,
     trainFrequency
     
 });
// } 
// else {

// }

// var user = {
//    trainName,
//     trainDestination,
//     firstTrain,
//     trainFrequency
    
// };
// uploads employee data to database using .psh method

// consolelog users input
// console.log(trainName);
// console.log(trainDestination);
// console.log(firstTrain);
// console.log(trainFrequency);

// alert users of added train
alert("Your train is on the way");

// clearing text-boxes
$("#trainName").val("");
$("#trainDestination").val("");
$("#firstTrain").val("");
$("#trainFrequency").val("");


});
// 
database.ref().on("child_added", function(childData) {
  // console.log(childData.val());
  
  // console.log(childData.val().trainName);
  
  childData.val().trainDestination;
  childData.val().firstTrain;
  childData.val().trainFrequency;
  
  
  // append new train data into table
  $("#train-table > tbody").append("<tr><td>" + childData.val().trainName + "</td><td>"  + childData.val().trainDestination + "</td><td>" + childData.val().firstTrain + "</td><td>" + childData.val().trainFrequency + "</td></tr>");
  
  });
