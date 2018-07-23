/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },

  'GET /hello': 'LoginController.helloworld',

  'GET /buscarPeliculas/:parametros': 'BusquedaController.buscarPelicula',

  'GET /buscarActores/:parametros': 'BusquedaController.buscarActor',

  'GET /buscarUsuarios/:parametros': 'BusquedaController.buscarUsuario',

};
