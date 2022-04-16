window.addEventListener('load',function(){
    let formulario = document.querySelector('form.formularyProcuctAdd');
    
    formulario.addEventListener('submit', function(event) {
        let modelo = document.querySelector('.model');
        let tipo = document.querySelector('select');
        let precio = document.querySelector('.precio');
        let desCorta = document.querySelector('.description-short');
        let descripcion = document.querySelector('.description');
        let fotoProducto= document.querySelector('.photoProduct');

        let erroresFront = [];
        if(modelo.value == ""){
            erroresFront.push("Ingresa la clave del modelo ");
        }else if(modelo.value.length < 5){
                erroresFront.push("EL modelo debe ser de más e 5 caracteres");
        }
        
        if(tipo.value == 0){
            erroresFront.push("Elige un tipo de producto");
        }
        if(precio.value == ""){
            erroresFront.push("Ingresa el precio del artículo");
        }
        if(desCorta.value == ""){
            erroresFront.push("Ingresa una descripción corta");
        }else if(modelo.value.length > 30){
                erroresFront.push("La descripción corta no debe ser de mayor de 30 caracteres");
        }
        if(descripcion.value == ""){
            erroresFront.push("Ingresa la descripción completa del producto");
        }else if(modelo.value.length > 30){
                erroresFront.push("La descripción debe ser detallada");
        }
        if(fotoProducto.value == ""){
            erroresFront.push("Coloca una foto del producto");
        }
        
        if(erroresFront.length > 0){
            event.preventDefault();
            let ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML ="";
            console.log(ulErrores);
            for(let i = 0; i < erroresFront.length; i++){
                ulErrores.innerHTML += "<li>" + erroresFront[i] + "</li>"
                ulErrores.classList.add('is-dangeros');
            }
        }
    })
    
})