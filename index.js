'use express'

const express = require('express');
const app = express();


//ejs
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');


//static routes
app.use(express.static(`${__dirname}/public`));

//app middleware
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('<h1>Hello From /</h1>');
})

app.post('/save', (req,res)=>{
    res.json(req.body);
})

app.get('/err', (req,res,next)=>{
    next('This is a catostophic error')
})

app.get('*', (req,res)=>{
    res.status(404);
    res.statusMessage = 'not found';
    res.render('not-found', {request: req})
})


// broken
app.use( (err,req,res, next)=>{
    res.status(500);
    res.statusMessage = 'Server Error';
    res.render('error', {request: req, error:err})
    
})


// module.exports ={
//     server: app,
//     start:(port)=>{
//         const port = process.env.port || 8080;
// app.listen(port, ()=> console.log('server up on 8080'))

//     }
// }
app.listen(8080, ()=> console.log('server up on 8080'))
//httpie command
//http http://localhost:8080/
//http http://localhost:8080/err
//http http://localhost:8080/foo
//
