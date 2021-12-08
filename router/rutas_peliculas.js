const express=require('express'),
    router=express.Router(),
    pelicula=require('../controllers/controllerpelicula');

router.use('peliculas',pelicula);
module.exports=router;