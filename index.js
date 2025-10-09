const email = document.getElementById("email");
const senha = document.getElementById("password");
const btnEntrar = document.getElementById("btnEntrar");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "Gui" && senha.value === "123") {
    window.location.href = "./home.html";
  }
});
