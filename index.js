const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const date = document.getElementById('date');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
form.addEventListener('submit',(e)=>{
    let message = []
    if(password.length<=6)
    {
        message.push('Password Length must be greater than 6')
    }
    if(message.length>0)
    {
        e.preventDefault()
        errorElement.innerText = message.join(", ")
    }
})