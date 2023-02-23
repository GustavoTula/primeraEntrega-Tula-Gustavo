
alert("Bienvenidos al sistema de viaje CAMBA! \n Puede elegir su destino favorito dentro de la Argentina teniendo en cuenta sus gustos!")

function usuarioViajante(){

    let nombre = prompt("Ingrese su nombre")
    let edad = prompt("Ingrese su edad")
    let dni = prompt("Ingrese su dni")

    let datosUsuarioViajante =("Nombre ingresado: " + nombre + "\n" + "Edad: " + edad + "\n" + "Dni: " + dni)
    alert(datosUsuarioViajante)
    let editarDatos = prompt("Esta conforme con los datos dados?: 1-Si , 2-No")
    while (editarDatos){
        if(editarDatos == 1){
            alert("Sigamos con su eleccion de provincias que desea recorrer")
                break;
        }else{
            alert("Volvamos a editar los datos ingresados ")
            let nombre = prompt("Ingrese su nombre")
            let edad = prompt("Ingrese su edad")
            let dni = prompt("Ingrese su dni")
            let datosUsuarioViajante =("Nombre ingresado: " + nombre + "\n" + "Edad: " + edad + "\n" + "Dni: " + dni)
            alert(datosUsuarioViajante)
            let editarDatos = prompt("Esta conforme con los datos dados?: 1-Si , 2-No")
            if (editarDatos == 1) {
                alert("Perfecto, prosigamos en la eleccion de provincias que desea recorrer")
                break;
            }else{
                alert("debido a modificaciones de datos recientes, debera ingresar a la pagina luego de 5(cinco) minuos \n para poder seguir recorriendo nuestras opciones turisticas \Gracias por viajar con nosotros!");
                break;
            }
           
        }
    }
}
function provincias(){
    let mendoza = alert("Mendoza: Rodeado de montañas y viñedos por un costo de: $40.000")
    let buenosAires = alert("Buenos Aires: Llanura, praderas, humedales, lagunas, ríos, mar y sierras conforman la diversa geografía de la provincia más poblada del país; costo: $50.000")
    let cordoba = alert("Cordoba: Pese a su latitud, el clima de la ciudad de Córdoba, como el de la mayor parte de la provincia, es templado moderado con las cuatro estaciones bien definidas; costo = $35.000")
    let santaCruz = alert("Santa Cruz: la región andina se caracteriza por la presencia de la sección de la cordillera de los Andes denominada Andes Patagónicos, costo = $70.000") 
    let repasarOpciones = prompt("Desea repasar los lugares turisticos una vez mas?\n 1 - Si  \n 2 - No")
    while(repasarOpciones){
        if(repasarOpciones == 1){
            alert("Perfecto!, repasemos")
            let mendoza = alert("Mendoza: Rodeado de montañas y viñedos por un costo de: $40.000")
            let buenosAires = alert("Buenos Aires: Llanura, praderas, humedales, lagunas, ríos, mar y sierras conforman la diversa geografía de la provincia más poblada del país; costo: $50.000")
            let cordoba = alert("Cordoba: Pese a su latitud, el clima de la ciudad de Córdoba, como el de la mayor parte de la provincia, es templado moderado con las cuatro estaciones bien definidas; costo = $35.000")
            let santaCruz = alert("Santa Cruz: la región andina se caracteriza por la presencia de la sección de la cordillera de los Andes denominada Andes Patagónicos, costo = $70.000") 
            let repasarOpciones = prompt("Quiere continuar?: \n 1 - Si  \n 2 - No")
            while(repasarOpciones){
                if(repasarOpciones == 1){
                    alert("Perfecto, continuemos!")
                    break;
                }else{
                    alert("Lamentamos su decision; hasta PRONTO!")
                    break;
                }
            }
        }else{
            alert("Grandioso! prosigamos")
            break;
        }
    }

    let opcionesProvincias = parseInt(prompt("Cual de las provincias quiere que sea su destino? Seleccione según número de la provincia elegida: \n 1: Mendoza \n 2: Buenos Aires \n 3: Cordoba \n 4: Santa Cruz"))
    switch (opcionesProvincias){
        case 1:
            alert("Lo esperamos con ansias en Mendoza! por un total de: $40.000 ")
        break;    
        case 2:
            alert("Lo esperamos con ansias Buenos Aires! por un total de: $50.000")
        break;  
        case 3:
            alert("Lo esperamos con ansias Cordoba! por un total de: $35.000")
        break; 
        case 4:
            alert("Lo esperamos con ansias Santa Cruz! por un total de: $70.000 ")
        break;
        default:
            alert("Ha ingresado un numero erroneo al lugar del destino correspondiente \nPor favor prestar atencion a las opciones.")
            let releccion = prompt("Quiere volver elegir su lugar de destino?\n 1 - Si \n 2 - No")
            if(releccion == 1){
                let opcionesProvincias = parseInt(prompt("Cual de las provincias desea viajar? Seleccione atentamente en las siguientes opciones: \n 1: Mendoza \n 2: Buenos Aires \n 3: Cordoba \n 4: Santa Cruz \n 5) Ninguno,desisto."))
                switch(opcionesProvincias){
                    case 1:
                        alert("Lo esperamos con ansias en Mendoza! por un total de: $40.000")
                    break;    
                    case 2:
                        alert("Lo esperamos con ansias Buenos Aires! por un total de: $50.000")
                    break;   
                    case 3:
                        alert("Lo esperamos con ansias Cordoba! por un total de: $35.000")
                    break ;
                    case 4:
                        alert("Lo esperamos con ansias Santa Cruz! por un total de: $70.000 ")
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
        break;    
    }  
}      


usuarioViajante()
provincias()
