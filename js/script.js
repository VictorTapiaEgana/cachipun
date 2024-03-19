function Jugar (){

    var arrayJugadas = ["Piedra","Papel","Tijera"]
    
    var NUdeJugadas = ( document.getElementById('numeroJugadas').value);
    var OPdeJugadas = ( document.getElementById('opciones').value);    
   
    var Titulo=''
    var mensaje = "<h2>Resultado del juego 🎲</h2>"    
    
    for ( var x = 1; x<= NUdeJugadas; x++){
        
        var JuCPU = arrayJugadas[Math.floor(Math.random() * arrayJugadas.length)]

        if (OPdeJugadas === JuCPU) {       
            mensaje += (`<strong>Jugada ${x} </strong> <br> Jugador:${OPdeJugadas} - CPU:${JuCPU} - EMPATADA <br>`)
        } else if (
            (OPdeJugadas === "Tijera" && JuCPU === "Papel") ||
            (OPdeJugadas === "Papel" && JuCPU === "Piedra") ||
            (OPdeJugadas === "Piedra" && JuCPU === "Tijera")
        ) {            
            mensaje += (`<strong>Jugada ${x} </strong><br> Jugador:${OPdeJugadas} - CPU:${JuCPU} - GANADA 🎉 <br>`)

        } else {           
            mensaje += (`<strong>Jugada ${x} </strong> <br> Jugador:${OPdeJugadas} - CPU:${JuCPU} - PERDIDA 😥<br>`)
        }
    }

    document.write (Titulo + mensaje)
}
