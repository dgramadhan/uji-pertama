'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

//     app.route('/')
//         .get(todoList.index);

    app.route('/sensor/:id_sensor/:value_sensor')
        .get(todoList.sensor);

    app.route('/sensor/id_sensor/value_sensor')
        .post(todoList.sensor_post);

    app.route('/show_sensor/:id_sensor')
        .get(todoList.show_sensor);

    //tambahan

    app.route('/add_maps/:lat/:longi')
        .get(todoList.add_maps);

    app.route('/add_maps')
        .post(todoList.post_add_maps);

    app.route('/show_maps')
        .get(todoList.show_maps);
    
    app.route('/new_maps')
        .get(todoList.new_maps);

    //tambah home
      
    app.route ('/home')
        .get(todoList.home);
    
    
    app.route('/')
        .get(todoList.home);


     //tambah home -
    
     //tambah telegram
     app.route('/add_telegram')
        .post(todoList.post_add_telegram);

    app.route('/show_telegram')
        .get(todoList.show_telegram);
        
        

};
