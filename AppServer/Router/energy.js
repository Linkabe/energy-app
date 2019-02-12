const express = require('express');
const router = express.Router();
const daodevice = require('../../DAO/devicedao');
const daoenergy = require('../../DAO/energydao');
const dao = require('../../DAO/usersdao');
const dao2 = require('../../DAO/heatingdao');
const dao4 = require('../../DAO/textdao');
const dao3 = require('../../DAO/authdao');

router.get('/', function(req, res, next) {
    console.log("sanity");
    res.setHeader('Content-Type', 'application/json');
    daoenergy.getAll(function(result){
        res.send(result);
    })
});

router.get('/delete/:id', function(req,res,next){
    const id = req.param("id");
    daoenergy.delete(id,function(result){
        res.send("{success:true}");
    })
});
router.get('/findbyid/:id', function(req,res,next){
    const id = req.param("id");
    daoenergy.findById(id,function(result){
        res.send(result[0]);
    })
});
router.post('/createsolar', function(req,res,next){
    const SolarP = req.body;
    daoenergy.insert(SolarP, function(result){
        res.send("done");
    })
});
router.post('/createmain', function(req,res,next){
    const MainP = req.body;
    daoenergy.insert1(MainP, function(result){
        res.send("done");
    })
});
router.post('/login', function(req,res,next){
    const student = req.body;
    dao2.findme(student, function(result){
        if (!result.length)
        {
            console.log("fuck");
            console.log(result);
            console.log(result.userId)
            res.send("You Have Failed To Sign In!.. Try again?");
        }
        else{
            res.send("Success");
        }

    })
});

router.post('/delete', function(req,res,next){
    const MainP = req.body;
    daoenergy.delete(MainP.ID, function(result){
        res.send("done");
    })
});
router.post('/updateMon', function(req,res,next){
    const MainP = req.body;
    daoenergy.update(MainP, function(result){
        res.send("done");
    })
});
router.post('/updateMoff', function(req,res,next){
    const MainP = req.body;
    daoenergy.update1(MainP, function(result){
        res.send("done");
    })
});
router.post('/updateSon', function(req,res,next){
    const SolarP = req.body;
    daoenergy.update2(SolarP, function(result){
        res.send("done");
    })
});
router.post('/updateSoff', function(req,res,next){
    const SolarP = req.body;
    daoenergy.update3(SolarP, function(result){
        res.send("done");
    })
});



module.exports = router;