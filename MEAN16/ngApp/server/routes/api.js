const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');


//.env .confg
const db = "mongodb://localhost:27017/videoLib"

mongoose.connect(db)
            .then(
                    (value)=>{console.log("Connected to MongoDB")},
                    (err)=>{console.log('Error!:'+err)}
            );

//localhost:3000/api/videos
router.get('/videos', function(req, res){
    //res.send vs res.end
    console.log("Get request for all videos");
    Video.find({})
        .exec()
        .then((videos, err)=>{
            if(err){
                console.log('Error getting Data: ',err);
            }else{
                res.json(videos)
            }
        });
});
//Get a video based on id
router.get('/videos/:id', function(req, res){
    console.log("Get Request for a video");

    Video.findById(req.params.id)
         .exec()
         .then(function(video,err){
            if(err){
                console.log('Error getting Data: ',err);
            }else{
                res.json(video)
            }
         });
});

//Insert a video
router.post('/video', function(req, res){
    console.log("Post a videos");

    var newVideo = new Video();
    newVideo.title = req.body.title;
    console.log(req.body.title);
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save()
       .then(function(insertedVideo, err){
        if(err){
            console.log("Error Saving videos");
        }
        else{
            res.json(insertedVideo);
        }
    });
   
});

//Update video by id
router.put('/video/:id', function(req, res){
    console.log("Updating a videos");
    Video.findByIdAndUpdate(req.params.id,
        {
            $set:{title:req.body.title, url:req.body.url, description:req.body.description}
        },
        {
            new:true
        })
        .then(function(updatedVideo, err){
            if(err){
                res.send("Error Updating a Video");
            }
            else{
                res.json(updatedVideo);
            }
        }
    )
});

//delete a video
router.delete('/video/:id', function(req, res){
    console.log("Deleting a videos");

    Video.findByIdAndDelete(req.params.id)
    .then(function(deletedVideo, err){
        
        if(err){
            res.send("Error deleting a Video");
        }
        else{
            res.json(deletedVideo);
        }
    }
    )
});



module.exports = router;