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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row1="<div class='room_name' id="+Room_names+" onclick ='redirect_to_roomname(this.id)'>"+Room_names + "</div> <hr>"; 
      document.getElementById("output").innerHTML+=row1;
      //End code
      });});}
getData();

username=localStorage.getItem("username");
document.getElementById("title").innerHTML="Welcome " + username;

function addroom(){

      room=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room).update({purpose:"adding room name"});
      localStorage.setItem("roomname",room);
      window.location="kwitter_page.html";
      
}

function redirect_to_roomname(roomname){
      
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
      
}

function logout(){

      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html";

}

