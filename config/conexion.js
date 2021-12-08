var mongoose=require ('mongoose');
var conexion=mongoose.connect("mongodb+srv://Nelson:dpKElIWWLwxmszsV@cluster0.sqiuq.mongodb.net/sistema?retryWrites=true&w=majority");
mongoose.connection.on('open',(ref)=>{
    console.log("conectado a monguito")
})
module.exports=mongoose.connections;