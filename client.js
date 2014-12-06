 /*
 Fichero que hará la función de cliente.
 Este fichero hará uso de la libreria http para hacer un get 
 a nuestra API y obtener a un usuario identificado por su id. 
 */
//cargamos la libreria http para hacer uso de la api 
var http=require('http');
// hacemos una peticion , en este caso hare uso de la funcion que me 
// devolvera la informacion de un usuario introducido con el id 1.
http.get('http://127.0.0.1:1234/usuarios/1', function(res){
	// cargamos todo el body 
	var body = '';
   res.on('data', function (chunk) {
         body += chunk;
         });
   // y mostramos la informacion obtenida.
   res.on('end', function () {
   console.log(body);
   });

  });