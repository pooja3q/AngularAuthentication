const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api')

const cros = require('cors')

const  PORT = 3000

const app = express();
app.use(cros())
app.use(bodyParser.json())
app.use('/api',api)

//api to get rquest 

app.get('/', (req, res)=>{
    res.send('Hello from server')
})

app.listen(PORT, function(){
    console.log("server running in localhost " + PORT)
})