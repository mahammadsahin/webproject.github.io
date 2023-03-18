const errorMessage = 'User does not exist';

async function loginUser(event) {
  // prevent the default nature
  event.preventDefault();

  // get username and password
  const username = event.target[0].value;
  const password = event.target[1].value;

  const data = await fetchApi('json/users.json');
  const users = data.users;

  // 2 cases
  const foundUser = users.find(user => {
    if (user.username === username && user.password === password) {
      return user;
    }
  });

  // 1 -> User is found
  if (foundUser) {
    window.location.href = 'https://mahammadsahin.github.io/webproject.github.io/FrontEnd/dashboard.html';
    console.log('logged in');
  }
  // 2 -> User is not found
  else {
    event.target.innerHTML += `<div id="error" class="alert alert-danger mt-2" >An error occured: ${errorMessage}</div>`;
  }
}

async function fetchApi(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
