const express = require('express')
const app = express()
const port = process.env.port || 5000
var router = express.Router();
const Menu = require('./menu')


var pedidos = []
var carta = new Menu();

app.use(function timeLog(req, res, next) {
  var fecha = new Date();
  console.log('Time: ', fecha, 'Method: ',res.statusCode, 'URI: ', req.url, 'Status: ', res.statusCode );
  next();
});


// Devuelve un mensaje de bienvenida
app.get('/', function(req, res) {
  res.send( JSON.stringify("Bienvenido a la paǵina de inicio de CloudFood") )
});

/* Permite la consulta de todos los platos o de platos según su tipo.*/
app.get('/carta', function(req, res) {
	res.send({'Entrantes': carta.mostrarEntrantes(), 'Principales': carta.mostrarPlatos(), 'Postres': carta.mostrarPostres()});
	
});

app.get('/carta/entrantes', function(req, res) {
	res.send({'Entrantes': carta.mostrarEntrantes() } );
});

app.get('/carta/principales', function(req, res) {
    res.send({'Principales': carta.mostrarPlatos() } );
});

app.get('/carta/postres', function(req, res) {
    res.send({'Postres': carta.mostrarPostres() } );
});

/* Permite la creacion de un menu */
app.post('/menu/:entrante?/:plato?/:postre?', function(req, res) {
    var entrante = req.params.entrante
    var plato = req.params.plato
    var postre = req.params.postre

    //Vemos si estan vacios
    if( entrante && plato && postre ){
        try{
            menu.setPlatos(entrante, plato, postre)
            res.send( {'Menu añadido': menu.mostrarMenuSeleccionado() } );
        } catch (error){
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Error en los argumentos.")
    }   
});

/* Permite consultar el menu seleccionado */
app.get('/menu', function(req, res) {
    res.send( {'Menu seleccionado': menu.mostrarMenuSeleccionado() } );
});

/* Permite la modificacion de un menú */
app.put('/menu/modificar/:tipo/:plato', function(req, res) {
    var tipo = req.params.tipo
    var plato = req.params.plato

    //Vemos si estan vacios
    if( tipo && plato && (tipo=='entrante' || tipo=='principal' || tipo=='postre') ){
        try{
	    switch(tipo){
		case 'entrante':
			menu.modificarEntrante(plato)
		break;
		case 'principal':
			menu.modificarEntrante(plato)
		break;
		case 'postre':
			menu.modificarEntrante(plato)
		break;
	    }
            res.send( {"Plato modificado": plato } );
        } catch (error){
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Error en los argumentos.")
    }   
} );

/* Permite la consulta del precio de todos los platos */
app.get('/preciosCarta', function(req, res) {
	res.send( {'Entrantes': menu.consultarPrecioEntrantes(), 'Principales': menu.consultarPrecioPlatos(), 'Postres': menu.consultarPrecioPostres() }  );	

});
/* Permite la consulta del precio de los platos */
/* Puede indicar el tipo de los platos de los que quiere saber el precio*/
app.get('/preciosCarta/:tipo', function(req, res) {
   var tipo = req.params.tipo
   if( tipo && (tipo=='entrantes' || tipo=='principales' || tipo=='postres') ){
	try{
	    switch(tipo){
		case 'entrantes':
			res.send( {"Precio entrantes": menu.consultarPrecioEntrantes() } );
		break;
		case 'principales':
			res.send( {"Precio principales": menu.consultarPrecioPlatos() } );
		break;
		case 'postres':
			res.send( {"Precio postres": menu.consultarPrecioPostres() } );
		break;
		default:
			res.status(409).send( error.message )
		break;
	    }
            
        } catch (error){
            res.status(409).send( error.message )
        }
    } else {
        res.status(400).send("Error en los argumentos.")
    }
});

/* Permite la consulta del precio de un plato especifico */
app.get('/preciosPlato/:plato?', function(req, res) {
   var plato = req.params.plato
   if( plato ){
	try{
	    res.send( {"Precio": menu.consultarPrecioPlato(plato) } );       
        } catch (error){
            res.status(409).send( error.message )
        }
    } else {
        res.status(400).send("Error en los argumentos.")
    }
});


app.listen(port, function() {
  console.log('Escuchando el puerto ' + port);
});


module.exports = app
