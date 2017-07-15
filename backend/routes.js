const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')


var models = require('./models')
var Student = models.Student
var Group = models.Group

// YOUR API ROUTES HERE


var models = require('./models');
var Student = models.Student;
var Group = models.Group;





router.post('/addGroup', (req, res) => {
    console.log(req.body);
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
            res.json({ result: result });
        }
    })
})

router.post('/addUser', (req, res) => {
    console.log(req.body);
    var newUser = new User({
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
