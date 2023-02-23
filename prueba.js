let opcionesProvincias = parseInt(prompt("Cual de las provincias quiere que sea su destino? Seleccione según número de la provincia elegida: \n 1: Mendoza \n 2: Buenos Aires \n 3: Cordoba \n 4: Santa Cruz"))
switch (opcionesProvincias){
    case 1:
        alert("Lo esperamos con ansias en Mendoza! ")
    break;    
    case 2:
        alert("Lo esperamos con ansias Buenos Aires! ")
    break;  
    case 3:
        alert("Lo esperamos con ansias Cordoba! ")
    break; 
    case 4:
        alert("Lo esperamos con ansias Santa Cruz! ")
    break;
    default:
        alert("Ha ingresado un numero erroneo al lugar del destino correspondiente \nPor favor prestar atencion a las opciones.")
        let releccion = prompt("Quiere volver elegir su lugar de destino?\n 1 - Si \n 2 - No")
        if(releccion == 1){
            let opcionesProvincias = parseInt(prompt("Cual de las provincias desea viajar? Seleccione atentamente en las siguientes opciones: \n 1: Mendoza \n 2: Buenos Aires \n 3: Cordoba \n 4: Santa Cruz \n 5) Ninguno,desisto."))
            switch(opcionesProvincias){
                case 1:
                    alert("Lo esperamos con ansias en Mendoza! ")
                break;    
                case 2:
                    alert("Lo esperamos con ansias Buenos Aires! ")
                break;   
                case 3:
                    alert("Lo esperamos con ansias Cordoba! ")
                break ;
                case 4:
                    alert("Lo esperamos con ansias Santa Cruz! ")
                break;
                case 5:
                    alert("Lamentamos que ningun destino le haya interesado! hasta la proxima!")
                break;
                default:
                    alert("La opcion no corresponde a ninguna de las expuesta \n Lo esperamos nuevamente, hasta luego!")
                break;

            }       
        }else{
            alert("Lamentamos que ningun destino le haya interesado! hasta la proxima!")
            break;

        }
        

}

provincias()