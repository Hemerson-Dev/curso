require("dotenv").config({ path: "./.env" }) //CORRIGIR CASO A PORTA SEJA UNDEFINED
const express = require("express")
const app     = express()
const cors    = require('cors');
const dao     = require("./dao");
const porta   = process.env.PORTA

app.get("/",(req,res)=>res.send({"mensagem":"Ola Turma"}))  //CRIANDO UMA ROTA GET NO RAIZ


app.get("/produtos", async(req,res)=>{const produtos = await dao.listarProdutos(); return res.json(produtos);})
//router.get('/sensores',auth, async (req,res) => {const sensores = await dao.listarSensores();return res.json(sensores);});
app.listen(porta,(req,res)=>console.log(`Servidor Iniciado na porta: ${porta}`))