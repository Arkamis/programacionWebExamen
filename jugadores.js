class Jugadores {
    constructor(name = 'jose'){
        this.name = name;
        this.position = 0;
    }

}
class Dado{
    constructor(){
        this.caras = [1,2,3,4,5];
        this.value = '';
    }

    rotarDado(){
        let stopX = this.caras[0];
        let stopY = this.caras[4];
        this.value = Math.random()
        
    }
}

exports = {Jugadores, Dado};