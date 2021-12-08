const express=require("express");
const app=express();
const index_pelicula=require("./router/rutas_peliculas");
const connection=require("./config/conexion");

// ruteo de apis
app.use('/',index_pelicula);


app.get ("/suma", (req,res)=>{
    var datos=req.query;
    var suma=Number(datos.n1)+Number(datos.n2);
    
    res.json({mensaje:"La respuesta es "+suma});
});
app.get ("/resta", (req,res)=>{
    var datos=req.query;
    var resta=Number(datos.n1)-Number(datos.n2);
    
    res.json({mensaje:"La respuesta es "+resta});
});
app.get ("/multiplicacion", (req,res)=>{
    var datos=req.query;
    var multiplicacion=Number(datos.n1)*Number(datos.n2);
    
    res.json({mensaje:"La respuesta es "+multiplicacion});
});

app.listen(3000,()=>{
    console.log("servidor iniciado")
});
