function piedrapapeltijera(option){
    
    var op1 = "piedra";
    var op2 = "papel";
    var op3 = "tijera";

    var player = playerJuega(option);
    var cpu = jugadaRandom();

    console.log("Tu jugaste "+ player);
    console.log("Cup jugo "+ cpu);
    resultado(player,cpu);


    function playerJuega(num){
        if(num == 1){
            return op1;
        }
        else if(num == 2){
            return op2;
        }
        else if(num == 3){
            return op3;
        }
        else{
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
        if(player == cpu){
            console.log("Empate, ambos jugadores sacaron " + player)
        }
        else if(player == op1 && cpu == op2 ){
            console.log("CPU GANA, " + cpu + " le gana a " +player);
        }
        else if(player == op1 && cpu == op3 ){
            console.log("JUGADOR GANA, " + player + " le gana a " +cpu);
        }
        else if(player == op2 && cpu == op3 ){
            console.log("CPU GANA, " + cpu + " le gana a " +player);
        }
        else if(player == op2 && cpu == op1 ){
            console.log("JUGADOR GANA, " + player + " le gana a " +cpu);
        }
        else if(player == op3 && cpu == op1 ){
            console.log("CPU GANA, " + cpu + " le gana a " +player);
        }
        else if(player == op3 && cpu == op2 ){
            console.log("JUGADOR GANA, " + player + " le gana a " +cpu);
        }
        else{
            console.log("JUGADOR: " + player + " & CPU: " + cpu);
        }
    }
}
