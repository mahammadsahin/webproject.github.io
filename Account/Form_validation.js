// let account = document.getElementById('raccount').value;
let rname = document.getElementById('rname').value;
let email = document.getElementById('remail').value;
let mob = parseInt(document.getElementById('rmob').value);
let pwd = document.getElementById('rpwd').value;
let rpwd = document.getElementById('rrpwd').value;

let laccount = document.getElementById('laccount').value;
let lemail = document.getElementById('lemail').value;
let lpwd = document.getElementById('lpwd').value;

let alga = email.indexOf('@');
let dot = email.indexOf('.');

document.write(rname," ", email," ", mob," ", pwd," ", rpwd);
document.write(laccount, lemail, lpwd);

function reg(){
    if(rname.length < 3){
        alert("Enter a valid name");
        document.getElementById('rname').style.border="3px solid red";
    }else if(((alga < 2) || (dot < alga + 2) || ((dot + 2) > email.length))){
        alert("Enter a valid email address")
        document.getElementById('remail').style.border="3px solid red";
    }else if(mob<906000000000 || mob>959999999999){
        alert("Enter a valid mobile number")
        document.getElementById('rmob').style.border="3px solid red";
    }else if(pwd.length>5){
        alert("Enter a 6 digit password")
        document.getElementById('rpwd').style.border="3px solid red";
    }else if(pwd == rpwd){
        alert("Password not match")
        document.getElementById('rrpwd').style.border="3px solid red";
    }
}













     ///////////////////////////////////////////////////////////////////////////////
    
    // const form = document.querySelector('#formId');
    // const usernameInput = document.querySelector('#username');
    // const emailInput = document.querySelector('#email');
    // const mobileInput = document.querySelector('#rmob');
    // const passwordInput = document.querySelector('#password');
    // const confirmPasswordInput = document.querySelector('#confirm-password');
    
    // form.addEventListener('submit', (event)=>{
        
    //     validateForm();
    //     console.log(isFormValid());
    //     if(isFormValid()==true){
    //         form.submit();
    //      }else {
    //          event.preventDefault();
    //      }
    
    // });
    
    // function isFormValid(){
    //     const inputContainers = form.querySelectorAll('.input-group');
    //     let result = true;
    //     inputContainers.forEach((container)=>{
    //         if(container.classList.contains('error')){
    //             result = false;
    //         }
    //     });
    //     return result;
    // }
    
    // function validateForm() {
    //     //USERNAME
    //     if(usernameInput.value.trim()==''){
    //         setError(usernameInput, 'Name can not be empty');
    //     }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
    //         setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    //     }else {
    //         setSuccess(usernameInput);
    //     }
    //     //EMAIL
    //     if(emailInput.value.trim()==''){
    //         setError(emailInput, 'Provide email address');
    //     }else if(isEmailValid(emailInput.value)){
    //         setSuccess(emailInput);
    //     }else{
    //         setError(emailInput, 'Provide valid email address');
    //     }
    
    //     //PASSWORD
    //     if(passwordInput.value.trim()==''){
    //         setError(passwordInput, 'Password can not be empty');
    //     }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
    //         setError(passwordInput, 'Password min 6 max 20 charecters');
    //     }else {
    //         setSuccess(passwordInput);
    //     }
    //     //CONFIRM PASSWORD
    //     if(confirmPasswordInput.value.trim()==''){
    //         setError(confirmPasswordInput, 'Password can not be empty');
    //     }else if(confirmPasswordInput.value !== passwordInput.value){
    //         setError(confirmPasswordInput, 'Password does not match');
    //     }else {
    //         setSuccess(confirmPasswordInput);
    //     }
    // }
    
    // function setError(element, errorMessage) {
    //     const parent = element.parentElement;
    //     if(parent.classList.contains('success')){
    //         parent.classList.remove('success');
    //     }
    //     parent.classList.add('error');
    //     const paragraph = parent.querySelector('p');
    //     paragraph.textContent = errorMessage;
    // }
    
    // function setSuccess(element){
    //     const parent = element.parentElement;
    //     if(parent.classList.contains('error')){
    //         parent.classList.remove('error');
    //     }
    //     parent.classList.add('success');
    // }
    
    // function isEmailValid(email){
    //     const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    //     return reg.test(email);
    // }
    
    
    
    

