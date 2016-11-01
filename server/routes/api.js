'use strict'

var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
    knex('pirates')
        .then(pirates => {
            console.log('all the pirates are', pirates);
            res.json(pirates)
        })
});

module.exports = router;
