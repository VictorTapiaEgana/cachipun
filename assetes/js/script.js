function Jugar (){

    var arrayJugadas = ["Piedra","Papel","Tijera"]
    
    var NUdeJugadas = ( document.getElementById('numeroJugadas').value);
    var OPdeJugadas = ( document.getElementById('opciones').value);    
   
    var Titulo=''
    var mensaje = "<h2>Resultado del juego 🎲</h2>"    
    
    for ( var x = 1; x<= NUdeJugadas; x++){
        
        var JuCPU = arrayJugadas[Math.floor(Math.random() * arrayJugadas.length)]

        if (OPdeJugadas === JuCPU) {       
            mensaje += (`<p class="empate"> <strong>Jugada ${x} </strong> <br> Jugador:${OPdeJugadas} - CPU:${JuCPU} - <span>EMPATADA</span> </p>`)
        } else if (
            (OPdeJugadas === "Tijera" && JuCPU === "Papel") ||
            (OPdeJugadas === "Papel" && JuCPU === "Piedra") ||
            (OPdeJugadas === "Piedra" && JuCPU === "Tijera")
        ) {            
            mensaje += (`<p class="azul"> <strong>Jugada ${x} </strong><br> Jugador:${OPdeJugadas} - CPU:${JuCPU} - <span>GANADA 🎉</span></p>`)

        } else {           
            mensaje += (`<p class="rojo"> <strong>Jugada ${x} </strong> <br> Jugador:${OPdeJugadas} - CPU:${JuCPU} - <span>PERDIDA 😥</span></p>`)
        }
    }

    // document.write (Titulo + mensaje)

    document.getElementById('resultado').innerHTML= Titulo + mensaje;
}
