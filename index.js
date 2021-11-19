const express = require('express');
const morgan = require('morgan');
const mongoose = require('./connection');
const app = express();

//configuracion

app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(express.json())

//LISTA RUTAS BASE

app.use('/api/compras', require('./routes/compras-routes'));

//Arranque
app.listen(app.get('port'), ()=> {
	console.log(process.env.npm_package_name + " iniciado en puerto "+ app.get('port'))
});

