$(document).ready(function () {
  let btnYellow = $("#yellow");
  let btnRed = $("#red");
  let btnGreen = $("#green");
  let btnBlue = $("#blue");

  let sequence = [];
  let iterador = 0;
  let estado;

  $(document).on("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
      estado = "turnoPc";
      jugando();
    }
  });

  function jugando() {
    setTimeout(() => {
      if (estado == "turnoPc") {
        iterador = 0;
        randomColor();
        for (let i = 0; i < sequence.length; i++) {
          setTimeout(() => {
            btnClickEffect(sequence[i]);
          }, i * 1000);
        }
        estado = "turnoJugador";
      }
    }, 1000);
  }

  btnGreen.click(function () {
    if (estado == "turnoJugador") {
      if (sequence[iterador] == "1") {
        btnClickEffect(1);
        iterador++;
      } else {
        gameOver();
      }
    }

    if (sequence.length == iterador && estado != "f" && sequence != 0) {
      estado = "turnoPc";
      jugando();
    }
  });

  btnRed.click(function () {
    if (estado == "turnoJugador") {
      if (sequence[iterador] == "2") {
        btnClickEffect(2);
        iterador++;
      } else {
        gameOver();
      }
    }

    if (sequence.length == iterador && estado != "f" && sequence != 0) {
      estado = "turnoPc";
      jugando();
    }
  });
  btnYellow.click(function () {
    if (estado == "turnoJugador") {
      if (sequence[iterador] == "3") {
        btnClickEffect(3);
        iterador++;
      } else {
        gameOver();
      }

      if (sequence.length == iterador && estado != "f" && sequence != 0) {
        estado = "turnoPc";
        jugando();
      }
    }
  });
  btnBlue.click(function () {
    if (estado == "turnoJugador") {
      if (sequence[iterador] == "4") {
        btnClickEffect(4);
        iterador++;
      } else {
        gameOver();
      }

      if (sequence.length == iterador && estado != "f" && sequence != 0) {
        estado = "turnoPc";
        jugando();
      }
    }
  });

  function gameOver() {
    console.log("F");
    sequence = [];
    estado = "f";

    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 100);
  }

  function randomColor() {
    /*
    crea un numero random del 1 al 4 y lo agrega a la secuencia (sequence)
    */
    let randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1:
        sequence.push(randomNumber);
        break;
      case 2:
        sequence.push(randomNumber);
        break;
      case 3:
        sequence.push(randomNumber);
        break;
      case 4:
        sequence.push(randomNumber);
        break;
    }

    console.log(sequence);
  }

  function btnClickEffect(n) {
    /* solo hace los efecto visuales y de sonido de los botones.
       hay que pasarle como argumento el numero del boton:
        1- verde
        2-rojo
        3-amarillo
        4-azul
    */
    let audio;
    switch (n) {
      case 1:
        audio = new Audio("./sounds/green.mp3");
        audio.play();
        btnGreen.addClass("pressed");
        setTimeout(() => {
          btnGreen.removeClass("pressed");
        }, 100);
        break;
      case 2:
        audio = new Audio("./sounds/red.mp3");
        audio.play();
        btnRed.addClass("pressed");
        setTimeout(() => {
          btnRed.removeClass("pressed");
        }, 100);
        break;
      case 3:
        audio = new Audio("./sounds/yellow.mp3");
        audio.play();
        btnYellow.addClass("pressed");
        setTimeout(() => {
          btnYellow.removeClass("pressed");
        }, 100);
        break;
      case 4:
        audio = new Audio("./sounds/blue.mp3");
        audio.play();
        btnBlue.addClass("pressed");
        setTimeout(() => {
          btnBlue.removeClass("pressed");
        }, 100);
        break;
    }
  }
});
