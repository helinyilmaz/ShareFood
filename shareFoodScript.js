let tempDatabase = [];

function getName() {
  var placename = document.getElementById("name").value;
  var address = document.getElementById("add").value;

  console.log("name: " + placename);
}

function getRequests(charity) {
  console.log("getRequests() running");
  var dataFile = "requestDatabase.json";
  $.getJSON(dataFile, function(result){
    $.each(result, function(name, object){
      if(object["charity"] === charity) {
        console.log("you have a request from " + object["name"]);
      }
      else {
        console.log("no match");
      }
    });
  });
}

function submitRequest() {
  var restValue = document.getElementById("restaurant");
  var restText = (restValue.options[restValue.selectedIndex].text).toLowerCase();
  restText = restText.split(' ').join('_');
  var selectedCharValue = document.getElementById("charity");
  var selectedCharText = (selectedCharValue.options[selectedCharValue.selectedIndex].text).toLowerCase();
  selectedCharText = selectedCharText.split(' ').join('_');
  var donations = (document.getElementById("donations").value).toLowerCase();
  var accepted = false;
  var obj = {
    "name" : restText,
    "charity" : selectedCharText,
    "donations" : donations,
    "accepted" : accepted
  };

  let db = localStorage.getItem("database");
  if (db == null) {
    db = localStorage.setItem("database", JSON.stringify([obj]));
  }
  else {
    db = JSON.parse(db);
    db.push(obj);
    localStorage.setItem("database", JSON.stringify(db));
  }
}

function searchRequest() {
  var charValue = document.getElementById("charity");
  var charText = (charValue.options[charValue.selectedIndex].text).toLowerCase();
  charText = charText.split(' ').join('_');

  let db = localStorage.getItem("database");
  if (db == null) {

  }
  else {
    var found = "not found";
    db = JSON.parse(db);
    for (var i = 0; i < db.length; i++) {
      var offer = db[i];
      if (offer.charity == charText) {
        found = "found";
      }
    }
    console.log(found);
  }
}
