'use strict';

const express = require('express');
const { Clothing } = require('../models');

const router = express.Router();

// READING from the clothes table???
router.get('/clothes', async(req,res) =>{
  let records = await Clothing.findAll();
  res.json(records);
});

router.get('/clothes/:id', async (req,res) =>{
  let records = await Clothing.findOne({ where: {id: req.params.id}});
  res.json(records);
});

// CREATE new clothes in the TABLE
router.post('/clothes', async(req,res)=>{
  let record = await Clothing.create(req.body);
  res.json(record);
});

// UPDATE exist clothes in the table
router.put('/clothes/:id', async(req, res)=>{
  let clothing = await Clothing.findOne({ where: {id: req.params.id}});
  let record = await clothing.update(req.body, {returning:true});
  res.json(record);
});

// REMOVES exist clothes in the table
router.delete('/clothes/:id', async(req,res)=>{
  let clothing = await Clothing.findOne({where: {id: req.params.id}});
  let record = await clothing.destroy();
  res.json(record);
});

module.exports = router;
