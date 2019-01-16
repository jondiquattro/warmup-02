'use strict';

const express = require('express');

const router = express.Router();

router.get('/', hello);
router.use(express.static('/public'));

function hello(req,res,next){
    res.send('hello');
}