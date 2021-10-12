// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQhitkhrRrbP7iSpNnIVcUwncHMBJJZcw",
    authDomain: "classtest-85e3c.firebaseapp.com",
    database_URL : "https://console.firebase.google.com/u/0/project/classtest-85e3c/database/classtest-85e3c-default-rtdb/data",
    projectId: "classtest-85e3c",
    storageBucket: "classtest-85e3c.appspot.com",
    messagingSenderId: "549657504499",
    appId: "1:549657504499:web:c44dc4d8c96dd68e05a586"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}
