
'use strict';

var response = require('./res');
var connection = require('./koneksi');


//tambahan
var telegram = require('telegram-bot-api');
var util = require('util');

var api = new telegram({
	token: '1050692602:AAHAMWp1JLMyiwpeF7XK4lmFEKwTykPor-E'
});

var nama_sensor;
//tambahan

exports.sensor = function(req, res) {
    connection.query('INSERT INTO sensor (id_sensor, value_sensor) VALUES (?,?)', [req.params.id_sensor, req.params.value_sensor ], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true(rows, res)
            
    });
};

exports.sensor_post = function(req, res) {
    connection.query('INSERT INTO sensor (id_sensor, value_sensor) VALUES (?,?)', [req.body.id_sensor, req.body.value_sensor], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true(rows, res)

            //tambahan
            if (req.body.value_sensor > 200) {
                if (req.body.id_sensor == 1) {
                    nama_sensor = "Sensor1"
                }

                if (req.body.id_sensor == 2) {
                    nama_sensor = "Sensor2"
                }

                if (req.body.id_sensor == 3) {
                    nama_sensor = "Sensor3"
                }

            api.sendMessage({
                chat_id: 676085757,
                text: 'Banjir di ' + nama_sensor + ", ketinggian " + req.body.value_sensor
            })
            .then(function(data)
            {
                console.log(util.inspect(data, false, null));
            })
            .catch(function(err)
            {
                console.log(err);
            });

        }
            //tambahan
            
    });
};

exports.show_sensor = function(req, res) {
    
    connection.query('SELECT * FROM sensor where id_sensor = ?', [req.params.id_sensor], function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
            response.true(rows, res);
        }
        else{
            response.false(rows, res)
        }
    });
};

//tambahan
exports.add_maps = function(req, res) {
    connection.query('INSERT INTO maps (lat, longi) VALUES (?,?)', [req.params.lat, req.params.longi ], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true_maps(rows, res)
            
    });
};

exports.post_add_maps = function(req, res) {
    connection.query('INSERT INTO maps (lat, longi) VALUES (?,?)', [req.body.lat, req.body.longi ], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true_maps(rows, res)
            
    });
};

exports.show_maps = function(req, res) {
    
    connection.query('SELECT * FROM maps', function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
            response.true_maps(rows, res);
        }
        else{
            response.false_maps(rows, res)
        }
    });
};
//samapai sini

exports.index = function(req, res) {
    response.true("Bisa", res)
};


exports.home = function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, 'web_coba.html'));
};

//tambahan telegram

exports.post_add_telegram = function(req, res) {
    connection.query('INSERT INTO telegram (id_telegram) VALUES (?)', [req.body.id_telegram], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true_telegram(rows, res)
            
    });
};

exports.show_telegram = function(req, res) {
    
    connection.query('SELECT * FROM telegram', function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
            response.true_telegram(rows, res);
        }
    });
};
