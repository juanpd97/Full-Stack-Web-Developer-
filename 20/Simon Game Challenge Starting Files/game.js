const botonRojo = $('.red');
const botonVerde = $('.green');
const botonAzul = $('.blue');
const botonAmarillo = $('.yellow');


$(document).on('keydown', function(event) {
    if(event.key === 'a'){
        let cadenaPc = [];
        empezarJuego();
    }
});

function empezarJuego(){

    let jugando = true;

    do{
        generarCadena(cadenaPc);
        console.log(cadenaPc);

        
        //let cadenaJugardor = [];
        let jugada;
        for(let i=0; i<cadenaPc.length; i++){

            $(document).on('click', function(value){
                switch(value.attr('id')) {
                    case 'red':
                        jugada = 1;
                        break;
                    case 'green':
                        jugada = 2;
                        break;
                    case 'blue':
                        jugada = 3;
                        break;
                    case 'yellow':
                        jugada = 4;
                        break;
                }

            });

            if(!(jugada === cadenaPc[i])){
                alert('juego terminado xd');
                jugando = false;
                break;
            }
        }



    } while(jugando);
}


function generarCadena(cadena){

    let numeroAleatorio = Math.floor(Math.random() * 4) + 1;

    switch(numeroAleatorio){
        case 1:
            presionarBoton(botonRojo);
            break;
        case 2:
            presionarBoton(botonVerde);
            break;
        case 3:
            presionarBoton(botonAzul);
            break;
        case 4:
            presionarBoton(botonAmarillo);
            break;
    }

    return cadena.push(numeroAleatorio);
}

/*
function presionarBoton(){

    $('.btn').on('click',function() {
        var sonido;
        var boton = $(this);

        switch(boton.attr('id')) {
            case 'red':
                sonido = new Audio('./sounds/red.mp3');
                break;
            case 'green':
                sonido = new Audio('./sounds/green.mp3');
                break;
            case 'blue':
                sonido = new Audio('./sounds/blue.mp3');
                break;
            case 'yellow':
                sonido = new Audio('./sounds/yellow.mp3');
                break;
            default:
                console.error('Botón no reconocido');
                return;
        }

        sonido.play();

        boton.addClass('pressed');
        setTimeout(function() {
            boton.removeClass('pressed');
        }, 100);
    });
}
*/


function presionarBoton(boton){
        var sonido;
        //var boton = $(this);

        switch(boton.attr('id')) {
            case 'red':
                sonido = new Audio('./sounds/red.mp3');
                break;
            case 'green':
                sonido = new Audio('./sounds/green.mp3');
                break;
            case 'blue':
                sonido = new Audio('./sounds/blue.mp3');
                break;
            case 'yellow':
                sonido = new Audio('./sounds/yellow.mp3');
                break;
            default:
                console.error('Botón no reconocido');
                return;
        }

        sonido.play();

        boton.addClass('pressed');
        setTimeout(function() {
            boton.removeClass('pressed');
        }, 100);
}

function turnoJugador(){

}