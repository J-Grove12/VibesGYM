let userList = [{email: "admin@admin.com", password: "123"}];

function login(){
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
  event.preventDefault(); // previene el envío del formulario
 // Verificar que el correo electrónico y contraseña existan en la lista de usuarios
  let userExists = userList.some(user => user.email === email.value && user.password === password.value);
  
  if (userExists) {
    window.location.href = "menu.html"; // redirige al usuario al menú principal
  } else {
    alert("Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo."); // muestra un mensaje de error
  }
}
function registerUser() {
    let email = document.getElementById("correo-electronico").value;
    let password = document.getElementById("contraseña").value;
    event.preventDefault();
    // Verificar que el correo electrónico no exista en la lista de usuarios
    let userExists = userList.some(user => user.email === email);
    if (userExists) {
      alert("Este correo electrónico ya ha sido registrado.");
      return;
    }else
    {
            // Agregar el usuario a la lista de usuarios
            userList.push({email, password});
            alert("Usuario registrado con éxito.");
            // Redirigir al usuario a la página de menú principal
            window.location.href = "menu.html";
    }

  }
