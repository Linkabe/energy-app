const express = require('express');
const router = express.Router();
const dao2 = require('../../DAO/textdao');

//dao2
router.get('/getall', function(req, res, next) {
    console.log("sanity");
    res.setHeader('Content-Type', 'application/json');
    dao2.getAll(function(result){
        res.send(result);
    })
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
router.post('/create', function(req,res,next){
    const userT = req.body;
    dao2.insert(userT, function(result){
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
    const userT = req.body;
    dao2.delete(userT.ID, function(result){
        res.send("done");
    })
});
router.post('/updatetext', function(req,res,next){
    const student = req.body;
    dao2.update(student, function(result){
        res.send("done");
    })
});


module.exports = router;