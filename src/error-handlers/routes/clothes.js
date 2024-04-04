'use strict';

const express = require('express');
const { Clothes } = require('../models');

const router = express.Router();

// READING from the clothes table???
router.get('/clothes', async(req,res) =>{
    let records = await Clothes.findAll();
    res.json(records);
});

router.get('/clothes/:id', async (req,res) =>{
    let records = await Clothes.findOne({ where: {id: req.params.id}});
    res.json(records);
});

// CREATE new clothes in the TABLE
router.post('/clothes', async(req,res)=>{
    let record = await Clothes.create(req.body);
    res.json(record);
});

// UPDATE exist clothes in the table
router.put('/clothes/:id', (req, res)=>{});

// REMOVES exist clothes in the table
router.delete('/clothes/:id', (req,res)=>{});

module.exports = router;
