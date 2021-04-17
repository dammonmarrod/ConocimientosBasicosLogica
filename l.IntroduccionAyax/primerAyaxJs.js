window.onload = descargaArchivo;

function descargaArchivo() {
	// Obtener la instancia del objeto XMLHttpRequest
	peticion_http = new XMLHttpRequest();
		//obtendremos el objeto petiicion_http que es el que vamos a manejar

	// Preparar la funcion de respuesta
	peticion_http.onreadystatechange = muestraContenido;
		// onreadystatechange es un evento que se ejecuta cada vez que cambia el ESTADO de la petición
		//llamaremos a la función muestraContenido cada vea que se DISPARA el evento.
			//se dispará cada vez que cambia el valor de readyState

	// Realizar peticion HTTP
	peticion_http.open('GET', 'http://localhost/holamundo.txt', true);
		//El método open establece una tubería de comunicación Cliente-Servidor. NO HACE LA PETICIÓN
		//Se le pasan 3 parámetrog
			//
			// La url donde queremos buscar
				//protocolo http
				//el servidor (localhost o una pagina web)
				//el archivo a descargar(un txt, xml, jason...) 
			//true para que la petición sea asincrona
				//false en caso de que queramos una comunicación SINCRONA

	peticion_http.send(null);
		// este método es el que realiza la PETICION


		function muestraContenido() {
			if(peticion_http.readyState == 4) {
				//readyState == 4 significa que la conexión a través de la tubería ha sido correcta
					//4 es el valor estandar que indica que la comunicación es ok
				if(peticion_http.status == 200) {
					//status==200 significa que se ha recibido bien lo que se ha pedido
						//200 es el valor estandar que indica que la es correcto lo que te he envidao 
					alert(peticion_http.responseText);
						// responseText contiene la respuesta del servidor
						//Solo es correcto cuando se cumplen las dos condiciones readyState y status
				}
			}
		}
	}
