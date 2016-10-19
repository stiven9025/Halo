// JavaScript source code
window.addEventListener("load", init, false)
var canvas = null; dibujo = null;
var pausa = true;
var x = 50; var y = 50;
var tecla = 0;
var direccion = null;

function init() {
    canvas = document.getElementById("canvas");
    canvas.style.background = "red";
    dibujo = canvas.getContext("2d");
    run();
}
function run(){
    setTimeout(run,50);
    game();
    paint(dibujo);
}
function game() {
    if (!pause) {
        if (tecla == 37) {
            direccion = 0;
        }
        if (tecla == 38) {
            direccion = 1;
        }
        if (tecla == 39) {
            direccion = 2;
        }
        if (tecla = 40) {
            direccion = 3;
        }
        if (direccion == 0) {
           x-= 10;
        }
        if (direccion == 1) {
            y-= 10;
        }
        if (direccion = 2) {
            x+=10;
        }
        if( direccion=3){
            y += 10;
        }
        if (x > canvas.widht) {
            x=0
        }
        if (x < 0) {
            x = canvas.widht;
        }
        if (y > canvas.height) {
            y = 0;
        }
        if (y < 0) {
            y = canvas.height;
        }
    }
    if (tecla == 13) {
        pausa = !pause;
        tecla = null;
    }
}

function paint() {
    dibujo.clearRect(0, 0, canvas.widht, canvas.height)
    dibujo.fillStyle = "green"
    dibujo.fillRect(x,y,10,10)
}

document.addEventListener("keydown", function (evento) { tecla = evento.keyCode; }, false)







