function getName() {
  var placename = document.getElementById("name").value;
  var address = document.getElementById("add").value;

  console.log("name: " + placename);
}

function submitRequest() {
  var restValue = document.getElementById("restaurant");
  var restText = restValue.options[restValue.selectedIndex].text;
  // restText = restText.split(' ').join('_');
  var selectedCharValue = document.getElementById("charity");
  var selectedCharText = selectedCharValue.options[selectedCharValue.selectedIndex].text;
  // selectedCharText = selectedCharText.split(' ').join('_');
  var donations = document.getElementById("donations").value;
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
  let allRequests = [];
  var charValue = document.getElementById("charity");
  var charText = charValue.options[charValue.selectedIndex].text;
  // charText = charText.split(' ').join('_');

  let db = localStorage.getItem("database");
  if (db == null) {
    alert("There are no donations to " + charText + " as of now.");
  }
  else {
    // var found = "not found";
    db = JSON.parse(db);
    for (var i = 0; i < db.length; i++) {
      var offer = db[i];
      if (offer.charity == charText) {
        allRequests.push(offer);
        // found = "found";
      }
    }

    for (var i = 0; i < allRequests.length; i++) {
      var object = allRequests[i];
      var table = document.getElementById("update");
      var row = table.insertRow(1);
      var restCell = row.insertCell(0);
      var donationCell = row.insertCell(1);
      var acceptedCell = row.insertCell(2);
      restCell.innerHTML = object.name;
      donationCell.innerHTML = object.donations;

      var acceptButton = document.createElement('button');
      acceptButton.setAttribute('class', "button3");
      acceptButton.innerHTML ='Accept';
      acceptedCell.append(acceptButton);
      index = acceptedCell.parentNode.rowIndex;
      acceptButton.setAttribute('onclick', "deleteRow("+index+")");

      // $('input[type="button"]').click(function(e) {
        // $(this).closest('tr').remove()
      // })
      // for (var i = 1; i < table.rows.length; i++) {
      //   table.rows[i].cells[2].onclick = function()
        // index = this.parentElement.rowIndex;
      //   table.deleteRow(index);
      // }

      // var txt = document.createElement("tr");  // Create with DOM
      // var rest = document.createElement("td");
      // rest.innerHTML = object.name;
      // var donations = document.createElement("td");
      // donations.innerHTML = object.donations;
      // // txt.innerHTML = "name: " + object.name + "donations: " + object.donations;
      // var resultDiv = document.getElementById("edit");
      // resultDiv.append(txt);
      // resultDiv.append(rest);
      // resultDiv.append(donations);
      // document.getElementById("edit").innerHTML = "name: " + object.name + " donations: " + offer.donations;    }
    // console.log(found);

    }
  }
}

function deleteRow(i) {
  document.getElementById("update").deleteRow(i);
}
