// backend call
const errorStr = 'User does not exist'
async function data(event) {
    event.preventDefault();
    console.log(event);
    const username = event.target[0].value;
    const password = event.target[1].value;
    // const username = document.getElementById("username").value;
    // const password = document.getElementById("password").value;
    // console.log(username, password);
    const users = await fetchApi('JSON/Account.json')
    const foundUser = users.find(users => {
        if (users.username === username && users.password === password) {
            return users;
        }
    })
    if (foundUser) {
        event.srcElement.innerHTML += '<div class="alert alert-success" role="alert">Logging Sucessfull</div>'
        setTimeout(() => {
            window.location.href = 'Dashboard.html'
            document.getElementById('user_wellcome').innerHTML = "Welcome3 " + username;
        }, 500)
    }
    else {
        event.srcElement.innerHTML += `<div class="alert alert-danger" role="alert">An error occurd ${errorStr}</div>`
    }
}
async function fetchApi(url) {
    const res = await fetch(url);
    const userData = await res.json();
    return userData.users;
}