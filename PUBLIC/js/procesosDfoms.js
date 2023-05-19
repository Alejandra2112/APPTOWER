const boton= document.getElementById("boton");
boton.addEventListener("click", function(e){
    e.preventDefault();
    try{
        if (document.getElementById("Fecha").value == false){
            throw new Error("Debe ingresar la fecha limite");
        }
    const Fecha= document.getElementById("Fecha").value;
    let fechaActual = new Date();
    let fechaLimite = new Date(Fecha);
    if (fechaLimite < fechaActual){
        alert("La fecha limite es inferior a la echa de creacion por lo que es invalida, vuelvala a ingresar")
    }
    else{
        alert("Gracias por usar nuestra version de prueba, por favor espere por futuras actualizaciones :)");
    }
}catch(error){
    alert(error)
}
})
 
const botonC = document.getElementById("botonC");
botonC.addEventListener("Click", function(e){
e.preventDefault();
    try{
        if (document.getElementById("tipoC").value == "" || document.getElementById("motivo").value == "" || document.getElementById("descripcion").value == "" || document.getElement("valor").value == "" || document.getElementById("cuota").value==""){
            throw new Error("Ninguno de los campos puede ir vacio");
        }else if(document.getElementById("descripcion").value){

        }

    }catch(error){

    }

})