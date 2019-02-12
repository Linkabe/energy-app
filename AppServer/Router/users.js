const express = require('express');
const router = express.Router();
const dao = require('../../DAO/usersdao');
const dao2 = require('../../DAO/textdao');
const dao3 = require('../../DAO/authdao');

/* GET all students listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dao.getAll(function(result){
        res.send(result);
    })
    //console.log("in users home");
});


router.get('/delete/:id', function(req,res,next){
    const id = req.param("id");
    dao.delete(id,function(result){
        res.send("{success:true}");
    })
});
router.get('/findbyid/:id', function(req,res,next){
    const id = req.param("id");
    dao.findById(id,function(result){
        res.send(result[0]);
    })
});
router.post('/create', function(req,res,next){
    const user = req.body;
    dao.insert(user, function(result){
        res.send("done");
    })
});

router.post('/login', function(req,res,next){
    const user = req.body;
    dao.findme(user, function(result){
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
    dao.delete(user.User_ID, function(result){
        res.send("done");
    })
});
router.post('/update', function(req,res,next){
    const user = req.body;
    dao.update(user, function(result){
        res.send("done");
    })
});



module.exports = router;