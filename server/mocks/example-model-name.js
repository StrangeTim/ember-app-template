// THIS FILE CREATED WITH CONSOLE COMMAND   'ember g http-mock exampleModelName'
// THIS FILE USED TO CONFIGURE WHAT THE API LOOKS LIKE

module.exports = function(app) {
  var express = require('express');
  var exampleModelNameRouter = express.Router();

  exampleModelNameRouter.get('/', function(req, res) {
    res.send({
      'example-model-name': [
        {
          id: 1,                    // EXAMPLE of exampleModelName
          attribute1: 'Blargh',
          attribute2: 'wtf'
        },
        {
          id: 2,                    // EXAMPLE of exampleModelName
          attribute1: 'Blargh2',
          attribute2: 'wtf2'
        }
      ]
    });
  });

  exampleModelNameRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  exampleModelNameRouter.get('/:id', function(req, res) {
    res.send({
      'example-model-name': {
        id: req.params.id
      }
    });
  });

  exampleModelNameRouter.put('/:id', function(req, res) {
    res.send({
      'example-model-name': {
        id: req.params.id
      }
    });
  });

  exampleModelNameRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/example_model_name', exampleModelNameRouter);
};
