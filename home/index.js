
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
