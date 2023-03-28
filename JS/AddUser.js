// let id = "";
// //LOCAL STORAGE.CLEAR
// selectData();
// function manageData(){
//     document.getElementById('msg').innerHTML=''
//     let username = document.querySelector("#username").value;
//     let useremail = document.querySelector("#useremail").value;
//     let usermobile = document.querySelector("#usermobile").value;
//     if(username == "" || useremail == "" || usermobile == ""){
//         document.getElementById('msg').innerHTML='Fill the data'
//     }else{
//         if(id == ''){
//             let arr = JSON.parse(localStorage.getItem('username'));
//             if(arr == null){
//                 let data = [username];
//                 localStorage.setItem('username', JSON.stringify(data));
//         }else{
//             arr.push(username);
//             localStorage.setItem('username', JSON.stringify(arr));
//         }
//         document.getElementById(username).value=""
//         document.getElementById('msg').innerHTML='Data added'
//     }else{

//     }
//     selectData(); 
// }
// }

// function selectData(){
//     let arr = JSON.parse(localStorage.getItem('username'));
//     if(arr!=null){
//         let html = ''
//         let sno=1;
//         for(let k in arr){
//             html = html+`<tr><td>${sno}</td><td>${arr[k]}</td></tr>`
//             sno++;  

//         }
//     }
// }

// function editData(){

// }

// function deleteData(){
    
// }







function addData(event){
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let useremail = document.querySelector("#useremail").value;
    let usermobile = document.querySelector("#usermobile").value;


    alert(username + useremail + usermobile)

    let usernameValue = localStorage.setItem("username", username);
    let useremailValue = localStorage.setItem("useremail", useremail);
    let usermobileValue = localStorage.setItem("usermobile", usermobile);
    console.log(usernameValue, useremailValue, usermobileValue);
}