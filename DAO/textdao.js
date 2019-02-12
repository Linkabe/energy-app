var mysql = require('mysql');

var textdao={
    sqlGetAll: "select * from texttable;",
    sqlFindById: "select * from texttable where ID = ?;",
    sqlInsert: "insert into texttable (Username, Sent_Text) values (?,?);",
    sqlUpdate: "update texttable set ? where ID = ?;",
    sqlDelete: "delete from texttable where ID =?;",
    sqlfindme: "select * from texttable where usern = ? and passw  = ?;",
    // note that these methods are all the same except the sql and the data
    // in studentDAO2 we simplify that
    getAll:function(callback) {
        console.log("in dao2 " + textdao.sqlGetAll)
        var con = getConnection(); // we need a different connection for each
        con.connect(function (err) {
            if (err) throw err;
            var data = [];
            con.query(textdao.sqlGetAll,[] ,function (err, result) {
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
            con.query(textdao.sqlFindById,data, function (err, result) {
                handleErrorandLog(err,"findById",result);
                if(callback)callback(result);
            });
        });
    },
    insert:function(userT,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [userT.usern , userT.texts];
            con.query(textdao.sqlInsert,data, function (err, result) {
                handleErrorandLog(err,"Insert",result);
                if(callback)callback(result);
            });
        });
    },
    findme:function(uesr,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [user.usern, user.passw];
            con.query(textdao.sqlfindme,data, function (err, result) {
                handleErrorandLog(err,"find",result);
                if(callback)callback(result);
            });
        });
    },
    update:function(userT,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [userT, userT.texts];
            con.query(textdao.sqlUpdate,data, function (err, result) {
                handleErrorandLog(err,"Update",result);
                if(callback)callback(result);
            });
        });
    },
    delete:function(id,callback){
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            var data = [id];
            con.query(textdao.sqlDelete,data, function (err, result) {
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
        password:'root',
        database:'mytextapp'
    });
}

function handleErrorandLog(err, name, result){
    if(err){
        console.log(err.sql);
        throw err;
    }
    console.log(name+": " + JSON.stringify(result));

}


module.exports= textdao;