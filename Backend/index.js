const express = require('express');
const cors = require('cors')

const connect = require('./src/Connection/connect');
const Route = require("./src/Routes/route")

const port = 5050;
const app = express();


app.use(cors())
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use("",Route);

app.listen(port ,()=>{ console.log(`Server is on ${port}`)})