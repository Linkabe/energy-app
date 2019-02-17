var mysql = require('mysql');

var devicedao={
    sqlGetAll: "select * from devicetable;",
    sqlFindById: "select * from deviceable where ID = ?;",
    sqlInsert: "insert into devicetable (Device, Status) values (?,?);",
    // sqlInsertAi: "insert into ai_tbl (Devices, DStatus) values (?,?);",
    sqlUpdateLon: "update devicetable set Status = 'On' where ID = 1;",
    sqlUpdateLoff: "update devicetable set Status = 'Off' where ID = 1;",
    sqlUpdateHon: "update devicetable set Status = 'On' where ID = 2;",
    sqlUpdateHoff: "update devicetable set Status = 'Off' where ID = 2;",
    sqlUpdateTon: "update devicetable set Status = 'On' where ID = 8;",
    sqlUpdateToff: "update devicetable set Status = 'Off' where ID = 8;",
    sqlDelete: "delete from devicetable where ID =?;",
    sqlfindme: "select * from devicetable where usern = ? and passw  = ?;",
    // note that these methods are all the same except the sql and the data
    // in studentDAO2 we simplify that
    getAll:function(callback) {
        console.log("in dao " + devicedao.sqlGetAll)
        var con = getConnection(); // we need a different connection for each
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(devicedao.sqlGetAll,[] ,function (err, result) {
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
            con.query(devicedao.sqlFindById,data, function (err, result) {
                handleErrorandLog(err,"findById",result);
                if(callback)callback(result);
            });
        });
    },
    insert:function(device,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [device.Device , device.Status];
            con.query(devicedao.sqlInsert,data, function (err, result) {
                handleErrorandLog(err,"Insert",result);
                if(callback)callback(result);
            });
        });
    },

    insert1:function(device,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [device.Device, device.Status];
            con.query(devicedao.sqlInsertAi,data, function (err, result) {
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
            con.query(devicedao.sqlUpdateTon,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update1:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(devicedao.sqlUpdateToff,data, function (err, result) {
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
            con.query(devicedao.sqlUpdateLoff,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update4:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(devicedao.sqlUpdateHon,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update5:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(devicedao.sqlUpdateHoff,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },

    delete:function(id,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [id];
            con.query(devicedao.sqlDelete,data, function (err, result) {
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


module.exports= devicedao;