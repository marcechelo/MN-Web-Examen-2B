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

  'GET /buscarPeliculas/:buscar/limite/:numero': 'BusquedaController.buscarPelicula',

  'GET /buscarActores/:buscar/limite/:numero': 'BusquedaController.buscarActor',

  'GET /buscarUsuarios/:buscar/limite/:numero': 'BusquedaController.buscarUsuario',

  'GET /buscarPeliculaTodo/:parametros': 'BusquedaController.buscarPeliculaTodo',

};
