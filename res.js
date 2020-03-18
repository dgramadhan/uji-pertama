const fs = require('fs');
const path = require('path');

'use strict';

exports.true = function(values, res) {
  var data = {
      'status': 1,
      'values': values
  };
  fs.writeFile(path.join(__dirname, '/json','hasil.json'), [JSON.stringify(values)], err => {
    if (err) throw err;
    console.log('File Written to hasil');

    })
  res.json(data);
  res.end();
};


exports.db_true = function(values, res) {
  var data = {
      'status': 1,
      'values': values.affectedRows
  };
  res.json(data);
  res.end();
};


exports.false = function(values, res) {
  var data = {
      'status': 0
  };
  res.json(data);
  res.end();
};

//tambahan
exports.true_maps = function(values, res) {
  var data = {
      'status': 1,
      'values': values
  };
  fs.writeFile(path.join(__dirname, '/json','maps.json'), [JSON.stringify(values)], err => {
    if (err) throw err;
    console.log('File Written to maps');

    })
  res.json(data);
  res.end();
};


exports.db_true_maps = function(values, res) {
  var data = {
      'status': 1,
      'values': values.affectedRows
  };
  res.json(data);
  res.end();
};


exports.false_maps = function(values, res) {
  var data = {
      'status': 0
  };
  res.json(data);
  res.end();
};

//sampai sini