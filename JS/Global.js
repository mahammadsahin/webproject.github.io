// side nav
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

// password show
function showPass() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
