var mysql = require('mysql');

var usersdao;
usersdao = {
    sqlGetAll: "select * from userstable;",
    sqlFindById: "select * from userstable where User_ID = ?;",
    sqlInsert: "insert into userstable (F_name, L_name, E_mail, D_OB, Username, Password) values (?,?,?,?,?,?);",
    sqlUpdate: "update userstable set ? where User_ID = ?;",
    sqlDelete: "delete from userstable where User_ID = ?;",
    sqlfindme: "select * from userstable where Username = ? and Password  = ?;",
    // note that these methods are all the same except the sql and the data
    getAll: function ( callback) {
        var con = getConnection(); // we need a different connection for each
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(usersdao.sqlGetAll, [], function (err, result) {
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
    insert: function (user, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [user.fname, user.lname, user.email, user.dob, user.usern, user.passw];
            con.query(usersdao.sqlInsert, data, function (err, result) {
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
    delete: function (id, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [id];
            con.query(usersdao.sqlDelete, data, function (err, result) {
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


module.exports= usersdao;