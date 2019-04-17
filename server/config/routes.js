var express = require("express")
var app = express();

Controllers = require("../controllers/controllers")

module.exports= function(app){
    app.get("/cake", function(req,res){
        console.log("******** ROUTES INDEX PAGE RUNNING");
        Controllers.index(req,res);
    })
    
    // app.post("/cake/new", function(req,res){
    //     console.log("******** ROUTES NEW CAKE POST RUNNING");
    //     Controllers.newCake(req,res);
    // })
    
    // app.get("/cake/all", function(req,res){
    //     console.log("******* ROUTES ALL CAKES RUNNING");
    //     Controllers.allCakes(req,res);
    // })
    
    // app.get("/cake/:id", function(req,res){
    //     console.log("******* ROUTES FIND CAKE BY ID RUNNING")
    //     Controllers.findCake(req,res);
    // })

    // app.post("/cake/feedback/:id", function(req,res){
    //     console.log("****** ROUTES FEEDBACK RUNNING")
    //     Controllers.addFeedback(req,res);
    // })
}
