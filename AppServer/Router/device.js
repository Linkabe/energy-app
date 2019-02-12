const express = require('express');
const router = express.Router();
const daodevice = require('../../DAO/devicedao');
const dao = require('../../DAO/usersdao');
const dao2 = require('../../DAO/heatingdao');
const dao4 = require('../../DAO/textdao');
const dao3 = require('../../DAO/authdao');

router.get('/', function(req, res, next) {
    console.log("sanity");
    res.setHeader('Content-Type', 'application/json');
    daodevice.getAll(function(result){
        res.send(result);
    })
});

router.get('/delete/:id', function(req,res,next){
    const id = req.param("id");
    daodevice.delete(id,function(result){
        res.send("{success:true}");
    })
});
router.get('/findbyid/:id', function(req,res,next){
    const id = req.param("id");
    daodevice.findById(id,function(result){
        res.send(result[0]);
    })
});
router.post('/createdevice', function(req,res,next){
    const device = req.body;
    daodevice.insert(device, function(result){
        res.send("done");
    })
});
router.post('/createme', function(req,res,next){
    const device = req.body;
    daodevice.insert1(device, function(result){
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
    const device = req.body;
    daodevice.delete(device.ID, function(result){
        res.send("done");
    })
});
router.post('/updateton', function(req,res,next){
    const device = req.body;
    daodevice.update(device, function(result){
        res.send("done");
    })
});
router.post('/updatetoff', function(req,res,next){
    const device = req.body;
    daodevice.update1(device, function(result){
        res.send("done");
    })
});
router.post('/updatelon', function(req,res,next){
    const device = req.body;
    daodevice.update2(device, function(result){
        res.send("done");
    })
});
router.post('/updateloff', function(req,res,next){
    const device = req.body;
    daodevice.update3(device, function(result){
        res.send("done");
    })
});
router.post('/updatehon', function(req,res,next){
    const device = req.body;
    daodevice.update4(device, function(result){
        res.send("done");
    })
});
router.post('/updatehoff', function(req,res,next){
    const device = req.body;
    daodevice.update5(device, function(result){
        res.send("done");
    })
});


module.exports = router;