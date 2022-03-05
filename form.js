const Fname = document.getElementById("Fnames")
const lastname = document.getElementById("lastname")
const myForm = document.getElementById("forms")
const mail = document.getElementById("mail")
const passW = document.getElementById("pass")
const confirmPass = document.getElementById("conPass")
const thankYou = document.getElementById("thankU")


let isFormValid = false
let isValid = false
const formInputs = [ Fname, lastname, mail, passW, confirmPass, ]


const isValidMail = (email) => {
     return   String(email).toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
   
}

const isPassValid = (password) =>{
    return String(password).match(("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))
}

 const invalidInput = (item) => {
     item.classList.add("main-inputt")
     item.nextElementSibling.classList.add("errorMsgg")
 }

 const validInput = (item) =>{
    item.classList.remove("main-inputt")
    item.nextElementSibling.classList.remove("errorMsgg")
 }


const valid = () => {
   if(!isValid) return;

    isFormValid = true
    validInput(mail)
    validInput(Fname)
    validInput(passW)
    validInput(confirmPass)
    validInput(lastname)

    if(!Fname.value){
       invalidInput(Fname)
       isFormValid = false
    }
    if(!lastname.value){
        invalidInput(lastname)
    }
    if(!isPassValid(passW.value)){
        invalidInput(passW)
    }

    if(!isValidMail(mail.value)){ 
            invalidInput(mail) 
            isFormValid = false
    }
    if(confirmPass.value !== passW.value)
    invalidInput(confirmPass)
} 

myForm.addEventListener("submit", (e) => {
e.preventDefault()
valid()
isValid = true
if(isFormValid){
    myForm.remove()
   thankYou.classList.remove("thanks")
}


})
formInputs.forEach( (inputs) => {
    inputs.addEventListener("input", () => {
      valid() 
    })
})

