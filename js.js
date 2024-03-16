let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#confirm-password");
let createAcct = document.querySelector("button");


createAcct.addEventListener('click', function() {
    if (password.value === passwordConfirm.value) {
          console.log("Passwords match") 
    } else {
        password.style.borderColor = "lightcoral";
        passwordConfirm.style.borderColor = "lightcoral";
    }
});

