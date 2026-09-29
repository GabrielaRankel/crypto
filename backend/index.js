const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'
const conn = require('./db/conn')

//relacionamentos para poder trabalharos relacionamentos (listagem ordenada)
// require('./models/rel')

const ciclistaController = require('./controller/ciclista.controller')
const authController = require('./controller/auth.controller')

//--------------- Middleware --------
app.use(express.urlencoded({extented: true}))
app.use(express.json())
app.use(cors())

// -------------- ROTAS PUBLICAS ----------
app.post('/ciclista',ciclistaController.cadastrar)
app.post('/login',authController.login)


app.get('/',(req,res)=>{
    res.status(200).json({message: 'Aplicação rodando'})
})

// -------------- ROTAS PRIVADAS ----------


// ----------- Sincronizando o servidor com o bd
conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname,PORT}`)
    })
})
.catch((err)=>{
    console.log('Erro ao conectar com o banco de dados!', err)
})