import Jugadores from './jugadores.js';

class Controller{
    constructor(){
        this.board = Array(101).fill(1).map((x,i) => x = i );
        this.players = [];
    }

    startGame(player1, player2){
        if(!this.players.length > 0){
            this.addPlayers(player1);
            this.addPlayers(player2);
        }
        while(this.players[0].position < 100 && this.players[1].position < 100){
            let pasos = this.rollDado();
            this.players[0].position += pasos;
            console.log(`Jugador: ${this.players[0].name} esta en la position: ${this.players[0].position}`)
            this.players.push(this.players.shift());
        }

        if(this.players[0] > 100 && this.players[1] < 100){
            alert(`Jugador:${this.players[0].name} es el ganador!`);
        }
        else if(this.players[1] > 100 && this.players[0] < 100){
            alert(`Jugador:${this.players[1].name} es el ganador!`);
        }

    }
    addPlayers(playerName){
        let player = new Jugadores(playerName);
        this.players.push(player);
        return this.players;
    }
    rollDado(){
        let rollDado = Math.floor(Math.random() * 5) + 1;
        let pasos = null;

        console.log(`\nEl dado roto y callo el valor de: ${rollDado}`);
        switch(rollDado){
            case 1:
                pasos = 1;
            break;
            case 2:
                pasos = 2;
            break;
            case 3:
                pasos = 2;
            break;
            case 4:
                pasos = -1;
            break;
            case 5:
                pasos = 3;
            break;
            default:
                console.log(`Dado fallo cayo: ${rollDado} ERROR`);
                this.rollDado();
            break;
        }

        return pasos;
    }
}

export default Controller;