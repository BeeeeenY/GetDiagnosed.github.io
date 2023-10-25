// Start of ChatBot
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


async function message() {
    // get the resposes from call_chatgpt, varibale save as an array
    var user_input = document.getElementById('usertext').value
    let str_repsonses_innerhtml = await call_chatgpt(user_input)

    console.log(str_repsonses_innerhtml)
    display_all_response(str_repsonses_innerhtml, user_input)
    
}
function display_all_response(str_repsonses_innerhtml,user_input){
// display of responses from user input and chatgpt response

    //first entry into chatbot
    if (typeof str == 'undefined'){
        str = ``
        str += `<div class="input-group-text">username: ${user_input}</div>`
        str += `<div style="color:blue; font-size:12px" class="input-group-text">bot:${str_repsonses_innerhtml}</div>`
        document.getElementById('chatlog').style.display = "block"
        document.getElementById('chatlog').innerHTML = str
        document.getElementById('usertext').value = ""; 
    }
    //following entries into chatbot
    else{
        str += `<div class="input-group-text">username: ${user_input}</div>`
        str += `<div style="color:blue; font-size:12px" class="input-group-text">bot:${str_repsonses_innerhtml}</div>`
        document.getElementById('chatlog').style.display = "block"
        document.getElementById('chatlog').innerHTML = str
        document.getElementById('usertext').value = ""; 
    }
}

async function call_chatgpt(user_input){
    let api_endpoint_url = "https://api.openai.com/v1/chat/completions"
    const encodedString = "V1hwS2VtUkdTa2xhU0ZKVFVtc3dlbGt6Y0U5aFJsWkZWVlJXVDFKVWJIZFZWRXAzVFVkTmVGWnNWazVOUlhCNlYxY3hNRkl4VG5GUmJrcFdUVEJ3UTFsV1drdE9SbXhZVkZoa1UySllhRTlWTWpFelpWZEdWVlpzWXowPQ=="
    const halfDecoded = atob(atob(encodedString))
    
    try {
     console.log("Getting GPT chat...")
     const data = {
      model: 'gpt-3.5-turbo',
      messages: [
          {
              role: 'system',
              content: 'You are as pre doctor check that allow users to type in symptoms. You will show basic reccomendations for the symptoms. Keep only 3 short recomendations  and in a list'
          },
          {
              role: 'user',
              content: user_input
          }
      ]
  };

  const requestOptions = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + atob(atob(halfDecoded))
      },
  };

  // Get chat GPT response
  const res = await axios.post(api_endpoint_url, data, requestOptions)
  var ai_responses_split = (res.data.choices[0].message.content).split('\n')

  var setstr = '<ul>'
        // console.log('---------------------before----------------')
        // console.log(message)
        for(let i = 0; i<ai_responses_split.length;i++){
            if(ai_responses_split[i]==''){        
            }
            else{
                let input_text = ai_responses_split[i].slice(2)
                setstr+=`<li>${input_text}</li>`
            }
        }
        setstr +="</ul>"
  return  setstr
 } catch (error) {
  console.log(error.message)
 }
}
// END OF CHATBOT

// START OF PASSWORD FUNCTIONS
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
    newtext.innerHTML = 'New User?'
    desc.innerHTML = 'Sign up for quality and easily accessed healthcare'
    username.placeholder = "Email or Patient ID"
    confpassword.style.display = 'none'
    icon.style.display = 'none'
    login.innerHTML = 'Login'
    forgotpassword.style.display = 'initial'
    loginbutton.innerHTML = 'Login'
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
    newtext.innerHTML = 'Returning User?'
    desc.innerHTML = 'Welcome Back! We hope to heal you <3 Click button below to Log In'
    username.placeholder = "Email"
    confpassword.style.display = 'initial'
    icon.style.display = 'initial'
    login.innerHTML = 'Register'
    forgotpassword.style.display = 'none'
    loginbutton.innerHTML = 'Register'
    
}
// END OF PASSWORD FUNCTIONS



