//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA-lDB_H9oIhhS5OJMsXXgzirvQsFQvJDI",
      authDomain: "kwitter-85c5e.firebaseapp.com",
      databaseURL: "https://kwitter-85c5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-85c5e",
      storageBucket: "kwitter-85c5e.appspot.com",
      messagingSenderId: "406230643935",
      appId: "1:406230643935:web:c49f2905044006a310e56a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");

    function send(){

      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({

             name:username,
             message:msg,
             like:0 

      });
      document.getElementById("message").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      //Start code

      console.log("Firebase  messages are" + firebase_message_id);
      console.log("The message data is " + message_data);

      name = message_data['name'];
      message = message_data['message'];
      likes = message_data['like'];

      name_width_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
      message_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_tag = "<button class='btn btn-warning' id=" + firebase_message_id + "value = " + likes + "onclick='updateLike(this.id)'>"
      span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + likes + "<span></button><hr>";

      row = name_width_tag + message_tag + like_tag + span_tag;
      document.getElementById("output").innerHTML = row;

      //End code
} });  }); }
getData();

function updateLike(message_id){

  console.log(message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  update_likes = Number(likes) + 1 ;
  console.log("The no. of likes are" + update_likes);
  firebase.database().ref(room_name).child(message_id).update({

    like: update_likes

  });

}

function logOut(){

  localStorage.removeItem("username");
  localStorage.removeItem("room_name");

  window.location.replace("index.html");

}