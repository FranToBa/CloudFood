const express = require('express')
const app = express()
const port = process.env.port || 5000
var router = express.Router();
const Menu = require('./menu')


var pedidos = []
var carta = new Menu();

app.use(function timeLog(req, res, next) {
  var fecha = new Date();
  console.log('Time: ', fecha, 'Method: ',req.method, 'URI: ', req.url, 'Status: ', res.statusCode );
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
app.put('/menu/:entrante/:plato/:postre', function(req, res) {
    var entrante = req.params.entrante
    var plato = req.params.plato
    var postre = req.params.postre
     try{
	  let menu = new Menu();
          menu.setPlatos(entrante, plato, postre)
	  pedidos.push(menu); 
          res.status(201).send( {'Menu añadido': menu.mostrarMenuSeleccionado(), 'ID': pedidos.indexOf(menu)  } );
      } catch (error){
            res.status(400).send( error.message )
      }
           
});

/* Permite consultar el menu seleccionado */
app.get('/menu/:id', function(req, res) {
    var id = req.params.id
    var menu = pedidos[id]
    if( menu){
    	res.send( {'Menu seleccionado': menu.mostrarMenuSeleccionado() } );
    }else{
	res.status(400).send( "El id no corresponde a ningún menú." )	
    }
});

/* Permite la modificacion de un menú */
app.post('/menu/:id', function(req, res) {

    var id = req.params.id
    var plato = req.body.plato
    var tipo = req.body.tipo  
    var menu = pedidos[id]
    if( menu && (tipo=='entrante' || tipo=='principal' || tipo=='postre')){
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
		    //Error 400: el plato indicado no es de ese tipo
		    res.status(400).send( error.message )
		}
 
    }else{
	res.status(404).send( "El id no corresponde a ningún menú o el tipo no es correcto" )	
    } 
} );

/* Permite la consulta del precio de todos los platos */
app.get('/carta/precios', function(req, res) {
	res.send( {'Entrantes': carta.consultarPrecioEntrantes(), 'Principales': carta.consultarPrecioPlatos(), 'Postres': carta.consultarPrecioPostres() }  );	

});
/* Permite la consulta del precio de los platos */
/* Puede indicar el tipo de los platos de los que quiere saber el precio*/
app.get('/carta/precios/:tipo', function(req, res) {
   var tipo = req.params.tipo
   if(tipo=='entrantes' || tipo=='principales' || tipo=='postres'){
	switch(tipo){
		case 'entrantes':
			res.send( {"Precio entrantes": carta.consultarPrecioEntrantes() } );
		break;
		case 'principales':
			res.send( {"Precio principales": carta.consultarPrecioPlatos() } );
		break;
		case 'postres':
			res.send( {"Precio postres": carta.consultarPrecioPostres() } );
		break;
	    }
    } else {
        res.status(400).send("Error en los argumentos.")
    }
});

/* Permite la consulta del precio de un plato especifico */
app.get('/carta/precios/plato/:plato', function(req, res) {
   var plato = req.params.plato
	try{
	    res.send( {"Precio": menu.consultarPrecioPlato(plato) } );       
        } catch (error){
            res.status(404).send( error.message )
        }
});


app.use(function(err, req, res, next){
   res.status(500).send(err.message);
  });


app.listen(port, function() {
  console.log('Escuchando el puerto ' + port);
});


module.exports = app
