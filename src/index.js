const express = require('express')
const app = express()
var body_parser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
let Menu = require('./models/bdmenus')
let Plato = require('./models/bdplatos')

const port = process.env.PORT || 8080;
app.listen(port)


app.use(body_parser.text());
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json({ type: 'application/json'}));


const url = process.env.CONNECTION
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
var conn = mongoose.connection;


app.use(function timeLog(req, res, next) {
  var fecha = new Date();
  console.log('Time: ', fecha, 'Method: ',req.method, 'URI: ', req.url, 'Status: ', res.statusCode );
  next();
});

app.get('/', function(req,res){
  res.status(200).json({status:"OK"});
})

app.get('/status', function(req,res){
  res.status(200).json({status:"OK"});
})

/* Permite la consultar los pedidos realizados.*/
app.get('/carta', async function(req, res) {
	let carta = await Plato.find({})
	res.status(200).json(carta)


});

app.get('/carta/entrantes',async function(req, res) {
	let entrantes = await Plato.find({Tipo: "Entrante"});
	res.status(200).json(entrantes)
});

app.get('/carta/principales', async function(req, res) {
	let principales = await Plato.find({Tipo: "Principal"});
	res.status(200).json(principales)
});

app.get('/carta/postres', async function(req, res) {
	let postres = await Plato.find({Tipo: "Postre"});
	res.status(200).json(postres)
});


/* Permite la creacion de un menu */
app.post('/menu', async function(req, res) {
	try{
		const menu = new Menu({
			Entrante: req.body.entrante,
			Principal: req.body.principal,
			Postre: req.body.postre
		  })
		try{
		    const addMenu = await menu.save()
		    //res.set('Location',`/menu/${addMenu._id}`)
		    res.status(201).json(addMenu)
		}catch(err){
		    res.status(500).json(err)
		}
	}catch(err){
		res.status(400).json(err)
	}
});



/* Permite consultar el menu seleccionado */
app.get('/menu/:id', async function(req, res) {
  let id = req.params.id
  try{
  	let menu = await Menu.findById(id)
	res.status(200).json(menu)
}
  catch(error){
      res.status(500).send(error)
    }

});

/* Permite la modificacion de un menú */
app.post('/menu/:id', function(req, res) {
    var id = req.params.id
    var plato = req.body.plato
    var tipo = req.body.tipo
    if(tipo=='entrante' || tipo=='principal' || tipo=='postre'){
		switch(tipo){
			case 'entrante':
				try{
				     let menu = Menu.findByIdAndUpdate({id},{Entrante: plato})
				      res.status(200).json(menu)
				}catch(err){
				      res.status(500).send(err)
				 }

			break;
			case 'principal':
				try{
				     let menu = Menu.findByIdAndUpdate({id},{Principal: plato})
				      res.status(200).json(menu)
				}catch(err){
				      res.status(500).send(err)
				 }
			break;
			case 'postre':
				try{
				     let menu = Menu.findByIdAndUpdate({id},{Postre: plato})
				      res.status(200).json(menu)
				}catch(err){
				      res.status(500).send(err)
				 }
			break;
		}
    }else{
	res.status(404).send( "El tipo no es correcto" )
    }
} );

/* Permite borrar el menú seleccionado, reemplazando su posición para no cambiar los ids */
app.delete('/menu/:id', function(req, res) {
    let id = req.params.id
    try{
    	let menu = Menu.findByIdAndRemove(id)
    	res.status(200).json({Borrado: id})
     }catch(err){
	res.status(500).send(err)
     }
});



/* Permite la consulta del precio de todos los platos */
app.get('/carta/precios',async function(req, res) {
	let carta = await Plato.find({})
	res.status(200).json(carta)
});

/* Permite la consulta del precio de los platos */
/* Puede indicar el tipo de los platos de los que quiere saber el precio*/
app.get('/carta/precios/:tipo', async function(req, res) {
   let tipo = req.params.tipo
   if(tipo=='entrantes' || tipo=='principales' || tipo=='postres'){
	switch(tipo){
		case 'entrantes':
			let entrantes = await Plato.find({Tipo: "Entrante"});
			res.status(200).json(entrantes)
		break;
		case 'principales':
			let principales = await Plato.find({Tipo: "Principal"});
			res.status(200).json(principales)
		break;
		case 'postres':
			let postres = await Plato.find({Tipo: "Postre"});
			res.status(200).json(postres)
		break;
	    }
    } else {
        res.status(400).send("Error en los argumentos. Tipo no encontrado")
    }
});

/* Permite la consulta del precio de un plato especifico */
app.get('/carta/precios/plato/:plato', async function(req, res) {
       var plato = req.params.plato
	try{
		let plat = await Plato.find({Plato: plato});
		res.status(200).json(plat)
        } catch (error){
            res.status(400).send( error.message )
        }
});


app.use(function(err, req, res, next){
   res.status(500).send(err.message);
  });


module.exports = app
