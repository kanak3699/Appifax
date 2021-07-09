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

// This is the signup Function
function signup() {
        // Variables
    let email = document.getElementById("emailSignUp").value;
    let password = document.getElementById("passwordSignUp").value;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password).then(() => {
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

// Signout function
function onSignOut() {
    firebase.auth().signOut().then(() => {
        window.location.href = "./landing.html"
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

// Login Function

function login() {
    let email = document.getElementById('emailLogin').value;
    let password = document.getElementById('passwordLogin').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
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
        });

}

// onLogoClick Function - Redirects to Landing page

function onLogoClick() {
    window.location.href = "./landing.html";
}
