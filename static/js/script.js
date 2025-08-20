let nombre = "fjksahefsygsdpjhfjisfehiofsea"
let datousradm={
    "nombreCompleto": "Cristobal Zeppelin",
    "usuario": "escondido",
    "password" : "escon1234ñ",
    "estado" : true
}

console.log(nombre)

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



// let usuario = document.getElementById("Usuarioinput")
// console.log(usuario)
