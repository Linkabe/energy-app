var mysql = require('mysql');

var energydao={
    sqlGetAll: "select * from energy_tbl;",
    sqlFindById: "select * from energy_tbl where ID = ?;",
    sqlInsert: "insert into energy_tbl (PowerSource, Status) values (?,?);",
    sqlInsertAi: "insert into ai_tbl (PowerSource, Status) values (?,?);",
    sqlUpdateMon: "update energy_tbl set Status = 'On' where ID = 3;",
    sqlUpdateMoff: "update energy_tbl set Status = 'Off' where ID = 3;",
    sqlUpdateSon: "update energy_tbl set Status = 'On' where ID = 4;",
    sqlUpdateSoff: "update energy_tbl set Status = 'Off' where ID = 4;",
    sqlDelete: "delete from energy_tbl where ID =?;",
    sqlfindme: "select * from energy_tbl where usern = ? and passw  = ?;",
    // note that these methods are all the same except the sql and the data
    // in studentDAO2 we simplify that
    getAll:function(callback) {
        console.log("in dao " + energydao.sqlGetAll)
        var con = getConnection(); // we need a different connection for each
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(energydao.sqlGetAll,[] ,function (err, result) {
                handleErrorandLog(err,"getAll",result);
                if(callback)callback(result);
            });
        });
    },
    findById:function(id,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [id];
            con.query(energydao.sqlFindById,data, function (err, result) {
                handleErrorandLog(err,"findById",result);
                if(callback)callback(result);
            });
        });
    },
    insert:function(SolarP,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [SolarP.SPower , SolarP.Status];
            con.query(devicedao.sqlInsert,data, function (err, result) {
                handleErrorandLog(err,"Insert",result);
                if(callback)callback(result);
            });
        });
    },

    insert1:function(MainP,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [MainP.MPower, MainP.Status];
            con.query(energydao.sqlInsertAi,data, function (err, result) {
                handleErrorandLog(err,"Insert",result);
                if(callback)callback(result);
            });
        });
    },
    
    update:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(energydao.sqlUpdateTon,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update1:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(energydao.sqlUpdateToff,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update2:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(devicedao.sqlUpdateLon,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update3:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(energydao.sqlUpdateLoff,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update4:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(energydao.sqlUpdateHon,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update5:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(energydao.sqlUpdateHoff,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },

    delete:function(id,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [id];
            con.query(energydao.sqlDelete,data, function (err, result) {
                handleErrorandLog(err,"Delete",result);
                if(callback)callback(result);
            });
        });
    }


    // the others are the same
};

function getConnection(){
    return  mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'password',
        database:'p4db'
    });
}

function handleErrorandLog(err, name, result){
    if(err){
        console.log(err.sql);
        throw err;
    }
    console.log(name+": " + JSON.stringify(result));

}


module.exports= energydao;