var KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,

    canvas = null,
    ctx = null,
    lastPress = null,
    pause = true,
    x = 50,
    y = 50,
    dir = 0;

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());

document.addEventListener('keydown', function (evt) {
    lastPress = evt.which;
}, false);

function paint(ctx) {

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 30, 30);


    ctx.fillStyle = 'red';

    if (pause) {
        ctx.textAlign = 'center';
        ctx.fillText('PAUSA', 150, 75);
        ctx.textAlign = 'left';

    }
}

function act() {
    if (!pause) {

        if (lastPress == KEY_UP) {
            dir = 0;
        }
        if (lastPress == KEY_RIGHT) {
            dir = 1;
        }
        if (lastPress == KEY_DOWN) {
            dir = 2;
        }
        if (lastPress == KEY_LEFT) {
            dir = 3;
        }


        if (dir == 0) {
            y -= 10;
        }
        if (dir == 1) {
            x += 10;
        }
        if (dir == 2) {
            y += 10;
        }
        if (dir == 3) {
            x -= 10;
        }


        if (x > canvas.width) {
            x = 0;
        }
        if (y > canvas.height) {
            y = 0;
        }
        if (x < 0) {
            x = canvas.width;
        }
        if (y < 0) {
            y = canvas.height;
        }
    }


    if (lastPress == KEY_ENTER) {
        pause = !pause;
        lastPress = null;
    }
}

function repaint() {
    window.requestAnimationFrame(repaint);
    paint(ctx);
}

function run() {
    setTimeout(run, 100);
    act();
}

function init() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');


    run();
    repaint();
}

window.addEventListener('load', init, false);
