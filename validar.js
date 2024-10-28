const nombre = document.getElementById("nom");
const passwd = document.getElementById("pass");
const passwdR = document.getElementById("passR");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const hid = document.getElementById("hid");
const telf = document.getElementById("telf");
const sexo = document.getElementsByName("sexo");

function valNombre(){
    if(!(/^[A-Za-z\s]+$/.test(nombre.value))){
        alert("Nombre inválido");
    }
}

function valPass(){
    if(passwd.value.length > 15 || passwd.value.length < 4 || passwd.value.includes("-","_","@")){
        alert("Contraseña inválida");
    }else{
        valPassR();
    }
}

function valPassR(){
    if(passwd.value !== passwdR.value){
        alert("Las contraseñas no coinciden");
    }
}

function valEmail(){
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        alert("Email inválido");
    }
}

function valDNI(){
    if(!(/^\d{8}[a-zA-Z]$/.test(dni.value))){
        alert("DNI inválido");
    }
}

function valTelf(){
    if(!(/^\d{9}$/.test(telf.value))){ 
        alert("Teléfono inválido");
    }
}

function valGenero(){
    let contador = 0;
    for(let i = 0; i<sexo.length; i++){
        if(sexo[i].checked){
            contador++;
        }
    }
    if(contador < 1){
        alert("Debes seleccionar tu género");
    }
}

function valTodo(){
    valNombre();
    valPass();
    valEmail();
    valDNI();
    valTelf();
    valGenero();
}



