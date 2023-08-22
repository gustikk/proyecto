const express = require("express");
const app = express();
app.get(`/`,(req,res)=>{
    res.send("Hola Mundo ");
});
app.get(`/saludo/:nombre`,(req,res)=>{
    res.send(`buenos dias ${req.params.nombre}`)
});
app.listen(3000, () =>{
    console.log("servidor en puerto 3000")
});
