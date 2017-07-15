const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var models = require('./models')
var Student = models.Student
var Group = models.Group

// YOUR API ROUTES HERE



router.post('/localhost:3000/addGroup', (req, res) => {
    var newGroup = new Group({
        assignment: req.body.assignment,
        part: req.body.part,
        problem: req.body.problem,
        location: req.body.location
    })
    newGroup.save(function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
})

module.exports = router;
