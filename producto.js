const express = require("express");
const mysql=require(`mysql2`);
const app = express();
app.use(express.json());
const conexion=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"guerson18",
    database:"producto"
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa !!!");
    }
});

app.post(`/prod`,(req,res)=>{
    data={ id_producto:req.body.id_producto,
        id_tipo:req.body.id_tipo,
        descripcionl:req.body.descripcion,
        precio_compra:req.body.precio_compra,
        precio_venta:req.body.precio_venta,
        cantidad:req.body.cantidad,
        activo:req.body.activo,
    }
    let sql = "insert into tproducto set?";
    conexion.query(sql,data,(err,resul)=>{
        if(err){
         console.log(err.message);
         res.json({message:"Errorinesperado"});
        }else{
            res.json(resul);
        }

    });
});

app.get(`/prod`,(req,res)=>{
    let sql ="select id_producto,id_tipo,descripcionl,precio_compra,precio_venta,cantidad,activo from tproducto";
    conexion.query(sql,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({message:"Error inesperado"});
        }else{
            res.json(resul);
        }
    });
});

app.listen(3000, () =>{
    console.log("servidor en puerto 3000")
});