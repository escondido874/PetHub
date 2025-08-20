
let datousradm={
    "nombreCompleto": "Cristobal Zeppelin",
    "usuario": "escondido",
    "password" : "escon1234ñ",
    "estado" : true
}



function hola(){
    console.log("funciondwwuaidgawh")
}

hola()

window.onload = function(){
    if(window.location.pathname.endsWith("home.html")){
        let usuariologin= JSON.parse(localStorage.getItem("datosUsuario"))
        if (usuariologin.estadolog){
            document.getElementById("tituloHome").textContent="Bienvenido " + usuariologin.nombre
        }
    }
}

function datosUsr(){
    let usuario = document.getElementById("Usuarioinput").value
    let pass =document.getElementById("inputPassword5").value
    if (usuario== "" || usuario.length<8){
        alert("El usuario no puede estar vacio vacio ni tener menos de 8 caracteres")
    } else if (pass.length <8 || pass==""){
        alert("La contraseña no puede estar vacio ni tener menos de 8 caracteres")
    } else if (usuario==datousradm.usuario && pass==datousradm.password){
        
        let usuariologeado={
            "nombre": datousradm.nombreCompleto,
            "estadolog" : datousradm.estado
        }
        localStorage.setItem("datosUsuario",JSON.stringify(usuariologeado))
        window.location.href="home.html"
    }
    console.log(usuario, pass)
}

function crearuser(){

    let user = document.getElementById("userId").value
    let pass = document.getElementById("exampleInputPassword1").value
    let correo = document.getElementById("correo").value

    if (user== "" || user.length<8){
        alert("El usuario no puede estar vacio ni tener menos de 8 caracteres")
    } else if (pass.length <8 || pass==""){
        alert("La contraseña no puede estar vacio ni tener menos de 8 caracteres")
    } else if (correo== "" || correo.length<8){
        alert("El nombre completo no puede estar vacio ni tener menos de 8 caracteres")
    // } else if (checkbox == null){
    //     alert("Debes aceptar los términos y condiciones")
    } else {
    let newuser={
            nombre: user,
            password: pass,
            nombreCompleto: correo,
            estadolog: true
        }
        
        localStorage.setItem("datosUsuario",JSON.stringify(newuser))
        window.location.href="home.html"
    }

}

function cerrarsesion(){
    localStorage.removeItem("datosUsuario")
    window.location.href="index.html"
}
