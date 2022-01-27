function piedrapapeltijera(option){
    
    var op1 = "piedra";
    var op2 = "papel";
    var op3 = "tijera";

    var player = playerJuega(option);
    var cpu = jugadaRandom();

    console.log("Tu jugaste "+ player);
    console.log("Cpu jugo "+ cpu);
    resultado(player,cpu);


    function playerJuega(num){
        switch(num){
            case 1:
                return op1;
                break;
            case 2:
                return op2;
                break;
            case 3:
                return op3;
                break;
            default:
                console.log("opcion no valida " + num + " se generara una jugada al azar");
                return jugadaRandom(); 
        }
    }
    function jugadaRandom(){
        let random = Math.floor(Math.random()* (3-1) +1);
        let jugada = playerJuega(random);
        return jugada;
    }
    function resultado(player, cpu){

        switch(player){
            case op1:
                switch(cpu){
                    case op1:
                        console.log("Empate, ambos jugadores sacaron " + player)
                        break;
                    case op2:
                        console.log("CPU GANA, " + cpu + " le gana a " +player);
                        break;
                    case op3: 
                        console.log("JUGADOR GANA, " + player + " le gana a " +cpu);
                        break;
                    default: 
                    console.log("JUGADOR: " + player + " & CPU: " + cpu);
                }
                break;

            case op2:
                switch(cpu){
                    case op1:
                        console.log("JUGADOR GANA, " + player + " le gana a " +cpu);
                        break;
                    case op2:
                        console.log("Empate, ambos jugadores sacaron " + player)
                        break;
                    case op3: 
                        console.log("CPU GANA, " + cpu + " le gana a " +player);
                        break;
                    default: 
                    console.log("JUGADOR: " + player + " & CPU: " + cpu);
                }
                break;

            case op3:
                switch(cpu){
                    case op1:
                        console.log("CPU GANA, " + cpu + " le gana a " +player);
                        break;
                    case op2:
                        console.log("JUGADOR GANA, " + player + " le gana a " +cpu);
                        break;
                    case op3: 
                        console.log("Empate, ambos jugadores sacaron " + player)
                        break;
                    default: 
                    console.log("JUGADOR: " + player + " & CPU: " + cpu);
                    break;
                }
                break;

            default:
                console.log("JUGADOR: " + player + " & CPU: " + cpu);
                break;
            }
    }
}
