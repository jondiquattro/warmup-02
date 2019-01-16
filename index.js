'use strict';

const express = require('express');

const app = express;

router = require('./routes/routes.js');

app.use(router);
// app.length('/', (req,res,next)=>{
//     res.send('hello world');
// })




app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})