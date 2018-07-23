/**
 * BusquedaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  buscarPelicula: function (req, res) {

    Pelicula.find({ nombre : { contains : req.params.parametros } }).exec(function(err, data) {
      if (err) return next(err);
      res.json(data);
    });

  },

  buscarActor: function (req, res) {

    Actor.find({ nombres : { contains : req.params.parametros } }).exec(function(err, data) {
      if (err) return next(err);
      res.json(data);
    });

  },

  buscarUsuario: function (req, res) {

    Usuario.find({ nombre : { contains : req.params.parametros } }).exec(function(err, data) {
      if (err) return next(err);
      res.json(data);
    });

  }

};

