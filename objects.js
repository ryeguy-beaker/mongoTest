var _ = require('lodash');
var Object = require('./object_model.js');

module.exports = function(app) {
  /*CREATE*/
  app.post('/objects', function(req, res) {
    console.log(req.body);
    var newObject = new Object(req.body);
    newObject.save(function(err) {
      if (err) {
        res.json({info: 'error during object create', error: err});
      } else {
        res.json({info: 'object created successfully.'});
      }
    });
  });

  /*READ*/
  /*All*/
  app.get('/objects', function(req, res) {
    Object.find(function(err, objects) {
      if (err){
        res.json({info: 'error during find objects', error: err});
      } else {
        res.json({info: 'objects found successfully', data: objects});
      }
    });
  });
  /*One*/
  app.get('/objects/:id', function(req, res) {
    Object.findById(req.params.id, function(err, object) {
      if (err) res.json({info: 'error during find object', error: err});
      if (object) {
        res.json({info: 'object found successfully', data: object});
      } else {
        res.json({info: 'object not found'});
      }
    });
  });

  /*UPDATE*/
  app.put('/objects/:id', function(req, res) {
    Object.findById(req.params.id, function(err, object) {
      if (err) res.json({info: 'error during find object', error: err});
      if (object){
        _.merge(object, req.body);
        Object.save(function(err) {
          if (err) {
            res.json({info: 'error during object update', error: err});
          } else {
            res.json({info: 'object updated successfully'});
          }
        });
      } else {
        res.json({info: 'object not found'});
      }
    });
  });

  /*DELETE*/
  app.delete('/objects/:id', function(req, res) {
    Object.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({info: 'error during object delete', error: err});
      } else {
        res.json({info: 'object removed successfully'});
      }
    });
  });
}
