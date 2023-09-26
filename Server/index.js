const express = require('express');
const conectarBD = require('./config/db')
const  cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')





const app = express();
const PORT = 4000;

conectarBD();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/productos',require('./routes/productosRoutes'));
app.use('/api/productos-cart',require('./routes/carritoRoutes'))

app.use('/api/usuarios',require('./routes/usuarioRoutes'))

app.use('/api/compra',require('./routes/compraRoutes'))

app.use('/uploads', express.static('uploads'));


app.listen(PORT,()=>{
    console.log("Server corriendo")
})
