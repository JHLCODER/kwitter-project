
const firebaseConfig = {
      apiKey: "AIzaSyBRyI4ByUlIAect9XMP8dTJaoKDSPv_bqA",
      authDomain: "kwitter-5555e.firebaseapp.com",
      databaseURL: "https://kwitter-5555e-default-rtdb.firebaseio.com",
      projectId: "kwitter-5555e",
      storageBucket: "kwitter-5555e.appspot.com",
      messagingSenderId: "12654774387",
      appId: "1:12654774387:web:be539d3f7bf5d464a0c206"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
