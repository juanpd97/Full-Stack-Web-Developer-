const player1 = document.getElementsByClassName("img1")[0];
const player2 = document.getElementsByClassName("img2")[0];
const titulo = document.getElementsByTagName("h1")[0];

var numero1 = Math.floor(Math.random() * 6) + 1;
var numero2 = Math.floor(Math.random() * 6) + 1;

if(numero1>numero2){
    titulo.textContent = "j1 win";
} else if (numero1<numero2){
    titulo.textContent = "j2 win";
} else {
    titulo.textContent = "draw!";
}

cambiarDado(player1,numero1);
cambiarDado(player2,numero2);


function cambiarDado(jugador,nDado){

    switch(nDado){
        case 1:
            jugador.src = "./images/dice1.png";
            break;
        case 2:
            jugador.src = "./images/dice2.png";
            break;
        case 3:
            jugador.src = "./images/dice3.png";
            break;
        case 4:
            jugador.src = "./images/dice4.png";
            break;
        case 5:
            jugador.src = "./images/dice5.png";
            break;
        case 6:
            jugador.src = "./images/dice6.png";
            break;
    }

}