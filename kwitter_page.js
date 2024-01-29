const firebaseConfig = {
      apiKey: "AIzaSyCccqoDUJ7znpHSsO28fiBzFIHwZ-WXTnc",
      authDomain: "kwitter-f463e.firebaseapp.com",
      databaseURL: "https://kwitter-f463e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f463e",
      storageBucket: "kwitter-f463e.appspot.com",
      messagingSenderId: "62714282815",
      appId: "1:62714282815:web:defb83b87f9d792115c98a"
    };

firebase.initializeApp(firebaseConfig);

roomname=localStorage.getItem("roomname");
username=localStorage.getItem("username");
document.getElementById("heading").innerHTML= roomname;

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data); 
      message_name=message_data["name"];
      message_message=message_data["message"];
      name_tag="<h4>"+ message_name + "<img src='tick.png' class='user_tick'>";
      message_tag="<h4 class='message_h4'>" + message_message + "</h4>";
      row=name_tag + message_tag;
      document.getElementById("output").innerHTML += row;
      
      } });  }); }
getData();



function send(){

      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
      
      });
      document.getElementById("msg").value="";

}

function update_like(message_id){

      likes=Number(document.getElementById(message_id).value);
      likes += 1;
      firebase.database().ref(roomname).child(message_id).update({
            
            like: likes
      });
}

function logout(){
      
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
      
}

