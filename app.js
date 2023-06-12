const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())

const api = process.env.API_URL;


const productsRouter = require('./routers/products');

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Routers
app.use(`${api}/products`, productsRouter);


// conection to database
mongoose.connect(process.env.CONNECTION_STRING,{
    // userNewUrlParser: true,
    // userUnifiedTopology:true,
    // dbName: 'recomenu_db'
})
.then (() => {
    console.log('database connection is ready')
})
.catch((err) => {
    console.log(err)
});


app.listen(3000, () => {
    console.log(api);
    console.log('Server is Runing http://localhost:5000');
});