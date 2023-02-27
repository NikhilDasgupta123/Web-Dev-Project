const togglepass= document.querySelector("#togglePassword");
const password= document.querySelector("#password");

togglepass.addEventListener("click",function(){
    const type=password.getAttribute("type")? "type" : "password";
    password.setAttribute("type",type);
    
    this.classList.toggle("bi-eye");
});

const form = document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
});