
// Get the button:
let mybutton = document.getElementById("gotoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openForm() {
    document.getElementById("chatbot-popup").style.display = "block";
    document.getElementById("chatbot").style.display = "none";
}
  
function closeForm() {
    document.getElementById("chatbot-popup").style.display = "none";
    document.getElementById("chatbot").style.display = "block";
}

(function() {
    var usertext = document.getElementById('usertext');
    usertext.addEventListener('keypress', function(event) {
        var enter = event.keyCode
        if (enter == 13 && !event.shiftKey) {
            event.preventDefault()
            document.getElementById('send').click()
        }
    });
}());


function message(){
    var usertext = document.getElementById('usertext').value

    if(document.getElementById('chatlog').style.display == "none"){
        str = ``
    }
    str += `<span class="input-group-text">username: ${usertext}</span>`
    document.getElementById('chatlog').style.display = "block"
    document.getElementById('chatlog').innerHTML = str
    document.getElementById('usertext').value = "";

    str += `<span>CHATAI : $(response)</span>`
}

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
    const box1 = document.querySelector('#newbox');
    const box2 = document.querySelector('#loginbox')
    const button = document.getElementById('register');
    const close = document.getElementById('closebox');
    const newtext = document.getElementById('newtext')
    const desc = document.getElementById('description')
    const username = document.getElementById('username')
    const confpassword = document.getElementById('confirmpassword')
    const icon = document.getElementById('togglePassword2')
    const login = document.getElementById('logintext')
    const forgotpassword = document.getElementById('forgotpassword')
    const loginbutton= document.getElementById('loginbutton')

    // Slide the red box to the left (take over the blue box)
    box1.style.transform = 'translateX(+100%)';
    box2.style.transform = 'translateX(-100%)';
    button.style.display = 'none';
    close.style.display = 'inline';
    newtext.innerHTML = 'Returning User?'
    desc.innerHTML = 'Welcome Back! We hope to heal you <3 Click button below to Log In'
    username.placeholder = "Email"
    confpassword.style.display = 'block'
    icon.style.display = 'initial'
    login.innerHTML = 'Register'
    forgotpassword.style.display = 'none'
    loginbutton.innerHTML = 'Register'
}
function closebox() {
    const box1 = document.querySelector('#newbox');
    const box2 = document.querySelector('#loginbox')
    const button = document.getElementById('register');
    const close = document.getElementById('closebox');
    const newtext = document.getElementById('newtext')
    const desc = document.getElementById('description')
    const username = document.getElementById('username')
    const confpassword = document.getElementById('confirmpassword')
    const icon = document.getElementById('togglePassword2')
    const login = document.getElementById('logintext')
    const forgotpassword = document.getElementById('forgotpassword')
    const loginbutton= document.getElementById('loginbutton')
    

    // Slide the red box to the left (take over the blue box)
    box1.style.transform = 'translateX(0)';
    box2.style.transform = 'translateX(0)';
    button.style.display = 'inline';
    close.style.display = 'none';
    newtext.innerHTML = 'New here?'
    desc.innerHTML = 'Sign up for quality and easily accessed healthcare'
    username.placeholder = "Email or Patient ID"
    confpassword.style.display = 'none'
    icon.style.display = 'none'
    login.innerHTML = 'Log In'
    forgotpassword.style.display = 'initial'
    loginbutton.innerHTML = 'Login'
    
}





