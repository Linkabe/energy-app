var mysql = require('mysql');

var heatingdao;
heatingdao = {
    sqlGetAll: "select * from heating_tbl;",
    sqlFindById: "select * from heating_tbl where ID = ?;",
    sqlInsert: "insert into heating_tbl (HouseTemp, Humidity, Status) values (?,?,?);",
    sqlUpdateHon: "update devicetable set Status = 'On' where ID = 2;",
    sqlUpdateHoff: "update devicetable set Status = 'Off' where ID = 2;",
    sqlDelete: "delete from heating_tbl where ID = ?;",
    sqlfindme: "select * from heating_tbl where Username = ? and Password  = ?;",
    // note that these methods are all the same except the sql and the data
    getAll: function ( callback) {
        var con = getConnection(); // we need a different connection for each
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(heatingdao.sqlGetAll, [], function (err, result) {
                handleErrorandLog(err, "getAll", result);
                if (callback) callback(result);
            });
        });
    },

    findById: function (id, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [id];
            con.query(usersdao.sqlFindById, data, function (err, result) {
                handleErrorandLog(err, "findById", result);
                if (callback) callback(result);
            });
        });
    },
    insert: function (heatingup, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [heatingup];
            con.query(heatingdao.sqlInsert, data, function (err, result) {
                handleErrorandLog(err, "Insert", result);
                if (callback) callback(result);
            });
        });
    },

    findme: function (user, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [user.UserN, user.PassW];
            con.query(usersdao.sqlfindme, data, function (err, result) {
                handleErrorandLog(err, "find", result);
                if (callback) callback(result);
            });
        });
    },
    update: function (user, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [user.User_ID, user.F_name, user.L_name, user.E_mail, user.D_OB, user.Username, user.Password];
            con.query(usersdao.sqlUpdate, data, function (err, result) {
                handleErrorandLog(err, "Update", result);
                if (callback) callback(result);
            });
        });
    },

    update4:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(heatingdao.sqlUpdateHon,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    update5:function(){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(heatingdao.sqlUpdateHoff,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
            });
        });
    },
    delete: function (id, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [id];
            con.query(heatingdao.sqlDelete, data, function (err, result) {
                handleErrorandLog(err, "Delete", result);
                if (callback) callback(result);
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


module.exports= heatingdao;