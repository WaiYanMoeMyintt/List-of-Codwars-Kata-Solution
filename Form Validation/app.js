const  username = document.querySelector(".username");
const email    = document.querySelector('.email');
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const button = document.querySelector("button");
const form  = document.querySelector("form");
const error = document.querySelector("small");
const checkGreen = document.querySelector(".check-green");
const checkRed  = document.querySelector(".wrong-red");

const errorFunc = ()=>{
       error.style.visibility = "visible";
       error.style.color    = "red";
       username.classList.add("border-color-red");
}

const checkFunc = ()=>{
     error.style.visibility = "visible";
     error.style.color    = "green";
     username.classList.add("border-color-green");
}

const checkEmail = email =>{  
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};


form.addEventListener("submit",e=>{
       e.preventDefault();
       formEventSubmit();
});

form.addEventListener("input",(s)=>{
     s.preventDefault();
     formEventChange();
});

const validUsername = ()=>{
const userValue = username.value.trim();
if(userValue === ''){
      errorFunc();
     error.textContent = "username cannot contain space";
}
else if(userValue.length <= 5){
     errorFunc();
     error.textContent = "username must have 5 characters";  
}
else {
    checkFunc();
    error.textContent = "username must be Valid";  
}
}

const validEmail = ()=>{
     const emailValue = email.value.trim();
     const emailError  = document.querySelector('.email-error');
     if(emailValue === ""){
         emailError.style.visibility = "visible";
         emailError.textContent = "email address must be missing"
         emailError.style.color = "red";
         email.classList.add("border-color-red"); 
     }
     else if(!checkEmail(emailValue || emailValue === '')){
          emailError.style.visibility = "visible";
          emailError.textContent = "email address must be Invalid"
          emailError.style.color = "red";
          email.classList.add("border-color-red");
     }
     else {
          emailError.style.visibility = "visible";
          emailError.textContent = "email address must be Valid"
          emailError.style.color = "green";
          email.classList.add("border-color-green");
     }
}


const validPassword = ()=>{
    const password1 = pass1.value.trim();
    const password2 = pass2.value.trim();
    const message1 = document.querySelector('.pas-error1');
    const message2 = document.querySelector('.pas-error2');


    if(password1 === '' && password2 === ''){
        message1.textContent = "password must be missing"
        message2.textContent  = "password must be missing"
        
        message1.style.visibility = "visible";
        message1.style.color = "red";
        message2.style.visibility = "visible";
        message2.style.color = "red";
        pass1.classList.add('border-color-red');
        pass2.classList.add('border-color-red');
    }
    else if(password1 !== password2 || password2 !== password1){
     message1.textContent = "password does't be match"
     message2.textContent  = "password does't be match";
     
     message1.style.visibility = "visible";
     message1.style.color = "red";
     message2.style.visibility = "visible";
     message2.style.color = "red";
     pass1.classList.add('border-color-red');
     pass2.classList.add('border-color-red');
    }
    else {
     message1.textContent = "password must be valid"
     message2.textContent  = "password must be valid";
     
     message1.style.visibility = "visible";
     message1.style.color = "green";
     message2.style.visibility = "visible";
     message2.style.color = "green";
     pass1.classList.add('border-color-green');
     pass2.classList.add('border-color-green');
    }
}


const formEventSubmit = ()=>{
   validUsername();
   validEmail();
   validPassword();
}

const formEventChange = ()=>{
     validUsername();
     validEmail();
     validPassword();
}
