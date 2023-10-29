const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

togglePassword2.addEventListener("click", function () {
    // toggle the type attribute
    const type = confirmpassword.getAttribute("type") === "password" ? "text" : "password";
    confirmpassword.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

function transition() {
    var box1 = document.querySelector('#newbox');
    var box2 = document.querySelector('#loginbox')
    var button = document.getElementById('register');
    var close = document.getElementById('closebox');
    var desc = document.getElementById('desc');
    var message = document.getElementById('message');
    var forgotpw = document.getElementById("forgotpassword")
    var formtitle = document.getElementById("formtitle");
    var togglePassword2 = document.getElementById("togglePassword2");
    var accdetails = document.getElementById("accdetails");
    var text = document.getElementById("text");
    var main = document.getElementById("main");
    var registerbutton = document.getElementById("registerbutton");
    var loginbutton = document.getElementById("loginbutton");
    var confpw = document.getElementById("confirmpassword");
    var fname = document.getElementById("firstname")
    var lname = document.getElementById("lastname")
    var email = document.getElementById("email")
    var code = document.getElementById("code")
    var number = document.getElementById("number")
    var day = document.getElementById("day")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    


    // Slide the red box to the left (take over the blue box)
    box1.style.transform = 'translateX(+100%)';
    box2.style.transform = 'translateX(-100%)';
    button.style.display = 'none';
    close.style.display = 'inline';
    desc.innerHTML = "Returning User?";
    message.innerHTML = "Welcome Back! We hope to heal you :D Click button below to Log In"
    formtitle.innerHTML = "Registration";
    confpw.style.display = "initial";
    togglePassword2.style.display = "initial";
    accdetails.style.display = "initial";
    text.style.marginTop = "50%";
    forgotpw.style.display = "none";
    registerbutton.style.display = "block";
    loginbutton.style.display = "none";
    confpw.required = true;
    fname.required = true;
    lname.required = true;
    email.required = true;
    code.required = true;
    number.required = true;
    day.required = true;
    month.required = true;
    year.required = true;
    // main.classList.remove("center")
    
}
function closebox() {
    var box1 = document.querySelector('#newbox');
    var box2 = document.querySelector('#loginbox')
    var button = document.getElementById('register');
    var close = document.getElementById('closebox');
    var desc = document.getElementById('desc');
    var message = document.getElementById('message');
    var forgotpw = document.getElementById("forgotpassword")
    var formtitle = document.getElementById("formtitle");
    var togglePassword2 = document.getElementById("togglePassword2");
    var accdetails = document.getElementById("accdetails");
    var text = document.getElementById("text");
    var main = document.getElementById("main");
    var registerbutton = document.getElementById("registerbutton");
    var loginbutton = document.getElementById("loginbutton");
    var confpw = document.getElementById("confirmpassword");
    var fname = document.getElementById("firstname")
    var lname = document.getElementById("lastname")
    var email = document.getElementById("email")
    var code = document.getElementById("code")
    var number = document.getElementById("number")
    var day = document.getElementById("day")
    var month = document.getElementById("month")
    var year = document.getElementById("year")

    // Slide the red box to the left (take over the blue box)
    box1.style.transform = 'translateX(0)';
    box2.style.transform = 'translateX(0)';
    button.style.display = 'inline';
    close.style.display = 'none';
    desc.innerHTML = "New here?";
    message.innerHTML = "Sign up for quality and easily accessed healthcare"
    formtitle.innerHTML = "Login";
    confpw.style.display = "none";
    togglePassword2.style.display = "none";
    accdetails.style.display = "none";
    text.style.marginTop = "20%";
    forgotpw.style.display = "inline"
    registerbutton.style.display = "none";
    loginbutton.style.display = "block";
    confpw.required = false;
    fname.required = false;
    lname.required = false;
    email.required = false;
    code.required = false;
    number.required = false;
    day.required = false;
    month.required = false;
    year.required = false;
    // main.classList.add("center")
    
}
// END OF PASSWORD FUNCTIONS

function validateregister(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var confpassword = document.getElementById("confirmpassword").value
    var email = document.getElementById("email").value
    var code = document.getElementById("code").value
    var number = document.getElementById("number").value
    var day = document.getElementById("day").value
    var month = document.getElementById("month").value
    var year = document.getElementById("year").value


    var errormessage = ""
    if(username.length < 8){
        errormessage += "Username must have more than 8 characters!\n"
    }

    if(password != confpassword){
        errormessage += "Passwords do not match!\n"
    }
    if(password.length < 8){
        errormessage += "Passwords must have more than 8 characters!\n"
    }
    if(!containsSpecialChars(password)){
        errormessage += "Password must contain at least one special character! (!@#$%^&*)\n"
    }
    if(!containsNumber(password)){
        errormessage += "Password must contain at least one number (0-9)\n"
    }
    if(!containsUppercase(password)){
        errormessage += "Password must contain at least one Uppercase character (A-Z)\n"
    }
    if(!containsLowercase(password)){
        errormessage += "Password must contain at least one Lowercase character (a-z)\n"
    }
    if(!email.includes("@")){
        errormessage += "Email is Invalid\n"
    }
    if(!code.includes("+")){
        errormessage += "Please include (+) in Country Code\n"
    }
    if(number.length < 7 || !containsOnlyNumbers(number)){
        errormessage += "Invalid Contact Number\n"
    }
    if(day.length != 2 || month.length != 2 || year.length != 4 || !containsOnlyNumbers(day) || !containsOnlyNumbers(month) || !containsOnlyNumbers(year)){
        errormessage += "Invalid Date of Birth (dd/mm/yyyy)\n"
    }
    if(!document.getElementById("registration").checkValidity()){
        errormessage += "Please fill in required fields!\n"
    }
    if(errormessage != ""){
        alert(errormessage)
    }
    else{
        register(username,password)
        alert("Successful Registration\nClick Ok to head to login page")
        document.getElementById("registration").action = "login_patient.html"
        document.getElementById("registration").submit()
        document.getElementById("registration").reset()
    }
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function containsNumber(str) {
    return /\d/.test(str);
}

function containsUppercase(str) {
    return /[A-Z]/.test(str);
}
function containsLowercase(str) {
    return /[a-z]/.test(str);
}
function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function validatelogin(){
    errormessage = ""
    if(!document.getElementById("registration").checkValidity()){
        errormessage += "Please fill in required fields\n"
    }
    
    if((login(username,password)) === false){
        errormessage += "Invalid Username or Password"
    }
    if(errormessage != ""){
        alert(errormessage)
    }
    else{
        document.getElementById("registration").submit()
        document.getElementById("registration").reset()
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyD9ouBle0s4OAyamcvXrmjKRpHrSXc_unI",
    authDomain: "firebasics-281dd.firebaseapp.com",
    projectId: "fiitemsRefrebasics-281dd",
    storageBucket: "firebasics-281dd.appspot.com",
    messagingSenderId: "941290209708",
    appId: "1:941290209708:web:93f3bf62c88882e40afa09",
    measurementId: "G-YWMCHYLBS7",
    databaseURL: "https://firebasics-281dd-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function register(user, pw){

    console.log('====Start Register====')
    console.log(user, pw)
    firebase.database().ref('accounts/' + user).set({
    username: user,//adding the details into the database, format--> column name: variable
    password:pw
    })
    console.log('====End Register====')

}
async function login(user, pw){
    //return bool t/f 
    // await as config with firebase is slower than process
    login_success=false

    var acctsRef = firebase.database().ref().child("accounts")
    
       await acctsRef.once('value', function (snapshot) {
            snapshot.forEach(function (acct_snapshot) {
            console.log(user, acct_snapshot.val().username)
                if(user == acct_snapshot.val().username && pw == acct_snapshot.val().password)
                    login_success = true
        
                })
            })
            // console.log(login_success)
            return login_success
}
    
