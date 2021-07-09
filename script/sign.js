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
    // const promise = auth.createUserWithEmailAndPassword(email, password);
    // promise.then(()
    //     if(localStorage.getItem('type') == 'customer') {}
    // );
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        console.log(localStorage.getItem('type'))
        if (localStorage.getItem('type') == 'customer') {
            window.location.href = "./index.html";
        }
        else {
            window.location.href = "./businessSide.html"
        }
    }).catch(() => {
        alert('Problem Signing up')
    })
    // alert('Sign Up');
}

function onSignOut() {


    firebase.auth().signOut().then(() => {
        console.log("Sign out successs")
        window.location.href = "./landing.html"
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


function login() {
    var email = document.getElementById('emailLogin').value;
    var password = document.getElementById('passwordLogin').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("Login")
            console.log(localStorage.getItem('type'))
            // window.alert("Welcome back to Appifax " + user);
            // window.alert("Login" + user);
            if (localStorage.getItem('type') == 'customer') {
                window.location.href = "./index.html";
            }
            else {
                window.location.href = "./businessSide.html"
            }
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
        });

}


function onLogoClick() {
    window.location.href = "./landing.html";
}
