

function getName() {
  var placename = document.getElementById("name").value;
  var address = document.getElementById("add").value;

  console.log("name: " + placename);
}

function getRestaurant() {
  console.log("getRestaurant");
  var n = "denny's";
  dataFile = "charities.json";
  $.getJSON(dataFile, function(result){
    $.each(result, function(name, object){
      if(object["name"].toLowerCase() === n) {
        // console.log(object);
        if(object["accepted"] == true) {
          alert("Shipment received!");
        }
      }
      else {
        console.log("no match");
      }
      // console.log(object["name"]);
    });
  });
}

function submitRequest() {
  // const fs = require('fs');
  let tempDatabase = [];
  var restName = (document.getElementById("restaurant").value).toLowerCase();
  var charName = (document.getElementById("charity").value).toLowerCase();
  var donations = document.getElementById("donations").value;
  var accepted = false;
  var obj = {
    "name" : restName,
    "charity" : charName,
    "donations" : donations,
    "accepted" : accepted
  };

  
    // let input = prompt("find ur restaurant");
    // if (input === "q" || input === null) {
    //   break;
    // }

    tempDatabase.push(obj);
    console.log(tempDatabase);


  console.log(obj);
  tempDatabase.push(obj);
  console.log(tempDatabase);

  // let request = new XMLHttpRequest();
  // var show = request.open("GET", "requestDatabase.json", true);
  // console.log(show);
  // jsonReader("./shareFood.json", (err, obj) => {
  //   if (err) {
  //     console.log("error reading file: ", err);
  //     return;
  //   }
  //
  //   fs.writeFile("./requestDatabase.json", JSON.stringify(obj), err => {
  //     if (err) {
  //       console.log("error writing file: ", err);
  //     }
  //   });
  // });

  // const jsonString = JSON.stringify(obj);
  // fs.writeFile('./requestDatabase.json', jsonString, err => {
  //   if (err) {
  //     console.log("Error writing file", err);
  //   } else {
  //     console.log("Successfully wrote file");
  //   }
  // });
}
