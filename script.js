
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
}