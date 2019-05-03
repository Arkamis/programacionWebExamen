class Jugadores {
    constructor(name = 'jose'){
        this.name = name;
        this.position = 0;
    }

    changeName(name){
        return this.name = name;
    }
}

export default Jugadores;

