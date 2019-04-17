var express = require("express")
var app = express();

// var CakeModel = require("../models/CakeModel").cake;
// var FeedbackModel = require("../models/CakeModel").feedback;

// GET index page
// POST submit new cake
// GET view all cakes
// GET find cake by ID

module.exports = {
    index: function(req, res){
        console.log("******** CONTROLLER INDEX PAGE RUNNING")
        CakeModel.find({}, function(err, cakes){
            res.json(cakes);
        })
    }
    // newCake: function(req, res){
    //     console.log("******** CONTROLLER NEW CAKE RUNNING")
    //     console.log(req.body);
    //     var cake = new CakeModel({baker: req.body.baker, url: req.body.url, feedback: []});
    //     cake.save(function(err){
    //         if(err){
    //             console.log(err);
    //             res.json(cake);
    //         } else{
    //             console.log("****** CONTROLLER CAKE MADE ")
    //             res.json(cake);
    //         }
    //     })
    // },
    // allCakes: function(req, res){
    //     console.log("******** CONTROLLER VIEW ALL CAKES RUNNING")
    //     CakeModel.find({}, function(err, cake){
    //         res.json(cake)
    //     })
    // },
    // findCake: function(req, res){
    //     console.log("******** CONTROLLER FIND CAKE BY ID RUNNING")
        
    //     CakeModel.findById(req.params.id, function(err,cake){
    //         if(err){
    //             console.log("***** CONTROLLER FIND CAKE ERROR");
    //             res.json(cake);
    //         } else{
    //             console.log("***** CONTROLLER CAKE FOUND");
    //             res.json(cake);
    //         }
            
    //     })
        
    // },
    // addFeedback: function(req,res){
    //     console.log("******** CONTROLLER ADD FEEDBACK RUNNING")
    //     console.log(req.params.id, req.body)
    //     console.log(req.body);
    //     var newFeedback = new FeedbackModel(req.body);
    //     console.log(newFeedback);
    //     CakeModel.updateOne(
    //         {_id: req.params.id}, {$push: {feedback: newFeedback}}, function(err)
    //         {
    //             if(err){
    //                 console.log(err);
    //         }
    //             else{
    //             console.log("***** CONTROLLER FEEDBACK ADDED");
    //             // res.json(cake);
    //             }
    //         }
    //     )
    // }
}