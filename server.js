const express = require('express');
const cors = require('cors');
const database = require('./database/db')
const bodyParser = require('body-parser')

const app = express();
const port = 8000;

app.use(cors())
app.use(bodyParser.json())
database.mongodbConnection();

app.use('/api/lines', require('./routes/lines'))



app.listen(port, ()=>{
    console.log(`running on port... ${port}`)
})