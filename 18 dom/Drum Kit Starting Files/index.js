let btn = document.querySelectorAll('.drum');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (event) => {
        reproducirSonido(btn[i].textContent);
        animarBoton(btn[i].textContent);
    })};


    document.addEventListener('keydown', function(event) {
        reproducirSonido(event.key);
        animarBoton(event.key);
    });
    

    function reproducirSonido(key){
        var nuevoAudio;
        switch(key){
            case 'w':
                nuevoAudio = new Audio('./sounds/tom-1.mp3');
                nuevoAudio.play();
                break;
            case 'a':
                nuevoAudio = new Audio('./sounds/tom-2.mp3');
                nuevoAudio.play();
                break;
            case 's':
                nuevoAudio = new Audio('./sounds/tom-3.mp3');
                nuevoAudio.play();
                break;
            case 'd':
                nuevoAudio = new Audio('./sounds/tom-4.mp3');
                nuevoAudio.play();
                break;
            case 'j':
                nuevoAudio = new Audio('./sounds/crash.mp3');
                nuevoAudio.play();
                break;
            case 'k':
                nuevoAudio = new Audio('./sounds/kick-bass.mp3');
                nuevoAudio.play();
                break;
            case 'l':
                nuevoAudio = new Audio('./sounds/snare.mp3');
                nuevoAudio.play();
                break;
        }
    }

    function animarBoton(key){

        let btn = document.querySelector("." + key);

        btn.classList.add('pressed');

        setTimeout(function(){
            btn.classList.remove('pressed');
        }, 100);
    }


