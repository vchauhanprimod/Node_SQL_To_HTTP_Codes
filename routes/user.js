var config = require('./../config.js');
var mysql = require('mysql');
var errormap = require('./../public/javascripts/error.js');

connection = mysql.createConnection(config.dbconfig);
connection.query('USE express');

exports.list = function(req, res) {
    connection.query('SELECT * FROM users', function(err, rows) {
        console.log(rows);
        res.json({
            users: rows
        });
    });
    
};
exports.update = function(req, res) {
    if (typeof (req.param("user")) !== 'undefined' && typeof (req.param("id")) !== 'undefined' && req.param("user") !== '' && req.param("id") !== '') {
        var q = "UPDATEs users SET user_name='" + req.param("user") + "' WHERE id='" + req.param("id") + "'";
        connection.query(q, function(err, result, field){
            if(err){
                var e =  errormap.sql_to_http[err['code']]
                console.log(err);
                res.set({'status':'400',
                    'X-Sql-Error':e
                });
                res.send("error");
            }
            else{
                res.json({
                    message:'updated successfully'
                });
                
            }
        });
       
       
    }
};


exports.delete = function(req, res) {
    if (typeof (req.params.id) !== 'undefined' && req.params.id !== '') {
        var q = "DELETE FROM users WHERE id='" + req.params.id + "'";
        connection.query(q, function(err, result, field){
            if(err){
                var e =  errormap.sql_to_http[err['code']]
                console.log(err);
                res.set({'status':'400',
                    'X-Sql-Error':e
                });
                res.send("error");
            }
            else{
                res.json({
                    message:'deleted successfully'
                });
                
            }
        });
    }
};


exports.add_user = function(req, res) {
    if (req.param("user") !== '') {
        var q = "INSERT INTO users (user_name) VALUES ('" + req.param("user") + "')"
        connection.query(q, function(err, result, field){
            if(err){
                var e =  errormap.sql_to_http[err['code']]
                console.log(err);
                res.set({'status':'400',
                    'X-Sql-Error':e
                });
                res.send("error");
            }
            else{
                res.json({
                    message:'saved successfully'
                });
                
            }
        });
    }
    

};