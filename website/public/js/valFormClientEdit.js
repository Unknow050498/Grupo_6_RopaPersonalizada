window.addEventListener("load", function () {
  let formulario = document.querySelector("form.formularySignUp");

  formulario.addEventListener("submit", function (event) {
    let erroresFront = [];
    event.preventDefault();
    let nombreCli = document.querySelector(".nameSignUp");
    let nickCli = document.querySelector("#usernameSignUpCli");
    let email = document.querySelector(".emailSignUp");
    let contrasena = document.querySelector("#passwordSignUpCli");
    let rcontrasena = document.querySelector("#rasswordSignUpCli");
    let nacimiento = document.querySelector(".nacimiento");
    let generoM = document.querySelector(".radioSexMen");
    let generoF = document.querySelector(".radioSexWomen");

    if (nombreCli.value == "") {
      erroresFront.push("Ingresa tu nombre completo ");
    } else if (nombreCli.value.length < 5) {
      erroresFront.push("El nombre debe tener más de 5 carácteres");
    }

    if (nickCli.value == "") {
      erroresFront.push("Ingresa tu nombre de usuario");
    }
    if (email.value == "") {
      erroresFront.push("Ingresa tu correo electrónico");
    }
    if (contrasena.value == "") {
      erroresFront.push("Ingresa una contraseña");
    } else if (contrasena.value.length > 8) {
      erroresFront.push("La contraseña debe ser mayor de más de 8 carácteres");
    }
    if (rcontrasena.value == "") {
      erroresFront.push("Confirma tu contraseña");
    } else if (rcontrasena.value == contrasena.value) {
      erroresFront.push("La contraseña no coincide");
    }
    if (nacimiento.value == "") {
      erroresFront.push("Ingresa tu fecha de nacimiento");
    }
    if (!generoM.checked && !generoF.checked) {
      erroresFront.push("Elige un genero");
    }

    if (erroresFront.length > 0) {
      event.preventDefault();
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
