//SWITCH
//Se utiliza para realizar diferentes acciones basadas en diferentes condiciones
//Se deberá utilizar cuando if tenga más de 2 if else

	//La condición se evalua una única vez.
	//Si hay una coincidencia se ejecuta el bloque correspondiente

	//break se usa para salir de cada condición
	//default, para indicar que pasa si no se cumple ninguna condición

	var opcion="";//Recomendable que la opcion sea un String para evitar errores al introducir texto

	opcion=document.getElementById();

	switch(opcion){
		case "1":
			muestraNombresTablas();
			break;
		case "2":
			muestraCampos();
			break;
		case "3":
			consultarTabla();
			break;
		default:
			alert("Opcion no disponible; debes elegir entre una de estas opciones 1, 2, 3, 4, 5, 6, 7 u 8.");
	}//fin del swicht

