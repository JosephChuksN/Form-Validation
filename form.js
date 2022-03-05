const Fname = document.getElementById("Fnames")
const lastname = document.getElementById("lastnames")
const myForm = document.getElementById("forms")
const mail = document.getElementById("mail")
const allInputs = document.querySelectorAll(".main-input")

const isValidMail = (email) => {
    const re = /^[a-z_A-Z\-0-9\.\*\#\$\!\~\%\^\&\-\+\?\|]+@+[a-zA-Z\-0-9]+(.com)$/
    re.test(String(email).toLowerCase())
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
    Fname.addEventListener("input", ()=> {
   validInput(Fname)
    })
   mail.addEventListener("input", () => { 
   validInput(mail)
    })
    if(!Fname.value){
       invalidInput(Fname)
    }

    if(!isValidMail(mail.value)){ 
            invalidInput(mail) 
    }
    
} 

myForm.addEventListener("submit", (e) => {
e.preventDefault()
valid()

})


