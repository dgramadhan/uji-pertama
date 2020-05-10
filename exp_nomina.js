module.exports = {
  func: function () {
      
    const fs = require('fs');
    const path = require('path');

    'use strict';

    var db = require('./koneksi');

    let nodeGeocoder = require('node-geocoder');


    
    let options = {
      provider: 'openstreetmap'
    };
    
    let geoCoder = nodeGeocoder(options);
    // Reverse Geocode
      
    db.connect(function(err) {
        db.query("SELECT * FROM maps", function (err, result, fields) {
        if (err) throw err;  

        var i=0;
        while (i<=2) {
          lat1 = result[i].lat;
          lon1 = result[i].longi;
          console.log(lat1);
          console.log(lon1);

            geoCoder.reverse({lat:lat1, lon:lon1})
            .then((res)=> {
              
                console.log(res[0].city);
                console.log(res[0].latitude);
                console.log(res[0].longitude);
                
                var kota = res[0].city;
                var lat = res[0].latitude;
                var lon = res[0].longitude;
                

                    db.query('INSERT INTO test (lat, longi, loc) VALUES ("'+lat+'","'+lon+'","'+kota+'")', function (error, result, fields) {
                      if(error){
                          console.log(error)
                      }
                      console.log("Database added"); 

                    });
                    

                    db.query('SELECT * FROM test', function (error, rows, fields){
                      if(error){
                          console.log(error)
                      } else if(rows.length > 0){
                        fs.writeFile(path.join(__dirname, '/json','test_maps.json'), [JSON.stringify(rows)], error => {
                        
                          if (error) throw error;
                          console.log('File Written to Test Maps');
                      
                          })
                      }
                  });
            })
            .catch((err)=> {
                console.log(err);
            });
            i++;
        }

          })

        });
  }
};