// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-q2W7txEQzy9rbQ5aq_nfFfXMRA5rNwI",
    authDomain: "appifax-c2785.firebaseapp.com",
    databaseURL: "https://appifax-c2785-default-rtdb.firebaseio.com",
    projectId: "appifax-c2785",
    storageBucket: "appifax-c2785.appspot.com",
    messagingSenderId: "1041392817985",
    appId: "1:1041392817985:web:fb8cc0f4165eaa5556f3c0",
    measurementId: "G-SSYXWMCZHG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signup() {

    var email = document.getElementById("emailSignUp").value;
    var password = document.getElementById("passwordSignUp").value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(alert("Success"));
    promise.catch(e => alert(e.message));

    // alert('Sign Up');
}


function login() {
    var email = document.getElementById('emailLogin').value;
    var password = document.getElementById('passwordLogin').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("Login")
            // window.alert("Welcome back to Appifax " + user);
            window.alert("Login" + user);

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
        });

}



