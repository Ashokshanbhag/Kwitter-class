
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA-lDB_H9oIhhS5OJMsXXgzirvQsFQvJDI",
      authDomain: "kwitter-85c5e.firebaseapp.com",
      databaseURL: "https://kwitter-85c5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-85c5e",
      storageBucket: "kwitter-85c5e.appspot.com",
      messagingSenderId: "406230643935",
      appId: "1:406230643935:web:c49f2900544006a310e56a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("The room names are" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name) { 

       console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
        
}

function logOut(){

      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}