import Controller from './controller.js';
var controller = new Controller();

var bt1 = document.getElementById('btn-1');
console.log('Hellow', bt1);
bt1.addEventListener('click', () => {
    console.log('You have start Game');
    const j1 = document.querySelector('#jugador1').value;
    const j2 = document.querySelector('#jugador2').value; 

    controller.startGame(j1, j2);
});
