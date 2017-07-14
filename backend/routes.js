const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Student = mongoose.model('Student', studentSchema)
var Group = mongoose.model('Group', groupSchema)

// YOUR API ROUTES HERE



router.post('/localhost:3030/addGroup', (req, res)=>{
    var newGroup= new Group({
        assignment: req.body.assignment,
        part: req.body.part,
        problem: req.body.problem,
        location: req.body.location
    })
    newGroup.save(function(err, result){
        if(err){
          callback(err);
        } else{
            callback(null, result);
        }
})

module.exports = router;
