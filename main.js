
document.querySelector("#register-form").addEventListener("submit" , function(e){
     e.preventDefault()
     submitRegister()
 })




var firebaseConfig = {
    apiKey: "AIzaSyCagNNf5lwNF6SXL6iuetjN3w9mwLxZM7k",
    authDomain: "gkm-register.firebaseapp.com",
    databaseURL: "https://gkm-register.firebaseio.com",
    projectId: "gkm-register",
    storageBucket: "",
    messagingSenderId: "329425332352",
    appId: "1:329425332352:web:3dff9187ce029e2b"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)


let database = firebase.database()

let ref = database.ref("users")

function submitRegister(){
  let data = {
    afirstName : document.querySelector("#firstName").value ,
    blastName : document.querySelector("#lastName").value ,
    college : document.querySelector("#college").value ,
    email : document.querySelector("#email").value ,
    dnumber : document.querySelector("#number").value ,
    egender : document.querySelector("input[name=gender]:checked").value
  }

  ref.push(data)

}