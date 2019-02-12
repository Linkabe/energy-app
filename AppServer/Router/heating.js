const express = require('express');
const router = express.Router();
const dao = require('../../DAO/usersdao');
const dao2 = require('../../DAO/heatingdao');
const dao4 = require('../../DAO/textdao');
const dao3 = require('../../DAO/authdao');

/* GET all students listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dao2.getAll(function(result){
        res.send(result);
    })
    //console.log("in users home");
});


router.get('/delete/:id', function(req,res,next){
    const id = req.param("id");
    dao2.delete(id,function(result){
        res.send("{success:true}");
    })
});
router.get('/findbyid/:id', function(req,res,next){
    const id = req.param("id");
    dao2.findById(id,function(result){
        res.send(result[0]);
    })
});
router.post('/createme', function(req,res,next){
    const heatingup = req.body;
    dao2.insert(heatingup, function(result){
        res.send("done");
    })
});

router.post('/login', function(req,res,next){
    const user = req.body;
    dao2.findme(user, function(result){
        const Username = user.Username;
        console.log(result.User_ID);
        console.log(result);
        console.log(result[0].Username);
        console.log(result[0].Password);
        console.log("userid");
        if (!result.length)
        {
            console.log(result);
            console.log(result[0].Username);
            console.log(result[0].Password);
            console.log("userid");
            res.send("You Have Failed To Sign In!.. Try again?");
        }

        if (result[0].Username=== "Nquinn")
        {
            console.log("Niall");

            res.send("Admin");
        }
        else{
            //console.log(result.get("Username"))
            console.log("in here");
            res.send("Success");
        }

    })
});


router.post('/delete', function(req,res,next){
    const user = req.body;
    dao2.delete(user.User_ID, function(result){
        res.send("done");
    })
});
router.post('/updatehon', function(req,res,next){
    const heatingup = req.body;
    dao2.update4(heatingup, function(result){
        res.send("done");
    })
});
router.post('/updatehoff', function(req,res,next){
    const heatingup = req.body;
    dao2.update5(heatingup, function(result){
        res.send("done");
    })
});



module.exports = router;