let mongoose = require('mongoose');
let pintores = require('../models/pintores');

let pintoresController = {};

/*LISTAR*/
pintoresController.list = (req, res)=>{
    pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error:',err);
            }
            //console.log('Datos obtenidos');
            //console.log(estatal);
            res.render('../views/index',{
                
                pintores: pintor,
                title: "Listado Pintores",
                year: new Date().getFullYear()
            });
        })
};

module.exports = pintoresController;