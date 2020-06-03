
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Definimos el puerto
const PUERTO = process.env.PORT || 3000;

/*LAS RUTAS*/
let pintoresRouter = require('./routes/pintor');
/*************************
*  Sitio estatico  y HBS *
**************************/
const app = express();
//Establesco hbs como mi view
app.set('view engine','hbs');
//establecemos los partiales
hbs.registerPartials(__dirname + '/views/partials');
//sitio estatico
app.use(express.static(__dirname+'/public'));
app.use('/',pintoresRouter);

/*************************
 *  MONGODB x_x
 *************************/
mongoose.Promise = global.Promise;

const cadena ='mongodb+srv://pintores:pintores1@cluster0-o9f48.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión con Mongo exitosa');
    })
    .catch(err=> console.log(err));

/***********************************
* Arrancamos el servidor web
***********************************/
app.listen(PUERTO,()=>{
    console.log('Escuchando el puerto 3000');
});
