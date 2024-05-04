const btnRojo = $("#red"); //1
const btnVerde = $('#green'); //2
const btnAmarillo = $('#yellow'); //4
const btnAzul = $('#blue'); //3


let secuencia = [];
let secuenciaUsuario = [];
let puntaje = 0;

// Agregar un event listener para la pulsación de la tecla a del teclado
$(document).on('keydown', function(event) {
    if(event.key === 'a'){
        empezarJuego();
    }
});


function empezarJuego(){

        crearSecuencia(secuencia);
        console.log(secuencia);
  
        jugadaUsuario();
        console.leg(secuenciaUsuario);
        
        puntaje++;
        console.log('puntaje: ' + puntaje);


}

function jugadaUsuario() {
    // Agregar event listener para los botones
    $('.boton').on('click', function() {

        let botonPresionado = $(this).attr('id');
        let numeroDeColor;
        switch(botonPresionado){
            case 'red':
                numeroDeColor = 1;
                break;
            case 'green':
                numeroDeColor = 2;
                break;
            case 'blue':
                numeroDeColor = 3;
                break;
            case 'yellow':
                numeroDeColor = 4;
                break;
        }

        // Agregar el botón presionado a la secuencia del usuario
        secuenciaUsuario.push(numeroDeColor);
        
        // Verificar si la secuencia del usuario coincide con la secuencia generada
        if (secuenciaUsuario.length === secuenciaGenerada.length) {
            verificarSecuencia();
        }
    });
}

function crearSecuencia(cadena){

    let numeroAleatorio = Math.floor(Math.random() * 4) + 1;
    
    switch(numeroAleatorio){
        case 1:
            reproducirSonido(btnRojo);
            cadena.push(numeroAleatorio);
            break;
        case 2:
            reproducirSonido(btnVerde);
            cadena.push(numeroAleatorio);
            break;
        case 3:
            reproducirSonido(btnAzul);
            cadena.push(numeroAleatorio);
            break;
        case 4:
            reproducirSonido(btnAmarillo);
            cadena.push(numeroAleatorio);
            break;
    }

    return cadena;
}

function reproducirSonido(btn){

    var sonido;

    switch(btn.attr('id')){
        case 'red':
            sonido = new Audio('./sounds/red.mp3');
            sonido.play();

            btn.addClass('pressed');
            setTimeout(function() {
                btn.removeClass('pressed');
            }, 100);

            break;
        case 'green':
            sonido = new Audio('./sounds/green.mp3');
            sonido.play();

            btn.addClass('pressed');
            setTimeout(function() {
                btn.removeClass('pressed');
            }, 100);
            break;
        case 'blue':
            sonido = new Audio('./sounds/blue.mp3');
            sonido.play();

            btn.addClass('pressed');
            setTimeout(function() {
                btn.removeClass('pressed');
            }, 100);
            break;
        case 'yellow':
            sonido = new Audio('./sounds/yellow.mp3');
            sonido.play();

            btn.addClass('pressed');
            setTimeout(function() {
                btn.removeClass('pressed');
            }, 100);
            break;
    }
}