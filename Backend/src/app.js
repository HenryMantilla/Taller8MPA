const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev')) 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/MVC/Usuarios",require('./routes/user.routes'))
app.use("/MVC/Documentos",require('./routes/documento.routes'))
app.use("/MVC/Residencia",require('./routes/residencia.routes'))

module.exports = app;

const sequelize = require('./database')
const documentoTabla = require('./models/documento_models')
const residenciaTabla = require('./models/residencia_models')
const usuarioTabla = require('./models/usuario_models') 
sequelize.sync({alter: true})