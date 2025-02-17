let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    //si ya se sortearon todos los numeros posibles
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya no hay mas numeros para sortear');
    }else{
        //si el numero generado esta en la lista de numeros sorteados
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Ganaste en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    //el usuario no adivino el numero
    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego secreto');
    asignarTextoElemento('p',`indica numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensdaje de intervalo de numeros
    //generar numero aleatorio
    //reiniciar intentos
    condicionesIniciales();
    //desabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true); 
    
}

condicionesIniciales();
