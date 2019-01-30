'use strict';

const express = require('express');
const routes = require('./routes/routes.js');

let app = express();

//-------------ROUTES------------------//

// app.get('/', getRoutes);

// router.post('/:item', postFile);
app.use(routes);



//------------Helpers----------------//
// function getRoutes(req,res,next){
//     res.send('hello world')
//     .catch(error)
// }


// function postFile(req,res,next){
//    console.log('called from post');
// }




// app.listen(process.env.PORT, ()=>{
//     console.log(`up on port ${PORT}`);
// })

app.listen(3000, ()=>{
    console.log(`up on port 3000`);
})