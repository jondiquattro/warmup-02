'use strict';

const express = require('express');

const router = express.Router();

router.get('/', hello);
// router.use(express.static('/public'));
router.post('/save', jsonResponse)

function hello(req,res,next){
    res.send('hello');
}

function jsonResponse(req,res,next){
    console.log(req.body)
    .then(next)
}
module.exports = router;