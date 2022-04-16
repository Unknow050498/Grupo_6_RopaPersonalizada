window.addEventListener('load',function(){
    let formulario = document.querySelector('form.formularyProcuctAdd');
    
    
    formulario.addEventListener('submit', function(event) {
        let erroresFront = [];

        let modelo = document.querySelector('.modelo');
        let color = document.querySelector('.color');
        let talla = document.querySelector('.talla');
        let cantidad = document.querySelector('.cantidad');
        let fotoStock= document.querySelector('.fotoStock');

        
        if(modelo.value == ""){
            erroresFront.push("Elige un modelo");
        }
        if(color.value == ""){
            erroresFront.push("Elige un color");
        }
        if(talla.value == ""){
            erroresFront.push("Elige una talla");
        }
        if(cantidad.value == "" ||cantidad.value == 0 ){
            erroresFront.push("Ingresa una cantidad mayor a cero");
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