'use strict'
//instatiate path and express
const express = require('express');
const path = require('path');
const app = express();
let port =3000;
// const Login = require('./routes/login');
//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/main.html'))
})

app.listen(port,()=>console.log('running on localhost: 3000'));