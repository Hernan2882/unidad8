var nombre = prompt('ingrese nombre de usuario')
			
     alert('bienvenido '+nombre+' a nuestro sitio')
 var correo= prompt('ingresa tu correo elctronico')
 var dispositivos_cocina= prompt('ingrese numero de dispositivos en la cocina:' )
 var dispositivos_comedor= prompt('ingrese numero de dispositivos en el comedor:') 
 var lenguaje = prompt('que lenguaje de programacion quieres aprender?')
var dispositivos_totales = parseInt(dispositivos_comedor)+ parseInt(dispositivos_cocina)



function mostrarcontenido(caja){
    var estructura= document.getElementById(caja)
    estructura.style.display='block'
}
function quitarcontenido(caja){

    var estructuraoculta = document.getElementById(caja)
    estructuraoculta.style.display='none'
}

function juego(){
    var letras = ['B','C','D','F','A','E','H','J','K','G','I','M','N','Ñ','O','P']   
    var numero= prompt('ingresa un numero entre 0 y 15')
    if(numero<0 || numero>15){
        alert("incorrecto: ingresar numero entre 0 y 15")
    }
    else{
       
        var letra_elegida = prompt('ingrese una letra = A,B,C,D,E,F,G,H,I,J,K,M,Ñ,N,O,P')
        if(letras[numero] == letra_elegida){
         
            alert("very good!! ganaste!!! ")
            
        }
        else{
            alert("perdiste , sigue participando!!")
    
        }
        
    }
    
}



