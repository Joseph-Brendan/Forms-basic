let fullNameInput = document.getElementById("fullname")
let emailInput = document.getElementById("email")
let phoneNumber = document.getElementById("phonenumber")
let fullNameAlert = document.getElementById("enter-fullname-alert")
let emailAlert = document.getElementById("enter-email-alert")
let phoneNumberAlert = document.getElementById("enter-phonenumber-alert")

function validateFullName(){
    let fullName = fullNameInput.value
    if(fullName.length == 0){
        fullNameAlert.innerText = `Enter Full Name Please`
        fullNameInput.style.border = "none"
        fullNameInput.style.outline = "1px solid red"
    }else{
        fullNameAlert.innerText = " "
        fullNameInput.style.outline = "1px solid green"
    }
}