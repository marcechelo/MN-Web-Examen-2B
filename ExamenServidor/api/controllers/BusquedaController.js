/**
 * BusquedaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  buscarPelicula: function (req, res) {

    var query = "SELECT * FROM pelicula WHERE nombre like '%"+req.params.buscar+"%' limit "+req.params.numero+",4";
    Pelicula.query(query,function(err, rawResult) {
      if (err) { return res.serverError(err); }

      return res.json(rawResult.rows);

    });

  },

  buscarActor: function (req, res) {

    var query = "SELECT * FROM actor WHERE nombres like '%"+req.params.buscar+"%' limit "+req.params.numero+",2";
    Actor.query(query,function(err, rawResult) {
      if (err) { return res.serverError(err); }

      return res.json(rawResult.rows);

    });

  },

  buscarUsuario: function (req, res) {

    var query = "SELECT * FROM usuario WHERE nombre like '%"+req.params.buscar+"%' limit "+req.params.numero+",4";
    Usuario.query(query,function(err, rawResult) {
      if (err) { return res.serverError(err); }

      return res.json(rawResult.rows);

    });

  },

  buscarPeliculaTodo: function (req, res) {

    Pelicula.find({ nombre : { contains : req.params.parametros } }).exec(function(err, data) {
      if (err) return next(err);
      res.json(data);
    });

  },

};

