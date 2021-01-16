const express = require('express')
const app = express()
var body_parser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' })
let Menu = require('./models/MenuSchema')

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(function timeLog(req, res, next) {
  var fecha = new Date();
  console.log('Time: ', fecha, 'Method: ',req.method, 'URI: ', req.url, 'Status: ', res.statusCode );
  next();
});


app.get('/status', function(req,res){
  res.status(200).json({status:"OK"});
})

/* Permite la consulta de todos los platos o de platos según su tipo.*/
app.get('/carta', function(req, res) {
	let carta = Menu.find()
	res.status(200).json(carta)
	
});

app.get('/carta/entrantes', function(req, res) {
	let entrantes = Menu.find({Entrante})
	res.status(200).json(entrantes)
	
});

app.get('/carta/principales', function(req, res) {
	let principales = Menu.find({Principal})
	res.status(200).jsonprincipales)
});

app.get('/carta/postres', function(req, res) {
	let postres = Menu.find({Postre})
	res.status(200).json(entrantes)
});

/* Permite la creacion de un menu */
app.post('/menu', function(req, res) {
	 const menu = new Menu({
	    Entrante: req.body.entrante,
	    Principal: req.body.principal,
	    Postre: req.body.postre
	  })
	  try{
	    const addmenu = await menu.save()
	    res.set('Location',`/item/${addMenu.type}`)
	    res.status(201).json(addmenu)
	  }catch(err){
	    res.status(400)
	  }
}
          
});

/* Permite consultar el menu seleccionado */
app.get('/menu/:id', function(req, res) {
    var id = req.params.id
    var menu = pedidos[id]
    if( menu && menu != "Borrado" ){
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

/* Permite borrar el menú seleccionado, reemplazando su posición para no cambiar los ids */
app.delete('/menu/:id', function(req, res) {
    var id = req.params.id
    var menu = pedidos[id]
    if( menu){
        pedidos.splice(id, 1, "Borrado")
    	res.send( {'Menu borrado': id } );
    }else{
	res.status(400).send( "El id no corresponde a ningún menú." )	
    }
});




app.use(function(err, req, res, next){
   res.status(500).send(err.message);
  });


module.exports = app
