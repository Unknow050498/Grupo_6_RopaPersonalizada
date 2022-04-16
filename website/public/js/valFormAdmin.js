window.addEventListener("load", function () {
  let formulario = document.querySelector("form.formularySignUp");
  console.log("entró");

  formulario.addEventListener("submit", function (event) {
    let erroresFront = [];
    event.preventDefault();

    let nombre = document.querySelector("#nameSignUp");
    let nickname = document.querySelector("#usernameSignUp");
    let email = document.querySelector("#emailSignUp");
    let contrasena = document.querySelector("#passwordSignUp");
    let rcontrasena = document.querySelector("#rpasswordSignUp");
    let nacimiento = document.querySelector("#nacimiento");
    let generoM = document.querySelector("#radioSexMen");
    let generoF = document.querySelector("#radioSexWoman");
    let cargo = document.querySelector("#typeSignUp");

    if (nombre.value == "") {
      erroresFront.push("Ingresa tu nombre completo");
    } else if (nombre.value.length < 5) {
      erroresFront.push(
        "tu nombre completo no puede tener menos de 5 caracteres"
      );
    }

    if (nickname.value == "") {
      erroresFront.push("Elige un color");
    } else if (nickname.value.length < 4) {
      erroresFront.push(
        "tu nombre de usuario no puede tener menos de 4 caracteres"
      );
    }
    if (email.value == "") {
      erroresFront.push("Ingresa tu email");
    }
    if (contrasena.value == "") {
      erroresFront.push("Ingresa tu contraseña");
    } else if (contrasena.value.length < 8) {
      erroresFront.push("La contraseña debe tener más de 8 carácteres");
    }
    if (rcontrasena.value == "") {
      erroresFront.push("Confirma tu contraseña");
    } else if (rcontrasena.value != contrasena.value) {
      erroresFront.push("Las contraseñas no coinciden");
    }
    if (nacimiento.value == "") {
      erroresFront.push("Ingresa tu fecha de naciemiento");
    }
    if (!generoM.checked && !generoF.checked) {
      erroresFront.push("Elige un género");
    }
    if (cargo.value == "") {
      erroresFront.push("Asigna un cargo");
    }
    if (erroresFront.length > 0) {
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = "";
      console.log(ulErrores);
      for (let i = 0; i < erroresFront.length; i++) {
        ulErrores.innerHTML += "<li>" + erroresFront[i] + "</li>";
        ulErrores.classList.add("is-dangeros");
      }
    } else {
      formulario.submit();
    }
  });
});
